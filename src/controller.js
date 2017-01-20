(function(exports) {

  function Controller(updateTreeModel, updateTreeView) {
    this.updateTreeModel = updateTreeModel;
    this.updateTreeView = updateTreeView;
  };

  Controller.prototype = {
    updatePage: function() {
      window.requestCount();
      this.updateTreeView.updateCounterHtml(window.msg);
      $("#moving_bar").css("height",(`${parseInt(document.getElementById("counter").innerHTML)}%`))
    }
  };

  exports.Controller = Controller;

})(this);
