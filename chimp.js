module.exports = {
    //----CHIMP----
    watch: false,
    watchTags: '@watch',

    //----CUCUMBER----
    path: './features',
    format: 'pretty',
    tags: '~@wip',
    recommendedFilenameSeperator: '_',
    screenshotsOnError: true,
    screenshotsPath: 'screenshots',
    captureAllStepScreenshots: false,
    saveScreenshotsToDisk: true,
    saveScreenshotsToReport: false,
    jsonOutput: 'test.json',

    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    platform: 'ANY',
    name: '',
    user: '',
    key: '',
    port: null,
    host: null,
    // deviceName: null,

// - - - - WEBDRIVER-IO  - - - -
    webdriverio: {
        desiredCapabilities: {},
        logLevel: 'silent',
        // logOutput: null,
        host: '127.0.0.1',
        port: 4444,
        path: '/wd/hub',
        baseUrl: null,
        coloredLogs: true,
        screenshotPath: null,
        waitforTimeout: 500,
        waitforInterval: 250,
    },

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false,
    seleniumDebug: null,
    debugCucumber: null,
    debugBrkCucumber: null,
    debugMocha: null,
    debugBrkMocha: null,
};