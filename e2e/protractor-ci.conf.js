const config = require('./protractor.conf').config;

let jsonServerProcess;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox']
  }
};

// Allow startup of json-server as a mock API
config.beforeLaunch = () => {
  jsonServerProcess = exec('npm run api');
};

// Stop the mock API
config.onCleanUp = () => {
  process.kill(jsonServerProcess.pid);
}

exports.config = config;
