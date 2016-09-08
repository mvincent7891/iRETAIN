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

  def create
    @user_id = current_user.id
    @subject = Subject.find_by(title: params[:title])
    if @subject
      @deck = Deck.create(title: "New #{params[:title]} Deck",
                          author_id: @user_id,
                          subject_id: @subject.id)
    else
      @subject = Subject.create(title: params[:title])
      @deck = Deck.create(title: "New #{params[:title]} Deck",
                         author_id: @user_id,
                         subject_id: @subject.id)
    end
    render :new
  end

end
