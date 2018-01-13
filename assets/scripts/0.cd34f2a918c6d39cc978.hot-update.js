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
			var moveAt = function moveAt(event) {
				range.style.left = event.offsetX + 'px';
			};
			range.style.zIndex = '1000';
			moveAt(e);
			console.log('mousedown ' + e.offsetX);
			document.onmousemove = function (ev) {
				moveAt(ev);
				console.log('mousemove ' + ev.offsetX);
			};
		};
		range.onmouseup = function () {
			document.onmousemove = null;
			range.onmouseup = null;
			return false;
		};
		range.ondragstart = function () {
			return false;
		};
	});

/***/ }
])
//# sourceMappingURL=0.cd34f2a918c6d39cc978.hot-update.js.map