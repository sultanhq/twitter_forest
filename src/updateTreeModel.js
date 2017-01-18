(function(exports) {
  function updateTreeModel() {
    this.counter = 0;
  }

  updateTreeModel.prototype = {
    randomNumberGenerator: function() {
      Math.floor((Math.random() * 100) + 1);
    }
  }

})(this);
