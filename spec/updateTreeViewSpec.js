"use strict";

describe('UpdateTreeView', function() {

  var updateTreeView;
  var updateTreeModel;

  beforeEach(function() {
    updateTreeModel = jasmine.createSpyObj('updateTreeModel', ['counter']);
    updateTreeView = new UpdateTreeView(updateTreeModel);
  });

  // it("should update innerHTML", function() {
  //   spyOn(updateTreeModel, 'counter').and.returnValue(20);
  //   var dummyElement = document.createElement('div', "counter");
  //   var element = document.getElementById("counter");
  //   updateTreeView.updateCounterHtml();
  //   expect(element).toEqual(20);
  // });

});
