// prevent usage of undeclared variables
"use strict";

// process name
process.title = 'client';

// Requires
var webSocket = require('ws');
const readline = require('readline');
const fs = require('fs');

// Read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});    

var lock = false;

// server address
const serveraddress = "ws://localhost:3000";

// Open connection with server
var connection = new webSocket(serveraddress);

connection.onopen = () => {
    console.log("Connected to server");
    setInterval(function() {input()}, 250);

    function input() { 
        if (lock == false) {
            lock = true;

            rl.question('', (answer) => {
                var args = answer.split(" ");

                if (args[0] == "s") {
                    fs.readFile('cs/' + args[1], 'utf8', function(error, data) {
                        var send = {
                            command: args[0],
                            filename: args[1],
                            data: data
                        }
        
                        // send file
                        connection.send(JSON.stringify(send));
                    });
                } else if (args[0] == "r") {
                    var send = {
                        command: args[0],
                        filename: args[1]
                    }

                    // send file
                    connection.send(JSON.stringify(send));
                }
                lock = false;
            });
        }
    }
    
    connection.onmessage = data => {
        var receive = JSON.parse(data.data);
        
        fs.writeFile('cr/' + receive.filename, receive.data, 'utf8', function() {});
    }

    connection.onerror = err => {
        process.exit();
    }

    connection.onclose = function() {
        process.exit();
    }
}