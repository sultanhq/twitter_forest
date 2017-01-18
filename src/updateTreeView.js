(function(exports) {

  function UpdateTreeView(model) {
    this.updateTreeModel = model;
  };

  UpdateTreeView.prototype = {
    updateInnerHtml: function() {
    element = document.getElementById('counter')
    element.innerHTML = this.updateTreeModel.counter
    }
  };

  exports.UpdateTreeView = UpdateTreeView;

})(this);
