'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/clarainesagudelozapata/github/news-app/pages/index.js?entry';
/* So fetch works in the server and the browser */

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-336985459',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-336985459',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'Latest News'), this.props.stories.map(function (story) {
        return _react2.default.createElement('h2', {
          className: 'jsx-336985459',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, _react2.default.createElement('a', { href: story.url, className: 'jsx-336985459',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, story.title));
      }), _react2.default.createElement(_style2.default, {
        styleId: '2311143315',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXJhaW5lc2FndWRlbG96YXBhdGEvZ2l0aHViL25ld3MtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnIC8qIFNvIGZldGNoIHdvcmtzIGluIHRoZSBzZXJ2ZXIgYW5kIHRoZSBicm93c2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKVxuICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IHJlcS5qc29uKClcbiAgIHJldHVybiB7IHN0b3JpZXMgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICB7IHRoaXMucHJvcHMuc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXG4gICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgKSkgfVxuXG4gICAgICA8c3R5bGUganN4PntgIC8qIFlvdXIgUGFnZeKAmXMgQ1NTICovIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgIC8qIFlvdXIgR2xvYmFsIENTUyAqLyBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '1094381545',
        css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCeUIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXJhaW5lc2FndWRlbG96YXBhdGEvZ2l0aHViL25ld3MtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnIC8qIFNvIGZldGNoIHdvcmtzIGluIHRoZSBzZXJ2ZXIgYW5kIHRoZSBicm93c2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKVxuICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IHJlcS5qc29uKClcbiAgIHJldHVybiB7IHN0b3JpZXMgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICA8aDE+TGF0ZXN0IE5ld3M8L2gxPlxuXG4gICAgICB7IHRoaXMucHJvcHMuc3Rvcmllcy5tYXAoKHN0b3J5KSA9PiAoXG4gICAgICA8aDI+PGEgaHJlZj17IHN0b3J5LnVybCB9Pnsgc3RvcnkudGl0bGUgfTwvYT48L2gyPlxuICAgICAgKSkgfVxuXG4gICAgICA8c3R5bGUganN4PntgIC8qIFlvdXIgUGFnZeKAmXMgQ1NTICovIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgIC8qIFlvdXIgR2xvYmFsIENTUyAqLyBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var req, stories;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.hackerwebapp.com/news');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                stories = _context.sent;
                return _context.abrupt('return', { stories: stories });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic3RvcmllcyIsIm1hcCIsInN0b3J5IiwidXJsIiwidGl0bGUiLCJmZXRjaCIsInJlcSIsImpzb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQTs7Ozs7QUFBMEI7Ozs7Ozs7Ozs7Ozs7NkJBUWYsQUFDUDs2QkFBTyxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNQO0FBRE87QUFBQSxPQUFBLGtCQUNQLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURPLEFBQ1AsQUFFSSxxQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLE9BQUQ7K0JBQ3pCLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLFNBQUEsa0JBQUksY0FBQSxPQUFHLE1BQU8sTUFBVixBQUFnQixnQkFBaEI7O3NCQUFBO3dCQUFBLEFBQXdCO0FBQXhCO2lCQURxQixBQUN6QixBQUFJLEFBQThCO0FBSjdCLEFBR0g7aUJBSEc7YUFBQTtBQUFBO2lCQUFBO2FBQVAsQUFBTyxBQVVSO0FBVlE7Ozs7Ozs7Ozs7Ozt1QkFMVSxNOzttQkFBWjtBOzt1QkFDZ0IsSUFBQSxBQUFJLEE7O21CQUFwQjtBO2lEQUNDLEVBQUUsU0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSm1CLGdCQUFNLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXJhaW5lc2FndWRlbG96YXBhdGEvZ2l0aHViL25ld3MtYXBwIn0=