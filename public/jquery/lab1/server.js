// server.js
// author: Kirk Austin, Brendan Boyd

// Here's an HTTP server in the style of a C++ app.
// It demonstrates use of a "main" function and unix-style logging.
// Our configuration information is based on the NODE_ENV environment variable.
// Possible values are "localdev", "development", and "production", with "development" being the default.
// The "localdev" config is only used on a developer's laptop.
// The environment variable refers to the .js file in the config directory with the same name.
var config = require('config');
// for more configurable logging
var bunyan = require('bunyan');
// the secret sauce of "restify"
var restify = require('restify');

/* log levels in bunyan
	"fatal": The service/app is going to stop or become unusable now. An operator should definitely look into this soon.
	"error": Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this soon(ish).
	"warn": A note on something that should probably be looked at by an operator eventually.
	"info": Detail on regular operation.
	"debug": Anything else, i.e. too verbose to be included in "info" level.
	"trace": Logging from external libraries used by your app or very detailed application logging.
*/
// Unix style logging:  info -> stdout, debug -> stderr
var NAME = 'Node Server';
var LOG = bunyan.createLogger({
    name: NAME,
    streams: [{
        level: "info",
        stream: process.stdout
    }, {
        level: 'debug',
        type: 'raw',
        stream: new restify.bunyan.RequestCaptureStream({
            level: bunyan.WARN,
            maxRecords: 100,
            maxRequestIds: 1000,
            stream: process.stderr
        })
    }],
    serializers: restify.bunyan.serializers
});

(function main() {
    // spin up an http(s) REST server
    var serverOptions = {
        "name": NAME,
        log: LOG
    };
    var server = restify.createServer(serverOptions);
    // determine which port
    var serverPort = 8888; // default
    if (config.server && config.server.port) {
        serverPort = config.server.port;
    }
    // start accepting requests
    server.listen(serverPort, function onListening() {
        // log something
        LOG.info(server.name + " started on port " + serverPort + "!  " + "config: " + JSON.stringify(config));
    });

    // Apache replacement
    // Begin serving static files from the "public" directory
    server.get(/\//, restify.serveStatic({
        directory: './public',
        default: 'index.html'
    }));
})();