"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Parameter = require("../Parameter");

var _Parameter2 = _interopRequireDefault(_Parameter);

var _fetchResource = require("./fetchResource");

var _fetchResource2 = _interopRequireDefault(_fetchResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (resource) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var doNotFetchAgain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return doNotFetchAgain ? resource.parameters : (0, _fetchResource2.default)(resource.url, options).then(function (_ref) {
    var _ref$parameters = _ref.parameters,
        parameters = _ref$parameters === undefined ? [] : _ref$parameters;

    var resourceParameters = [];
    parameters.forEach(function (_ref2) {
      var _ref2$property = _ref2.property,
          property = _ref2$property === undefined ? null : _ref2$property,
          required = _ref2.required,
          variable = _ref2.variable;

      if (null === property) {
        return;
      }

      var _ref3 = resource.fields.find(function (_ref4) {
        var name = _ref4.name;
        return property === name;
      }) || {},
          _ref3$range = _ref3.range,
          range = _ref3$range === undefined ? null : _ref3$range;

      resourceParameters.push(new _Parameter2.default(variable, range, required, ""));
    });

    return resourceParameters;
  });
};