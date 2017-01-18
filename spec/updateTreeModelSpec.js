"use strict";

describe('UpdateTreeModel', function() {
var updateTreeModel;

  beforeEach(function() {
    updateTreeModel = new UpdateTreeModel();
  });

  it("should generate a random number", function() {
    spyOn(updateTreeModel, 'randomNumberGenerator').and.returnValue(20);
    expect(updateTreeModel.randomNumberGenerator()).toEqual(20);
  });

  it("should update counter with a random number", function() {
    spyOn(updateTreeModel, 'randomNumberGenerator').and.returnValue(20);
    updateTreeModel.updateCounter();
    expect(updateTreeModel.counter).toEqual(20);
  });

});
