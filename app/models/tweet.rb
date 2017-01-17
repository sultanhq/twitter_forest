require 'twitter'
require 'future'

class Tweet < ApplicationRecord

  attr_reader :client, :tweets, :counter

  def index
    @tweets = []
    @counter = 0
    @client = Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV['CONSUMER_KEY']
      config.consumer_secret = ENV['CONSUMER_SECRET']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
    end
  end

  def tweet_count(hashtag)
  @client.filter(track: hashtag) do |tweet|
    @tweets << tweet.text
      if @tweets.count >= 50
        increment_counter
        @tweets = []
      end
    end
  end

  def increment_counter
    @counter += 1
  end

  def create_random_integer
    @counter = rand(100)
  end

end
