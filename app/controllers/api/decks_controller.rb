class Api::DecksController < ApplicationController
  def index
    @decks = Deck.all
    render :index
  end

  def show
    @deck = Deck.find(params[:id])
    render :show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def deck_params
    params.require(:deck).permit(:title, :id, :subject_id, :author_id)
  end
end
