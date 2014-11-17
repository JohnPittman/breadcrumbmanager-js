"use strict";

var BreadcrumbManager = require('../src/breadcrumbmanager');

describe("BreadcrumbManager", function() {
    var bcm;

    beforeEach(function() {
        bcm = new BreadcrumbManager();
        bcm.add('1');
    });

    describe("#contains", function() {
        it("Returns true if the breadcrumb already exists.", function() {
            bcm.add('2');
            expect(bcm.contains('1')).toBe(true);
            expect(bcm.contains('5')).toBe(false);
        });
    });

    describe("#prev", function() {
        it("Return the previous breadcrumb.", function() {
            bcm.add('2');
            expect(bcm.prev()).toBe('1');
        });
    });

    describe("#next", function() {
        it("Return the next breadcrumb.", function() {
            bcm.add('2');
            bcm.prev();
            expect(bcm.next()).toBe('2');
            expect(bcm.next()).toBe(undefined);
        });
    });

    describe("#add", function() {
        it("Adds a breadcrumb.", function() {
            bcm.add('2');
            expect(bcm._breadcrumbs.length).toBe(2);
        });
        it("Clears the breadcrumbs ahead of the current one when starting a new path.", function() {
            bcm.add('2');
            bcm.add('3');
            bcm.prev();
            bcm.prev();
            expect(bcm._currIndex).toBe(0);
            bcm.add('4');
            expect(bcm._currIndex).toBe(1);
            expect(bcm._breadcrumbs.length).toBe(2);
            expect(bcm.prev()).toBe('1');
            expect(bcm.prev()).toBe(undefined);
        });
    });
});
