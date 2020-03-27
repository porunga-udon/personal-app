class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  require "romaji"
  require "romaji/core_ext/string"

  validates :content, presence: true, unless: :image?

  mount_uploader :image, ImageUploader

  def encryption
    if key.present?
      chars = [*"a".."z", *"A".."Z", *"0".."9"]
      romaji =  content.romaji
      self.content = romaji.tr(chars.join, chars.rotate(-3).join)
    end
  end

  def decryption
    chars = [*"a".."z", *"A".."Z", *"0".."9"]
    @content = content.tr(chars.join, chars.rotate(-key).join)
    self.content = @content.kana
  end

end
