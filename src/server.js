var Twitter = require('twitter');
var http = require('http');
// var filter = '#nil';

var client = new Twitter({
  consumer_key: '1',
  consumer_secret: '1',
  access_token_key: '1',
  access_token_secret: '1'
});

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

  var stream = null;

  function setStream (filter) {
    console.log(filter);

    stream = client.stream('statuses/filter', {
      track: filter
    });
  }

  connection.on('message', function(message) {
    // tweetCounter = Math.floor((Math.random() * 100) + 1);
    // console.log(message)

    if (message.utf8Data.includes("#")) {
      setStream(message.utf8Data);
    }
    else if (message.utf8Data.includes("!reset"))
    {
      tweetCounter = 0;
    }
    else if (message.utf8Data.includes("request")) {
      for (var i in clients) {
        clients[i].sendUTF(tweetCounter);
      }

      stream.on('data', function(tweet) {
        tweetCounter = tweetCounter + 1;
        console.log(tweetCounter);
        console.log(tweet.text);
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
