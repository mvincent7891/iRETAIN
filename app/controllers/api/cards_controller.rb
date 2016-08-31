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
    @card = Card.find(card_params[:id])
    if @card.update(title: card_params[:title],
            body: card_params[:body])
      render :show
     else
      render json: @card.errors.full_messages, :status => 422
     end
  end

  def destroy
    @card = Card.find(card_params[:id])
    if @card.destroy
      @cards = Card.where(deck_id: card_params[:deck_id])
      render :index
    else
      render json: @card.errors.full_messages, :status => 422
    end
  end

  private
  def card_params
    params.require(:card).permit(:title, :body, :id, :deck_id)
  end
end
