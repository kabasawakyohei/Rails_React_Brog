class HealthChecksController < ApplicationController
  def index
    # :okは200を返す
    head :ok
  end
end
