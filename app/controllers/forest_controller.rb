class ForestController < ApplicationController

  def index
    @tweet = Tweet.new
    @tweet.index
    @tweet.create_random_integer
  end

  def create_random_integer
    @tweet.create_random_integer
    redirect_to '/'
  end

end
