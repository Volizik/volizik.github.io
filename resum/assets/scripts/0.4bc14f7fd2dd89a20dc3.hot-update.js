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
		var range = document.getElementById('holder');
	
		range.onmousedown = function (e) {
			function getCoords(el) {
				var box = el.getBoundingClientRect();
				return {
					left: box.left + pageXOffset
				};
			}
			console.log(e.pageX);
			var coords = getCoords(range);
			var parentPos = document.querySelector('.scale__slider').getBoundingClientRect();
			var shiftX = parentPos.left - coords.left;
			function moveAt() {
				range.style.left = parentPos.left - shiftX + 'px';
			}
			moveAt(e);
			document.onmousemove = function (elem) {
				moveAt(elem);
			};
			range.onmouseup = function () {
				document.onmousemove = null;
				range.onmouseup = null;
			};
		};
		range.ondragstart = function () {
			return false;
		};
	});

/***/ }
])
//# sourceMappingURL=0.4bc14f7fd2dd89a20dc3.hot-update.js.map