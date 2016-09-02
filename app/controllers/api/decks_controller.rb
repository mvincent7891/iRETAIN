class Api::DecksController < ApplicationController
  def index
    author_id = current_user.id
    @decks = Deck.where(author_id: author_id)
    render :index
  end

  def show
    @deck = Deck.find(params[:id])
    render :show
  end

  def create
    author_id = current_user.id
    @deck = Deck.new(title: deck_params[:title],
                     subject_id: deck_params[:subject_id],
                     author_id: author_id)
    if @deck.save
      @decks = Deck.where(author_id: author_id)
      render :index
    else
      render json: @deck.errors.full_messages, :status => 422
    end
  end

  def update
  end

  def destroy
    @deck = Deck.find(params[:id])
    author_id = current_user.id
    if @deck.destroy
      @decks = Deck.where(author_id: author_id)
      render :index
    else
      render json: @deck.errors.full_messages, :status => 422
    end
  end

  private
  def deck_params
    params.require(:deck).permit(:title, :id, :subject_id, :author_id)
  end
end
