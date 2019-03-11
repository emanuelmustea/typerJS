"use strict";

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Typer = (function() {
  function Typer() {
    var _ref,
      _ref$debug,
      _ref$elem,
      _ref$typeText,
      _ref$repeat,
      _ref$interval,
      _ref$delay,
      _ref$typingLine,
      _ref$deleteOnFinish,
      _ref$hideLineOnFinish,
      _this = this;

    var params =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : ((_ref = {}),
          (_ref$debug = _ref.debug),
          (debug = _ref$debug === undefined ? false : _ref$debug),
          (_ref$elem = _ref.elem),
          (elem = _ref$elem === undefined ? null : _ref$elem),
          (_ref$typeText = _ref.typeText),
          (typeText = _ref$typeText === undefined ? null : _ref$typeText),
          (_ref$repeat = _ref.repeat),
          (repeat = _ref$repeat === undefined ? 0 : _ref$repeat),
          (_ref$interval = _ref.interval),
          (interval = _ref$interval === undefined ? 100 : _ref$interval),
          (_ref$delay = _ref.delay),
          (delay = _ref$delay === undefined ? 0 : _ref$delay),
          (_ref$typingLine = _ref.typingLine),
          (typingLine = _ref$typingLine === undefined ? true : _ref$typingLine),
          (_ref$deleteOnFinish = _ref.deleteOnFinish),
          (deleteOnFinish =
            _ref$deleteOnFinish === undefined ? false : _ref$deleteOnFinish),
          (_ref$hideLineOnFinish = _ref.hideLineOnFinish),
          (hideLineOnFinish =
            _ref$hideLineOnFinish === undefined ? true : _ref$hideLineOnFinish),
          _ref);

    _classCallCheck(this, Typer);

    this.a = params;
    this.setValues(params);
    this.log("init");
    this.createElement();
    if (this.b) this.c = new Line(this.d);

    this.e = setInterval(function() {
      if (_this.f) return;
      if (_this.g > 0 && _this.h >= _this.g) {
        if (_this.i && _this.b) {
          _this.c.hide();
        }
        return;
      }
      if (_this.j) {
        if (_this.k < _this.l) {
          _this.k++;
          return;
        } else {
          _this.k = 0;
          _this.j = false;
        }
      }
      if (!_this.m) {
        if (_this.n.length < _this.o[_this.p].length) {
          _this.n = _this.o[_this.p].substr(0, _this.n.length + 1);
        } else if (_this.n.length >= _this.o[_this.p].length) {
          if (
            _this.h == _this.g - 1 &&
            _this.p == _this.o.length - 1 &&
            !_this.q
          ) {
            if (_this.i && _this.b) {
              _this.c.hide();
            }
            _this.m = false;
            return;
          } else {
            _this.m = true;
          }
          if (_this.l > 0) _this.j = true;
        }
      } else {
        if (_this.n.length > 0) {
          _this.n = _this.o[_this.p].substr(0, _this.n.length - 1);
        } else if (_this.n.length == 0) {
          _this.m = false;
          if (_this.p < _this.o.length - 1) _this.p++;
          else {
            _this.h++;
            _this.p = 0;
          }
        }
      }
      _this.r.innerHTML ='&#x200a;' + _this.n;
    }, this.e);
  }

  Typer.prototype.setValues = function setValues(params) {
    var _params$debug = params.debug,
      debug = _params$debug === undefined ? false : _params$debug,
      _params$elem = params.elem,
      elem = _params$elem === undefined ? null : _params$elem,
      _params$typeText = params.typeText,
      typeText = _params$typeText === undefined ? null : _params$typeText,
      _params$repeat = params.repeat,
      repeat = _params$repeat === undefined ? 0 : _params$repeat,
      _params$interval = params.interval,
      interval = _params$interval === undefined ? 100 : _params$interval,
      _params$delay = params.delay,
      delay = _params$delay === undefined ? 0 : _params$delay,
      _params$typingLine = params.typingLine,
      typingLine = _params$typingLine === undefined ? true : _params$typingLine,
      _params$deleteOnFinis = params.deleteOnFinish,
      deleteOnFinish =
        _params$deleteOnFinis === undefined ? false : _params$deleteOnFinis,
      _params$hideLineOnFin = params.hideLineOnFinish,
      hideLineOnFinish =
        _params$hideLineOnFin === undefined ? true : _params$hideLineOnFin;

    this.debug = debug;
    this.f = false;
    this.i = hideLineOnFinish;
    this.q = deleteOnFinish;
    this.d = elem != null ? document.querySelector(elem) : this.error("elem");
    this.o = typeText != null ? typeText : this.error("typeText", typeText);
    this.o = _typeof(this.o) === "object" ? this.o : [this.o];
    this.g = repeat;
    this.e = interval <= 0 ? this.error("divideByZero") : interval;
    this.l = delay / interval;
    this.b = typingLine;
    this.n = "";
    if (delay > 0) {
      this.j = false;
    }
    this.k = 0;
    this.m = false;
    this.h = 0;
    this.p = 0;
  };

  Typer.prototype.error = function error(code, text) {
    var codeList = {
      elem: "Please specify an valid element class name",
      typeText: 'The given text "' + text + "\" can't be used",
      divideByZero: "The interval param must be greater than 0"
    };
    if (codeList[code]) {
      throw new Error(codeList[code]);
    }
  };

  Typer.prototype.log = function log(code) {
    var logList = {
      init:
        "Typer was initialized with debug option. All warnings will be displayed in the console."
    };
    if (this.debug && logList[code]) console.log(logList[code]);
  };

  Typer.prototype.createElement = function createElement() {
    this.r = document.createElement("span");
    this.d.append(this.r);
  };

  Typer.prototype.pause = function pause() {
    this.f = true;
  };

  Typer.prototype.play = function play() {
    this.f = false;
  };

  Typer.prototype.reload = function reload() {
    this.setValues(this.a);
  };

  Typer.prototype.destroy = function destroy() {
    clearInterval(this.e);
    this.c.destroy();
    this.d.innerHTML = null;
  };

  return Typer;
})();

var Line = (function() {
  function Line(element) {
    var _this2 = this;

    _classCallCheck(this, Line);

    this.d = element;
    this.s = false;
    this.createLine();
    this.t = false;
    this.e = setInterval(function() {
      if (_this2.s) return;
      if (_this2.t == false) {
        _this2.b.style.display = "none";
        _this2.t = true;
      } else {
        _this2.b.style.display = "inline-block";
        _this2.t = false;
      }
    }, 500);
  }

  Line.prototype.hide = function hide() {
    this.s = true;
    this.t = true;
    this.b.style.display = "none";
  };

  Line.prototype.show = function show() {
    this.b.style.display = "inline-block";
    this.t = false;
    this.s = false;
  };

  Line.prototype.createLine = function createLine() {
    this.b = document.createElement("span");
    this.b.innerHTML = "│";
    this.d.appendChild(this.b);
  };

  Line.prototype.destroy = function destroy() {
    clearInterval(this.e);
    this.b = null;
  };

  return Line;
})();
