class TasksController < ApplicationController
  def index
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: {:success =>  true, :task => @task}
    else
      render json: {:success => false}
    end
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  private
    def task_params
      params.require(:task).permit(:title, :description, :archived, :priority)
    end

end
