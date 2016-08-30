class Api::CardsController < ApplicationController
  def index
    @cards = Card.all
    render :index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
