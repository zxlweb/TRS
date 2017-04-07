const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfigProd = require('./webpack.config.js');
const cache = require('gulp-cache');
const packageFile = require('package')('.');
const exec = require('child_process').exec;
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const tsProjectDev = ts.createProject('tsconfig.json', {isolatedModules: true});
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const lessBaseImport = require('gulp-less-base-import');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');
const path = require('path');
const oss = require('gulp-oss');
const gzip = require("gulp-gzip");
const del = require('del');
const moment = require('moment');

const BUILD_DIR = 'dist';
const SRC_DIR = 'src';
const TEST_DIR = 'test';
const IMG_SRC_DIR = 'images';
const IMG_DEST_DIR = 'images';
const COMPONENT_SRC_DIR = 'components';
const COMPONENT_DEST_DIR = 'components';
const JS_LIB_SRC_DIR = 'lib';
const JS_LIB_DEST_DIR = 'lib';

const IMAGE_TO_COMPRESS = '.jpg,.png,.svg,.gif';

gulp.task('clean', function (done) {
    del([path.join(BUILD_DIR, '**')]).then(function () {
        done();
    });
});

gulp.task('sentry:release', ['webpack'], function () {
    return gulp.src([path.join(BUILD_DIR, 'js/page', '*')], { base: '.' })
        .pipe(sentryRelease.release());
});

gulp.task('image compression', ['clean'], function () {
    var imagemin = require('/usr/lib/node_modules/gulp-imagemin');

    return gulp.src([path.join(SRC_DIR, IMG_SRC_DIR, '**')])
        .pipe(cache(imagemin(), {
            fileCache: new cache.Cache({ tmpDir: '/home/build_cache', cacheDirName: packageFile.name + '-cache' })
        }))
        .pipe(gulp.dest(path.join(BUILD_DIR, IMG_DEST_DIR)));
});

gulp.task('update img to oss', ['image compression'], function () {
    var config = require('./conf/prod');

    return gulp.src(path.join(BUILD_DIR, IMG_SRC_DIR, '**'))
        .pipe(gzip({ append: false }))
        .pipe(cache(oss({
            "key": config['@ALIYUN'].ACCESS_KEY_ID,
            "secret": config['@ALIYUN'].ACCESS_KEY_SECRET,
            "endpoint": 'http://' + config['@ALIYUN'].OSS_ENDPOINT
        }, {
                headers: {
                    Bucket: config['@ALIYUN'].BUCKET,
                    ContentEncoding: 'gzip'
                },
                uploadPath: config['@ALIYUN'].APP_IMG_DIRECTORY + '/'
            }), {
                fileCache: new cache.Cache({ tmpDir: '/home/build_cache', cacheDirName: packageFile.name + '-cache-oss-img' })
            }));
});

gulp.task('webpack', ['clean'], function (done) {
    return webpack(webpackConfigProd, function (err, stats) {
        var output = stats.toString();
        // if (output.indexOf('ERROR') !== -1) {
        //     console.log(output);
        //     return done(new Error('webpack build failed'));
        // }
        done();
    });
});

gulp.task('compile less', ['clean'], function () {
    var processors = [autoprefixer, cssnano({ zindex: false, reduceIdents: false })];

    return gulp.src([path.join(SRC_DIR, '**/*.less')])
        .pipe(plumber())
        .pipe(lessBaseImport(webpackConfigProd.lessImportLoader.base))
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest(path.join(BUILD_DIR)));
});
gulp.task('compile less once', [], function () {
    var processors = [autoprefixer, cssnano({ zindex: false, reduceIdents: false })];

    return gulp.src([path.join(SRC_DIR, '**/*.less')])
        .pipe(plumber())
        .pipe(lessBaseImport(webpackConfigProd.lessImportLoader.base))
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest(path.join(BUILD_DIR)))
        .on('end', function(){
            exec('pm2 restart all');
        });
});

gulp.task('compile ts', ['clean'], function () {
    return tsProject
        .src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(path.join(BUILD_DIR)));
});
gulp.task('compile ts once', [], function () {
    return tsProjectDev
        .src()
        .pipe(plumber())
        .pipe(tsProjectDev())
        .js
        .pipe(gulp.dest(path.join(BUILD_DIR)))
        .on('end', function () {
            exec('pm2 restart all');
        });
});
gulp.task('compile tests', ['clean'], function () {
    return gulp.src(path.join(TEST_DIR, '**/*.babel'))
        .pipe(babel())
        .pipe(gulp.dest(path.join(BUILD_DIR, TEST_DIR)));
});

gulp.task('move lib', ['clean'], function () {
    return gulp.src(path.join(SRC_DIR, JS_LIB_SRC_DIR, '*')).pipe(gulp.dest(path.join(BUILD_DIR, JS_LIB_DEST_DIR)));
});
gulp.task('move lib once', [], function () {
    return gulp.src(path.join(SRC_DIR, JS_LIB_SRC_DIR, '*'))
    .pipe(gulp.dest(path.join(BUILD_DIR, JS_LIB_DEST_DIR)))
    .on('end', function() {
        exec('pm2 restart all');
    });
});

gulp.task('watch webpack', [], function () {
    try {
        let compiler = webpack(require('./webpack.dev.config'));

        compiler.watch({
            aggregateTimeout: 300, // wait so long for more changes
            poll: 2000 // use polling instead of native watchers
            // pass a number to set the polling interval
        }, function (err, stats) {
            if(err) {
                console.error(err);
            } else {
                let now = new moment();
                console.info(`[${now.format('HH:mm:ss')}]------webpack compile finished-------`);
                exec('pm2 restart all');
            }
        });
    } catch (e) {
        console.error(e);
    }
});

gulp.task('watch ts', ['compile ts once'], function () {
    gulp.watch([path.join(SRC_DIR, '**/*.{ts,tsx}')], ['compile ts once']);
});

gulp.task('watch less', ['compile less once'], function () {
    gulp.watch(path.join(SRC_DIR, '**/*.less'), ['compile less once']);
});

function watchThingsOnlyMove(src, dest) {
    gulp.src(src).pipe(gulp.dest(dest));

    gulp.watch((src), function () {
        gulp.src(src).pipe(gulp.dest(dest));
    });
}

gulp.task('move img', [], function () {
    return gulp.src(path.join(SRC_DIR, IMG_SRC_DIR, '**'))
        .pipe(gulp.dest(path.join(BUILD_DIR, IMG_DEST_DIR)))
        .on('end', function () {
            exec('pm2 restart all');
        });
});

gulp.task('watch lib', ['move lib once'], function () {
    gulp.watch(path.join(SRC_DIR, JS_LIB_SRC_DIR, '**'), ['move lib once']);
});
gulp.task('watch img', ['move img'], function () {
    gulp.watch(path.join(SRC_DIR, IMG_SRC_DIR, '**'), ['move img']);
});

gulp.task('default', ['clean', 'image compression', 'update img to oss', 'compile ts', 'webpack', 'compile less', 'move lib']);
gulp.task('dev', ['watch webpack', 'watch ts', 'watch lib', 'watch img', 'watch less'], function () {
    exec('pm2 restart all');
});
gulp.task('test', ['babel', 'compile less', 'compile tests'], function () {
    return gulp.src(path.join(BUILD_DIR, TEST_DIR, 'spec.js'), { read: false })
        .pipe(mocha());
});
gulp.task('cov', [], function (done) {
    exec('istanbul cover _mocha dist/test/spec.js -- -R spec', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        if (err !== null) {
            console.error('code coverage failed!');
            process.exit(1);
        } else {
            done();
            exec('open coverage/lcov-report/index.html');
        }
    });
});
