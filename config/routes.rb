Rails.application.routes.draw do
# localhost:3000 => localhost:3000/todomemosへリダイレクトさせる
  root to: redirect('/todomemos')

# 全てsiteコントローラーのindexアクションを通過させる
  get 'todomemos', to: 'site#index'
  get 'todomemos/new', to: 'site#index'
  get 'todomemos/:id/edit', to: 'site#index'

# reactでHTTP通信を行うためのルーティング
# destroy_allというresourcesに存在しないアクションを追加しているので追記
  namespace :api do
    namespace :v1 do
      delete '/todomemos/destroy_all', to: 'todomemos#destroy_all'
      resources :todomemos, only: %i[index show create update destroy]
    end
  end
end
