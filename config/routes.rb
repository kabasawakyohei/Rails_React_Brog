Rails.application.routes.draw do
  # ヘルスチェック
  get '/health_check', to: 'health_checks#index'

  # 記事一覧  
  get '/blogs', to: 'blogs#index'

  # 記事詳細
  get '/blog', to: 'blogs#show'

  # 記事作成
  post '/blogs/', to: 'blogs#create'
  
  # 記事削除

end
