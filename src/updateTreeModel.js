(function(exports) {

  function UpdateTreeModel() {
    this.counter = 0;
  };

  UpdateTreeModel.prototype = {
    randomNumberGenerator: function() {
      return Math.floor((Math.random() * 100) + 1);
    },

    updateCounter: function() {
      this.counter = this.randomNumberGenerator();
    },

  };

  exports.UpdateTreeModel = UpdateTreeModel;

})(this);
