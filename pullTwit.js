var Twitter = require('twitter');
var fs = require('fs');


//twitter connection
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});




var count = 1;

client.stream('statuses/filter', {track: 'sosyal medya',"tweet_mode":"extended"},  function(stream) {
  stream.on('data', function(tweet) {




          fs.writeFile("tweets/"+tweet.id+'.json', JSON.stringify(tweet), (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;


            console.log(count);
            count += 1;
          });





  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
