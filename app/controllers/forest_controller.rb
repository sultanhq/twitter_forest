class ForestController < ApplicationController

  def index
    @tweet = Tweet.new
    @tweet.index
    session[:tweet] = @tweet
  end

  def create_random_integer
    @tweet = session[:tweet]
    @tweet.create_random_integer
    redirect_to '/'
  end


end
