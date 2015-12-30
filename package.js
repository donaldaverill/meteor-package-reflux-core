Package.describe({
  name: 'fourquet:reflux-core',
  version: '0.3.0_3',
  summary: 'reflux-core wrapped for Meteor.',
  git: 'https://github.com/fourquet/meteor-package-reflux-core',
  documentation: 'README.md',
});

Npm.depends({
  'reflux-core': '0.3.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('cosmos:browserify@0.9.3', 'client');
  api.addFiles('client.browserify.js', 'client');
  api.addFiles('require-reflux.js', 'server');
  api.export('Reflux');
});
