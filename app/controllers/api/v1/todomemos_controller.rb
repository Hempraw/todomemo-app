class Api::V1::TodomemosController < ApplicationController
  def index
    todomemos = Todomemo.order(updated_at: :desc)
    render json: todomemos
  end

  def show
    todomemo = Todomemo.find(params[:id])
    render json: todomemo
  end

  def create
    todomemo = Todomemo.new(todomemo_params)
    if todomemo.save
      render json: todomemo
    else
      render json: todomemo.errors, status: 422     
    end
  end

  def update
    todomemo = Todomemo.find(params[:id])
    if todomemo.update(todomemo_params)
      render json: todomemo
    else
      render json: todomemo.errors, status: 422     
    end
  end

  def destroy
    if Todomemo.destroy(params[:id])
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  def destroy_all
    if Todomemo.destroy_all
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  private
  def todomemo_params
    params.require(:todomemo).permit(:name, :is_completed)
  end
end