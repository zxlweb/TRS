# server-less-loader [![Build Status](https://travis-ci.org/MaxLee1994/server-less-loader.svg)](https://travis-ci.org/MaxLee1994/server-less-loader)

replace server-side less import statement to webpack require.

## Installation

```
$ npm install server-less-loader --save-dev
```

## How to use

add server-less-loader before any js-related loader

```javascript
{
    test: /\.babel$/,
    loader: "babel!server-less-loader"
},
```

add serverLessLoader option in webpack.config.js

```javascript
serverLessLoader: {
    loader: 'importLess' // use any word except for 'require'
}
```

Before:

```javascript
import React from 'react';
var styleFile = importLess('./a', __dirname);

export default class a extends React.Component {
...
```

After:

```lejavascriptss
import React from 'react';
var styleFile = require('./a.less');

export default class a extends React.Component {
...
```
