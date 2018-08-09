exports.config = {
    // directConnect: true,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:3000',
    specs: ['../specs/testAllure.js'],
    // specs: ['../specs/testMatchers.js'],
    suites: {
        smoke: '../specs/smoke/*.js',
        regression: '../specs/regression/*.js',
        locatorsmodel: ['../specs/locators/locatingElements.js'],
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
            })
        });
    },
  }