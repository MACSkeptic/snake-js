Array.prototype.each = function (fn) {
  return _.each(this, fn);
};

Array.prototype.all = function (fn) {
  return _.inject(this, function (acc, ele) { return acc && fn(ele); }, true);
};
