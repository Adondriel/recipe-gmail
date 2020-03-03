"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  events = {
    'new-window': 'newWindow'
  };

  function newWindow(event) {
    console.info('gmail-new-window: ', event);
    const newUrl = event.url;
    const oldUrl = event.path[0].src;

    event.preventDefault();

    if (newUrl && oldUrl) {
      this.send('new-window', newUrl);
    }
  }

  function getMessages() {
    let count = 0;

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^0-9.]/g, ''), 10);
      }
    }

    count = parseInt(count, 10);

    if (isNaN(count)) {
      count = 0;
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};