# README
## TopPage
![トップページ](https://i.gyazo.com/33203a0fd3564ed8d41e6b7210ce9ab1.png)

## Features

### メッセージ投稿機能
メッセージや画像を投稿することができます。
自分のメッセージが右、メンバーのメッセージが左に表示されます。
![メッセージ機能](https://i.gyazo.com/168a3875215afeceae7c7071feee3220.png)

### 暗号作成機能
隠しコマンド「enc」で起動。
暗号化したい文章とキーを入力すると、シーザー暗号を利用して暗号を作成します。（平仮名、カタカナのみ対応）
![暗号作成機能](https://i.gyazo.com/63b7251ccc9347ed0ae0f75f65e99a94.png)

### 暗号解読機能
隠しコマンド「dec」で起動。
暗号化された文章と設定したキーを入力すると、解読できます。
![暗号解読機能](https://i.gyazo.com/5eab1b7761d97714d41f310da66d9866.png)

解読した文章を読むことができます。
![暗号解読結果](https://i.gyazo.com/5a51f59ed414969d7ed738cbe480e95b.png)

### 自爆機能（バーンアウト・プロトコル）
隠しコマンド「burnout」で起動。「fontBomb」を使用し、文字を吹き飛ばすことができます。
![自爆機能発動](https://i.gyazo.com/940f1056c60a4acf8e8baa87924f9c23.png)

![自爆機能使用後](https://i.gyazo.com/7b0bff5bb270d2913d9e97c0f1ecf703.png)

<!-- ## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false ,unique: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :posts
- has_many :commnets
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text||
|image|string||
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Association
- belong_to :user
- belong_to :group

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|post|text||
|image|string||
|user_id|references|foreign_key: true|

### Association
- belongs_to :user
- has_many :comments

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user_id|references|foreign_key: true|
|post_id|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :post -->