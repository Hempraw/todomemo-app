class ApplicationController < ActionController::Base
# API通信でよく使われるおまじない
  protect_from_forgery with: :null_session
end
