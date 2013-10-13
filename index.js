// Generated by CoffeeScript 1.6.3
(function() {
  var routes,
    __slice = [].slice;

  routes = require('routes');

  module.exports = function(pattern) {
    var router;
    router = routes();
    router.addRoute(pattern, function() {});
    return function() {
      var args, event, next, text, _i;
      args = 4 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 3) : (_i = 0, []), text = arguments[_i++], event = arguments[_i++], next = arguments[_i++];
      if ((event.matches = router.match(text)) != null) {
        if (this.opt.debug) {
          this.info("Matched \"" + pattern + "\" with \"" + text + "\"");
        }
        return next();
      }
    };
  };

}).call(this);
