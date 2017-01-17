require 'rails_helper'

RSpec.describe Tweet, type: :model do
  subject(:tweet) { described_class.new(client) }
  let(:client) { double :client }

  describe "#initialize" do
    it "should initialize with a client" do
      expect(tweet.client).not_to be_nil
    end
  end

  describe '#tweet_count' do
    it { is_expected.to respond_to(:tweet_count) }

    it "should return an integer" do
      allow(client).to receive(:filter)
      expect(tweet.tweet_count("test")).to be_a_kind_of(Integer)
    end

  end
end
