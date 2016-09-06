class Api::CardsController < ApplicationController
  def index
    if params[:deck_id] == "null"
      user_id = current_user.id
      @cards = Card.where(author_id: user_id)
    else
      @cards = Card.where(deck_id: params[:deck_id])
    end
    render :index
  end

  def show
  end

  def create
    author_id = current_user.id
    @card = Card.new(title: card_params[:title],
                     body: card_params[:body],
                    author_id: author_id, deck_id: params[:deck_id])
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, :status => 422
    end
  end

  def update
    @card = Card.find(card_params[:id])
    if @card.update(title: card_params[:title],
            body: card_params[:body],
            deck_id: card_params[:deck_id])
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
