Rails.application.routes.draw do
  resources :homes

  root 'pages#landing'

  get    '/auth/:provider'          => 'omniauth#auth',    as: :auth
  get    '/auth/:provider/callback' => 'session#create'
  get    '/auth/failure'            => 'session#failure'

  get    '/login'                   => 'session#new'
  post   '/login'                   => 'session#create'
  get    '/logout'                  => 'session#destroy'

  mount Shrine::DownloadEndpoint => "/attachments"
end
