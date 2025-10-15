class ExperimentalMessagesController < ApplicationController
  def show
    @room = Room.find(params[:room_id])
  end
end