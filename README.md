breadcrumbmanager
=================

Built as a way to track the previous history of anything in JavaScript.

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

    var bcm = new BreadcrumbManager();

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

<h3>v1.0.0</h3>

- Fully tested and stable.
