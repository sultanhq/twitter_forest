require 'rails_helper'

RSpec.describe Tweet, type: :model do
  subject(:tweet) { described_class.new }
  let(:client) { double :client }

  describe "#index" do
    it "should create a client" do
      tweet.index
      expect(tweet.client).not_to be_nil
    end
  end

  describe '#tweet_count' do
    it { is_expected.to respond_to(:tweet_count) }

    xit "should return an integer" do
      tweet.index
      allow(tweet.client).to receive(:filter)
      expect(tweet.tweet_count("test")).to be_a_kind_of(Integer)
    end
  end
end
