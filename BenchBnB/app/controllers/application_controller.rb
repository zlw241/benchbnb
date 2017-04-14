class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :ensure_log_in

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_log_in
    unless logged_in?
      render json: 'You are not logged in'
    end
  end


end
