"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var style = _importLess('./index', __dirname);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("style", { dangerouslySetInnerHTML: { __html: style } }),
            React.createElement("div", { className: "s-header" },
                React.createElement("div", { className: "ex-header-logo" },
                    React.createElement("span", { className: "ex-header-logo-text" }, "\u5B66\u800C\u601DTRS")))));
    };
    return Header;
}(React.Component));
exports["default"] = Header;
