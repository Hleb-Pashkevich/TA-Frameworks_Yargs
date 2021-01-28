const yargs = require('yargs').argv;

exports.config = {

 directConnect:true,

    framework: 'mocha',

    specs: [
        '../specs/*.spec.js'
    ],

    capabilities: {
        'browserName': yargs.firefox ? 'firefox' : 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
    },

    baseUrl: 'localhost',

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};