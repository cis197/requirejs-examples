// In js/myModule.js
define(function(require) {
  var Model = require('backbone').Model;
  var HelloModel = Model.extend({
    defaults: {
      name: 'HelloModel'
    }
  });
  return HelloModel;
});
