'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EmployeeListJsx = require('./EmployeeList.jsx');

var _EmployeeListJsx2 = _interopRequireDefault(_EmployeeListJsx);

_reactDom2['default'].render(_react2['default'].createElement(
  _react2['default'].StrictMode,
  null,
  _react2['default'].createElement(_EmployeeListJsx2['default'], null)
), document.getElementById('content'));