var Twitter = require('twitter');
var http = require('http');
var filter = '#nil';




var tweetCounter = 0;

var server = http.createServer(function(request, response) {});

server.listen(1234, function() {
  console.log((new Date()) + ' Server is listening on port 1234');
});

var WebSocketServer = require('websocket').server;
wsServer = new WebSocketServer({
  httpServer: server
});

var count = 0;
var clients = {};

wsServer.on('request', function(r) {
  var connection = r.accept('echo-protocol', r.origin);
  var id = count++;

  tweetCounter = 0;

  clients[id] = connection;

  console.log((new Date()) + ' Connection accepted [' + id + ']');


  function setStream (filter) {
    console.log(filter);
    var stream = client.stream('statuses/filter', {
      track: filter
    });
  }

  connection.on('message', function(message) {
    // tweetCounter = Math.floor((Math.random() * 100) + 1);
    // console.log(message)


    if (message.utf8Data.includes("#")) {
      setStream(message.utf8Data);
    }
    else {
      for (var i in clients) {
        console.log(filter);
        clients[i].sendUTF(tweetCounter);
      }

      stream.on('data', function(tweet) {
        tweetCounter = tweetCounter + 1;
        // console.log(tweetCounter);
        // console.log(tweet.text);
      });

      stream.on('error', function(error) {
        throw error;
      });
    }
  });

  connection.on('close', function(reasonCode, description) {
    delete clients[id];
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
