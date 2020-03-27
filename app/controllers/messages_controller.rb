class MessagesController < ApplicationController

  before_action :set_group

  def index
    @members = @group.users.where.not(id: current_user.id)
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    # binding.pry
    @message = @group.messages.new(message_params)
    @message.edit
    if @message.key.present?
      @message.delete
    else
      @message.save
    end
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  private
  
  def message_params
    params.require(:message).permit(:content, :image, :key, :code).merge(user_id: current_user.id)
  end
  
  def set_group
    @group = Group.find(params[:group_id])
  end
  
end

# respond_to do |format|
#   format.html { redirect_to group_messages_path, notice: "メッセージを送信しました" }
#   format.json
# end
# else
#   @messages = @group.messages.includes(:user)
#   flash.now[:alert] = 'メッセージを入力してください。'
#   render :index
# end