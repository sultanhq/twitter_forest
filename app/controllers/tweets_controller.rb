class TweetsController < ApplicationController

  def index
    @tweet = Tweet.new
    @tweet.index
    @tweet.create_random_integer
  end

end
