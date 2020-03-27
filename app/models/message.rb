class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  require "romaji"
  require "romaji/core_ext/string"

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader

  def edit
    chars = [*"a".."z", *"A".."Z", *"0".."9"]
    if code.present?
      romaji =  content.romaji
      self.content = romaji.tr(chars.join, chars.rotate(code).join)
    elsif key.present?
      @content = content.tr(chars.join, chars.rotate(-key).join)
      self.content = @content.kana
    end
  end
end
