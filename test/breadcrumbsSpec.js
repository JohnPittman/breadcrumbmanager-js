"use strict";

var BreadcrumbManager = require('../src/breadcrumbs');

describe("BreadcrumbManager", function() {
    var bcm;

    beforeEach(function() {
        bcm = new BreadcrumbManager();
        bcm.add('1');
    });

    describe("#add", function() {
        it("Adds a breadcrumb.", function() {
            bcm.add('2');
            expect(bcm._breadcrumbs.length).toBe(2);
        });
    });
});
