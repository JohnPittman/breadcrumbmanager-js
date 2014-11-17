breadcrumbmanager
=================

Built as a way to track the previous history of anything and navigate back and forth through it in JavaScript.

<h1>Notes</h1>

Universal module defined to be used with <b>requirejs</b>, <b>node</b>, <b>commonjs</b>, or <b>global scoped</b> if no module loader is used.

- All files in the <b>dist</b> folder are minified for <b>production</b> use.
- All files in the <b>src</b> directory are the source code for <b>development</b> use.
- Packages point at the <b>dist</b> minified code with <b>source maps</b>.

<h1>Usage</h1>

<h4>Installation</h4>

npm: npm install breadcrumbmanager <br />
bower: bower install breadcrumbmanager

<h4>How to use...</h4>

    var bcm = new BreadcrumbManager(5);

    bcm.add('1');
    bcm.add('2');
    bcm.add('3');
    bcm.add('4');
    console.log('Breadcrumbs list: ' + bcm._breadcrumbs);

    var breadcrumb = bcm.prev();
    breadcrumb = bcm.prev();
    console.log('Navigate back twice. Breadcrumb: ' + breadcrumb);

    bcm.add('5');
    console.log('Visit a new path and add: 5');
    console.log('Breadcrumbs list: ' + bcm._breadcrumbs);

    breadcrumb = bcm.prev();
    console.log('Navigate back once. Breadcrumb: ' + breadcrumb);

    breadcrumb = bcm.next();
    console.log('Navigate forward once. Breadcrumb: ' + breadcrumb);
    breadcrumb = bcm.next();
    console.log('Navigate forward once. Breadcrumb: ' + breadcrumb);

    var contains = bcm.contains('1');
    console.log('Check history for 1. Breadcrumb found: ' + contains);

    console.log('Add 8 breadcrumbs to breach the set limit of 5.');
    bcm.add('6');
    bcm.add('7');
    bcm.add('8');
    bcm.add('9');
    bcm.add('10');
    bcm.add('11');
    bcm.add('12');
    bcm.add('13');
    console.log('Breadcrumbs list: ' + bcm._breadcrumbs);

    console.log('Clear breadcrumbs.');
    bcm.clear();

<h1>Development</h1>

<h4>Requirements</h4>

- nodejs
- npm install
- npm install -g gulp bower

<h4>Test</h4>

gulp test

<h4>Gulp Commands</h4>

Each process is dependent upon the previous. If one fails the build process exits.

- gulp test (Unit specifications)
- gulp build (Test, folder clean-ups, minification, source maps, renaming)
- gulp deploy (Test, build, versioning)

<h1>Release Notes</h1>

<h3>v1.0.4</h3>

- Optimized the add method. Don't use slice.

<h3>v1.0.2</h3>

- Going over the limit now contains the correct amount of breadcrumbs. Previously came up one short after adding a new breadcrumb at the limit.

<h3>v1.0.0</h3>

- Fully tested and stable.
