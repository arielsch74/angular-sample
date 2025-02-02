const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:4200',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  
  mocha: {
     reporter: 'mochawesome',
     reporterOptions: {
       reportDir: './output',
       reportFilename: 'mochawesome-report',
     },
   },
  
  name: 'angular-sample'
}
