define(function (require) {
  var View = require('backbone').View;
  var HelloView = View.extend({
    tagName: 'h1',
    render: function () {
      var txt = 'Hello from the HelloView! The model is ' + this.model.get('name') + '.';
      this.$el.text(txt);
    }
  });
  return HelloView;
});
