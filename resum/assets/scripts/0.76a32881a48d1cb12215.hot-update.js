webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		var inputs = document.querySelectorAll('[data-check="true"]');
		inputs.map(function (input) {
			console.log(input);
			// input.setAttribute('checked', 'checked');
		});
		console.log(inputs);
		// input.setAttribute('checked', 'checked');
	});

/***/ }
])
//# sourceMappingURL=0.76a32881a48d1cb12215.hot-update.js.map