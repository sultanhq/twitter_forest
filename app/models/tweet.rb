require 'twitter'

class Tweet < ApplicationRecord

  attr_reader :client

  def index
    @client = Twitter::Streaming::Client.new do |config|
      config.consumer_key = ENV['CONSUMER_KEY']
      config.consumer_secret = ENV['CONSUMER_SECRET']
      config.access_token = ENV['TWITTER_ACCESS_TOKEN']
      config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
    end
  end

  def tweet_count(hashtag)
    tweets = []
    @client.filter(track: hashtag) do |tweet|
      tweets << tweet.text
      puts "#{tweets.count}"
    end

  end

end
