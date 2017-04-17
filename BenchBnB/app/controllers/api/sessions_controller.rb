class Api::SessionsController < ApplicationController
  # before_action :ensure_log_in, except: [:destroy]

  def create
    username = session_params[:username]
    password = session_params[:password]
    @user = User.find_by_credentials(username, password)
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: {
        error: "invalid credentials",
        status: 422
      }

    end
  end

  def destroy
    @user = current_user
    logout
    render "api/users/show"
  end

  private
  def session_params
    params.require(:session).permit(:username, :password)
  end
end
