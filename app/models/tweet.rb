class Tweet < ApplicationRecord

  attr_reader :client

  def initialize(client)
    @client = client
  end

  def tweet_count

  end

end
