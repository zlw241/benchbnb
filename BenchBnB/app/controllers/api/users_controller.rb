class Api::UsersController < ApplicationController
  before_action :ensure_log_in, only: [:show]


  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: {
        error: @user.errors.messages,
        status: 401
      }
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end


end
