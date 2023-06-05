var Reporter = require("jasmine-terminal-reporter");
var reporter = new Reporter(options);

jasmine.addReporter(reporter);
