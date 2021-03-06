/**
 * @author John Pittman <johnrichardpittman@gmail.com> 
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.BreadcrumbManager = factory();
    }
}(this, function() {
    'use strict'

    /**
     * @constructor
     * @param {int} [limit=-1] - Maximum number of breadcrumbs to track. -1 is unlimited.
     */
    function BreadcrumbManager(limit) {
        this._breadcrumbs = [];
        this._limit = limit || -1;
        this._currIndex = -1;
    }

    /**
     * Adds a new breadcrumb to the log.
     * @param {*} breadcrumb - Should be the same type as the other breadcrumbs objects.
     */
    BreadcrumbManager.prototype.add = function(breadcrumb) {
        var breadcrumbs = this._breadcrumbs;
        var currIndex = this._currIndex;

        // Implement logic to overwrite the next breadcrumb if it doesn't match the new one.
        // An example of this would be navigating back and then taking a different route which adds
        // the need to clear all breadcrumbs ahead of the current on and start a new head.
        // Is navigation in progress?
        if (currIndex < breadcrumbs.length - 1) {
            // Is it a new path?
            if (breadcrumb !== breadcrumbs[currIndex + 1]) {
                for (var i = 0, n = breadcrumbs.length - ++this._currIndex; i < n; ++i) {
                    breadcrumbs.pop();
                }
                breadcrumbs.push(breadcrumb);
            }
        } else {
            // Implement maximum number of breadcrumbs allowed if a limit is set.
            if (this._limit > -1) {
                // Is this limit reached?
                if (breadcrumbs.length === this._limit)
                    breadcrumbs.shift();
            }

            ++this._currIndex;
            breadcrumbs.push(breadcrumb);
        }
    };

    /**
     * Removes all breadcrumbs.
     */
    BreadcrumbManager.prototype.clear = function() {
        var breadcrumbs = this._breadcrumbs;
        for (var i = 0, n = breadcrumbs.length; i < n; ++i) {
            breadcrumbs.shift();
        }
        this._currIndex = -1;
    };

    /**
     * Checks the log for a matching breadcrumb.
     * @param  {*} breadcrumb
     * @return {boolean}
     */
    BreadcrumbManager.prototype.contains = function(breadcrumb) {
        return (this._breadcrumbs.indexOf(breadcrumb) === -1) ? false : true;
    };

    /**
     * Returns the previous breadcrumb or undefined if there isn't one.
     * @return {*} - The value/object that the breadcrumb is or undefined if there is no previous.
     */
    BreadcrumbManager.prototype.prev = function() {
        return (this._currIndex > -1) ? this._breadcrumbs[--this._currIndex] : undefined;
    };

    /**
     * Returns the next breadcrumb or undefined if there isn't one.
     * @return {*} - The value/object that the breadcrumb is or undefined if there is no next.
     */
    BreadcrumbManager.prototype.next = function() {
        return (this._currIndex < this._breadcrumbs.length - 1) ? this._breadcrumbs[++this._currIndex] : undefined;
    };

    return BreadcrumbManager;
}));
