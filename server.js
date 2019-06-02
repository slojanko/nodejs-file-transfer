// prevent usage of undeclared variables
"use strict";

// process name
process.title = 'server';

// Requires
var webSocketServer = require('websocket').server;
var fs = require('fs');
var http = require('http');

// port we are listening on
const webSocketServerPort = process.env.PORT || 3000;

// HTTP
var server = http.createServer(function(request, response) { });
server.listen(webSocketServerPort, function() {
    console.log(new Date() + ' Server is listening on port ' + webSocketServerPort);
});

// Websocket
var wsServer = new webSocketServer({
    httpServer: server
});

// Serve client
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    console.log(new Date() + " Connection opened");

    connection.on('message', function(data) {
        var receive = JSON.parse(data.utf8Data);

        if (receive.command == "s") {
            fs.writeFile('sr/' + receive.filename, receive.data, 'utf8', function() {});
        } else if (receive.command == "r") {
            fs.readFile('sr/' + receive.filename, 'utf8', function(error, data) {
                if (error) {
                    return;
                }

                var send = {
                    filename: receive.filename,
                    data: data
                }

                // send file
                connection.send(JSON.stringify(send));
            });
        }
    });

    connection.on('close', function(connection) {
        console.log("Connection closed")
    });
});
