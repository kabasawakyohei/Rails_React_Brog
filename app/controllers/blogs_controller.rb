class BlogsController < ApplicationController

  def index 
    @blogs = Blog.all
    render json: @blogs
  end

  def show
    @blog = Blog.find(param[:id])
    render json: @blog
  end

  def create
    Rails.logger.debug "----------- 作成API叩いたよ -------------"
    Blog.create(blog_params)
    # :createdは201を返す
    head :created
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :contents)
  end

end
