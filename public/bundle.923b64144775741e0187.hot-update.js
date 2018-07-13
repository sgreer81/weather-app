webpackHotUpdate("bundle",{

/***/ "./src/client/App/App.css":
false,

/***/ "./src/client/App/App.jsx":
/*!********************************!*\
  !*** ./src/client/App/App.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst Axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst styles = __webpack_require__(/*! ./App.scss */ \"./src/client/App/App.scss\");\nconst Current = __webpack_require__(/*! ../components/Current/Current */ \"./src/client/components/Current/Current.jsx\");\n\nclass App extends React.Component {\n    constructor(...args) {\n        var _temp;\n\n        return _temp = super(...args), this.state = {\n            data: this.props.data\n\n            // componentDidMount() {\n            //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ data: response.data }))\n            // }\n\n        }, this.clickHandler = () => {\n            console.log('clicked!');\n        }, _temp;\n    }\n\n    render() {\n        return React.createElement(\n            'div',\n            { className: styles.App },\n            React.createElement(Current, { data: this.state.data })\n        );\n    }\n}\n\nmodule.exports = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0FwcC9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvQXBwL0FwcC5qc3g/NmQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IEF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0FwcC5zY3NzJylcbmNvbnN0IEN1cnJlbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0N1cnJlbnQvQ3VycmVudCcpXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICBBeGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSkpXG4gICAgLy8gfVxuXG4gICAgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCEnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgICAgICAgICA8Q3VycmVudCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBbkJBO0FBQ0E7QUFxQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/App/App.jsx\n");

/***/ }),

/***/ "./src/client/App/App.scss":
/*!*********************************!*\
  !*** ./src/client/App/App.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type.\\n> .App {\\n|     max-width: 50rem;\\n|     margin: 0 auto;\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0FwcC9BcHAuc2Nzcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/App/App.scss\n");

/***/ })

})