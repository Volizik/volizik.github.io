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
		// Поставить инпуты (radio и checkbox) в положение checked, если у них атрибут data-check имеет значение true
		var inputs = document.querySelectorAll('[data-check="true"]');
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].setAttribute('checked', 'checked');
		}
		// Слайдер
		var range = document.querySelector('.scale__range');
		function getCoords(el) {
			var box = el.getBoundingClientRect();
			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};
		}
		range.onmousedown = function (e) {
			var coord = getCoords(range);
			var shiftX = e.pageX - coorgs;
		};
	});

/***/ }
])
//# sourceMappingURL=0.e5a3489f36219ef433bb.hot-update.js.map