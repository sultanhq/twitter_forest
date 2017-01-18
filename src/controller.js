(function(exports) {

  function Controller(updateTreeModel, updateTreeView) {
    this.updateTreeModel = updateTreeModel;
    this.updateTreeView = updateTreeView;
  };

  Controller.prototype = {
    updatePage: function() {
      this.updateTreeModel.updateCounter();
      var counter = this.updateTreeModel.counter;
      this.updateTreeView.updateCounterHtml(counter);
      $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
    }
  };

  exports.Controller = Controller;

})(this);
