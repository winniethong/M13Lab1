'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmployeeFilterJsx = require('./EmployeeFilter.jsx');

var _EmployeeFilterJsx2 = _interopRequireDefault(_EmployeeFilterJsx);

var _EmployeeAddJsx = require('./EmployeeAdd.jsx');

var _EmployeeAddJsx2 = _interopRequireDefault(_EmployeeAddJsx);

function EmployeeRow(props) {
  return _react2['default'].createElement(
    'tr',
    null,
    _react2['default'].createElement(
      'td',
      null,
      props.employee.name
    )
  );
}

function EmployeeTable(props) {
  var rows = props.employees.map(function (emp) {
    return _react2['default'].createElement(EmployeeRow, { key: emp.id, employee: emp });
  });

  return _react2['default'].createElement(
    'table',
    null,
    _react2['default'].createElement(
      'thead',
      null,
      _react2['default'].createElement(
        'tr',
        null,
        _react2['default'].createElement(
          'th',
          null,
          'Name'
        )
      )
    ),
    _react2['default'].createElement(
      'tbody',
      null,
      rows
    )
  );
}

var EmployeeList = (function (_React$Component) {
  _inherits(EmployeeList, _React$Component);

  function EmployeeList() {
    _classCallCheck(this, EmployeeList);

    _get(Object.getPrototypeOf(EmployeeList.prototype), 'constructor', this).call(this);
    this.state = {
      employees: [{ id: 1, name: 'Zak Ruvalcaba' }, { id: 2, name: 'Sally Smith' }, { id: 3, name: 'Holly Unlikely' }, { id: 4, name: 'Amol Shookup' }]
    };
  }

  _createClass(EmployeeList, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          null,
          'Employee List'
        ),
        _react2['default'].createElement(_EmployeeFilterJsx2['default'], null),
        _react2['default'].createElement(EmployeeTable, { employees: this.state.employees }),
        _react2['default'].createElement(_EmployeeAddJsx2['default'], null)
      );
    }
  }]);

  return EmployeeList;
})(_react2['default'].Component);

exports['default'] = EmployeeList;
module.exports = exports['default'];