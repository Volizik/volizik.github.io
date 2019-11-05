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
		var holder = document.querySelector('.scale__holder');
		var slider = document.querySelector('.scale__slider');
		var sliderLeftOffset = slider.getBoundingClientRect().left;
		holder.onmousedown = function (e) {
			var moveAt = function moveAt(event) {
				holder.style.left = event.pageX - sliderLeftOffset - holder.offsetWidth / 2 + 'px';
			};
			moveAt(e);
			document.onmousemove = function (ev) {
				moveAt(ev);
			};
			document.onmouseup = function () {
				document.onmousemove = null;
				holder.onmouseup = null;
			};
		};
		holder.ondragstart = function () {
			return false;
		};
	});

/***/ }
])
//# sourceMappingURL=0.be1ce2e43f931c60a61f.hot-update.js.map