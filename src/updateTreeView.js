(function(exports) {

  function UpdateTreeView() {};

  UpdateTreeView.prototype = {
    updateCounterHtml: function(modelCounter) {
    element = document.getElementById('counter')
    element.innerHTML = modelCounter;
    }
  };

  exports.UpdateTreeView = UpdateTreeView;

})(this);
