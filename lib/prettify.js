Array.prototype.each = function (fn) {
  return _.each(this, fn);
};

Array.prototype.last = function () {
  return _.last(this);
};

Array.prototype.all = function (fn) {
  return _.inject(this, function (acc, ele) { return acc && fn(ele); }, true);
};

Array.prototype.any = function (fn) {
  return _.any(this, fn);
};

Object.prototype.defaults = function (defaults) {
  return _.defaults(this, defaults);
};

Object.prototype.times = function (fn) {
  for(var i = 0; i < parseInt(this, 10); i++) {
    fn(i);
  }
};
