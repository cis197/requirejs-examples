// In js/myModule.js
define(function(require) {
  var $ = require('jquery');
  var messageText = require('text!messageText.txt');
  return function (selector) {
    var $msg = $('<h1>').text(messageText);
    $(selector).append($msg);
  }
});
