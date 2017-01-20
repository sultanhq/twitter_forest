var Twitter = require('twitter');
var http = require('http');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// var stream = client.stream('statuses/filter', {
//   track: '#trump'
// });
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

  // stream.on('data', function(tweet) {
  //   counter = counter + 1;
  //   // console.log(count);
  //   // console.log(tweet.text);
  // });
  //
  // stream.on('error', function(error) {
  //   throw error;
  // });

  connection.on('message', function(message) {
    tweetCounter = Math.floor((Math.random() * 100) + 1);

    for (var i in clients) {
      clients[i].sendUTF(tweetCounter);
    }

  });

  connection.on('close', function(reasonCode, description) {
    delete clients[id];
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });

});
