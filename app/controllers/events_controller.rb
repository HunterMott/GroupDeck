class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]

  # GET /events
  def index
    @events = Event.all
    
    render json: @events
  end

  # GET /events/1
  def show
    render json: @event, include: :user
  end

  # POST /events
  def create
    puts @current_user
    puts event_params
    @event = Event.new(event_params)
    @event.interest = Interest.find(event_params[:interest_id])
    @event.user = @current_user
    puts @event
    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:title, :description, :date, :img_url, :interest_id, :user_id)
    end
end
