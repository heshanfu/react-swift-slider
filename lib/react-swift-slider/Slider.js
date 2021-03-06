"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./assets/sass/react-swift-slider.css");

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _Control = require("./Control");

var _Control2 = _interopRequireDefault(_Control);

var _Dot = require("./Dot");

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.resetInterval = function () {
      clearInterval(_this.slideInterval);
      _this.slideInterval = setInterval(_this.nextSlide, _this.props.interval);
    };

    _this.nextSlide = function () {
      if (_this.state.currentSlide === _this.props.data.length - 1) {
        _this.setState({
          currentSlide: 0
        });
        return;
      }
      _this.setState({
        currentSlide: _this.state.currentSlide + 1
      });
      _this.resetInterval();
    };

    _this.prevSlide = function () {
      if (_this.state.currentSlide === 0) {
        _this.setState({
          currentSlide: _this.props.data.length - 1
        });
        return;
      }
      _this.setState({
        currentSlide: _this.state.currentSlide - 1
      });
      _this.resetInterval();
    };

    _this.goToSlide = function (idx) {
      _this.setState({
        currentSlide: idx
      });
      _this.resetInterval();
    };

    _this.state = {
      currentSlide: 0
    };
    _this.slideInterval = setInterval(_this.nextSlide, _this.props.interval);
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          height = _props.height,
          activeDotColor = _props.activeDotColor,
          dotColor = _props.dotColor,
          showDots = _props.showDots,
          enableNextAndPrev = _props.enableNextAndPrev;

      return _react2.default.createElement(
        "div",
        { className: "swift-slider-container" },
        _react2.default.createElement(
          "ul",
          { className: "swift-slider-slides", style: { height: height } },
          data.map(function (item, i) {
            return _react2.default.createElement(_Slide2.default, {
              active: i === _this2.state.currentSlide,
              src: item.src,
              key: item.id
            });
          })
        ),
        showDots ? _react2.default.createElement(
          "ul",
          { className: "swift-slider-dots" },
          data.map(function (item, i) {
            return _react2.default.createElement(_Dot2.default, {
              activeDotColor: activeDotColor,
              dotColor: dotColor,
              key: i,
              active: i === _this2.state.currentSlide,
              onClick: _this2.goToSlide,
              idx: i
            });
          })
        ) : "",
        enableNextAndPrev ? _react2.default.createElement(_Control2.default, { onPressPrev: this.prevSlide, direction: "prev" }) : "",
        enableNextAndPrev ? _react2.default.createElement(_Control2.default, { onPressNext: this.nextSlide, direction: "next" }) : ""
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;


Slider.propTypes = {
  data: _propTypes2.default.array.isRequired,
  height: _propTypes2.default.number,
  interval: _propTypes2.default.number,
  activeDotColor: _propTypes2.default.string,
  dotColor: _propTypes2.default.string,
  showDots: _propTypes2.default.bool,
  enableNextAndPrev: _propTypes2.default.bool
};

Slider.defaultProps = {
  height: 450,
  activeDotColor: "#e8784e",
  interval: 5000,
  dotColor: "#909192",
  showDots: true,
  enableNextAndPrev: true
};