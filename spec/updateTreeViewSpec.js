"use strict";

describe('UpdateTreeView', function() {

  var updateTreeView;
  var updateTreeModel;

  beforeEach(function() {
    updateTreeModel = jasmine.createSpyObj('updateTreeModel', ['counter']);
    updateTreeView = new UpdateTreeView(updateTreeModel);
  });

  it("should know of updateTreeModel", function() {
    expect(updateTreeView.updateTreeModel).toEqual(updateTreeModel);
  });

});
