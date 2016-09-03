class Api::ClonesController < ApplicationController
  def show
    deck_id = params[:id]
    user_id = current_user.id
    Deck.clone_deck(deck_id, user_id)
    @decks = Deck.where(author_id: user_id)
    render :show
  end
end
