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
		var holder = document.querySelector('.scale__holder'); // бегунок на шкале
		var scale = document.querySelector('.scale'); // сама шкала
		var sliderLeftOffset = scale.getBoundingClientRect().left; // отступ шкалы от левой части экрана
		holder.onmousedown = function (e) {
			var moveAt = function moveAt(event) {
				holder.style.left = event.pageX - sliderLeftOffset - holder.offsetWidth / 2 + 'px';
			};
			moveAt(e);
			document.onmousemove = function (event) {
				moveAt(event);
				console.log(holder.getBoundingClientRect().left);
			};
			document.onmouseup = function () {
				document.onmousemove = null;
				holder.onmouseup = null;
			};
		};
		holder.ondragstart = function () {
			return false;
		};
		scale.onclick = function (e) {
			holder.style.left = e.pageX - sliderLeftOffset - holder.offsetWidth / 2 + 'px';
		};
	
		// if (holder.getBoundingClientRect().left < 0) {
		// 	holder.style.left = '0';
		// } else if ()
	});

/***/ }
])
//# sourceMappingURL=0.f5cafb8ff544636820dc.hot-update.js.map