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

  def extension
    if logged_in? && current_user
      @entry = params[:word]
      @user_id = current_user.id
      @deck = Deck.where(author_id: @user_id).first
      @card = Card.new(author_id: @user_id, deck_id: @deck.id, title: @entry)

      response = Net::HTTP.get_response(URI("https://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase=#{@entry}&pretty=true"))
      response_hash = JSON.parse(response.body)
      meanings = response_hash['tuc'][0]['meanings'].map { |def_hash| def_hash['text']}

      # max definition saved set to 3
      @card.body = meanings[1]
      @card.save

      render :show
    else
      flash[:errors] = "You must be logged in to retain new words!"
      redirect_to new_session_url(error: "MUST LOGIN") 
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
