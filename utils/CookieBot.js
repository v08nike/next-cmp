"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function CookieBot(_ref) {
  var domainGroupId = _ref.domainGroupId,
      language = _ref.language;

  if (typeof window === 'undefined') {
    return null;
  }

  if (!domainGroupId || !document) {
    return null;
  }

  if (domainGroupId.length !== 36) {
    console.warn("The cookie bot domain group id is ".concat(domainGroupId.length, " characters, instead it should be 36 characters!"));
  }

  var script = document.createElement('script');
  script.setAttribute('id', 'CookieBot');
  script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
  script.setAttribute('data-cbid', domainGroupId);
  script.setAttribute('data-blockingmode', 'auto');
  script.setAttribute('type', 'text/javascript');

  if (language) {
    script.setAttribute('data-culture', language);
  }

  var head = document.querySelector('html > head');
  head.insertBefore(script, head.firstChild);
  return _react.default.createElement("script", {
    id: "CookieDeclaration",
    src: "https://consent.cookiebot.com/".concat(domainGroupId, "/cd.js"),
    type: "text/javascript",
    "data-culture": language,
    async: true
  });
}

CookieBot.defaultProps = {
  domainGroupId: undefined,
  language: undefined
};
CookieBot.propTypes = {
  domainGroupId: _propTypes.default.string,
  language: _propTypes.default.string
};
var _default = CookieBot;
exports.default = _default;
module.exports = exports.default;