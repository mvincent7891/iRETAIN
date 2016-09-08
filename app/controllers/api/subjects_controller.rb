class Api::SubjectsController < ApplicationController
  def index
    if params[:allSubjects]
      renderAll
    else
      @user_id = current_user.id
      @decks = Deck.where(author_id: @user_id)
      @deck_ids = @decks.ids
      @subject_hash = Deck.subjects(@deck_ids)
      @subject_ids = @subject_hash.keys
      @subjects = Subject.find(@subject_ids)
    end
  end

  def renderAll
    @decks = Deck.all
    @deck_ids = @decks.ids
    @subject_hash = Deck.subjects(@deck_ids)
    @subject_ids = @subject_hash.keys
    @subjects = Subject.all
    render :index
  end

end
