# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

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
- belongs_to :post