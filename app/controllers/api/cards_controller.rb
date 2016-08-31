class Api::CardsController < ApplicationController
  def index
    @cards = Card.all
    render :index
  end

  def show
  end

  def create
    @card = Card.new(title: card_params[:title],
                     body: card_params[:body],
                    author_id: 1, deck_id: 1)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, :status => 422
    end
  end

  def update
  end

  def destroy
  end

  private
  def card_params
    params.require(:card).permit(:title, :body)
  end
end
