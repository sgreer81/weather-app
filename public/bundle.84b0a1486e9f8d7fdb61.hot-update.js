webpackHotUpdate("bundle",{

/***/ "./src/client/App/App.jsx":
/*!********************************!*\
  !*** ./src/client/App/App.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst Axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst styles = __webpack_require__(/*! ./App.scss */ \"./src/client/App/App.scss\");\nconst Current = __webpack_require__(/*! ../components/Current/Current */ \"./src/client/components/Current/Current.jsx\");\nconst Header = __webpack_require__(/*! ../components/Header/Header */ \"./src/client/components/Header/Header.jsx\");\n\nclass App extends React.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            data: this.props.data\n\n            // componentDidMount() {\n            //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ data: response.data }))\n            // }\n\n        }, this.clickHandler = () => {\n            console.log('clicked!');\n        }, _temp;\n    }\n\n    render() {\n        return React.createElement(\n            'div',\n            { className: styles.App },\n            React.createElement(Header, null),\n            React.createElement(Current, { data: this.state.data })\n        );\n    }\n}\n\nmodule.exports = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0FwcC9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvQXBwL0FwcC5qc3g/NmQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IEF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0FwcC5zY3NzJylcbmNvbnN0IEN1cnJlbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0N1cnJlbnQvQ3VycmVudCcpXG5jb25zdCBIZWFkZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyAgICAgQXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKS50aGVuKHJlc3BvbnNlID0+IHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXNwb25zZS5kYXRhIH0pKVxuICAgIC8vIH1cblxuICAgIGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQhJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxDdXJyZW50IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBcEJBO0FBQ0E7QUFzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/App/App.jsx\n");

/***/ }),

/***/ "./src/client/components/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/client/components/Header/Header.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst styles = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'Header.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst Header = () => {\n    return React.createElement(\n        'header',\n        { className: styles.Header },\n        React.createElement(\n            'span',\n            null,\n            'Latest Weather'\n        )\n    );\n};\n\nmodule.exports = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4P2RhMDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCdIZWFkZXIuc2NzcycpXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG4gICAgICAgICAgICA8c3Bhbj5MYXRlc3QgV2VhdGhlcjwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/components/Header/Header.jsx\n");

/***/ })

})