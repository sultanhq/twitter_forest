var dotenv = require('dotenv');
dotenv.load();
var http = require('http');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
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
var stream = null;

wsServer.on('request', function(r) {
  var connection = r.accept('echo-protocol', r.origin);
  var id = count++;

  tweetCounter = 0;

  clients[id] = connection;

  console.log((new Date()) + ' Connection accepted [' + id + ']');


  function setStream(filter) {
    function tweet() {}

    function error() {}

    function track() {}


    console.log(filter);
    if (stream !== null) {
      stream.destroy();
      stream.removeListener('data', tweet);
      stream.removeListener('error', error);
      stream.removeListener('statuses/filter', track);
    } else {
      stream = null;
    }

    tweetCounter = 0;
    stream = client.stream('statuses/filter', {
      track: filter
    });

    stream.on('data', function(tweet) {
      tweetCounter = tweetCounter + 1;
      console.log(tweetCounter);
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      console.log(error);
      stream.destroy();
    });
  }



  connection.on('message', function(message) {

    if (message.utf8Data.includes("#")) {
      setStream(message.utf8Data);
    } else if (message.utf8Data.includes("!reset")) {
      tweetCounter = 0;
    } else if (message.utf8Data.includes("request")) {
      for (var i in clients) {
        clients[i].sendUTF(tweetCounter);
      }
    }
  });

  connection.on('close', function(reasonCode, description) {
    stream.destroy();
    stream = null;
    delete clients[id];
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
