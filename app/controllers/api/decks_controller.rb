class Api::DecksController < ApplicationController
  def index
    if params[:query]
      if params[:query] == "ALL" || params[:query] === ""
        @decks = Deck.all
        render :index
      else
        queyr = params[:query].downcase
        @tags = Tag.where("name LIKE ?", "%#{params[:query]}%")
        deck_ids = []
        @tags.each do |tag|
          deck_ids << tag.deck_ids
        end
        deck_ids = deck_ids.uniq
        @decks = Deck.where(id: deck_ids)
        render :index
      end
    else
      author_id = current_user.id
      @decks = Deck.where(author_id: author_id)
      render :index
    end
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
      render json: [@deck, @deck.errors.full_messages], :status => 422
    end
  end

  def update
    @deck = Deck.find(deck_params[:id])
    author_id = current_user.id
    if @deck.update(title: deck_params[:title],
            subject_id: deck_params[:subject_id],
            author_id: author_id)
      @decks = Deck.where(author_id: author_id)
      render :index
     else
      render json: [@deck, @deck.errors.full_messages], :status => 422
    end
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
    params.require(:deck).permit(:tags, :title, :id, :subject_id, :author_id, :type)
  end
end
