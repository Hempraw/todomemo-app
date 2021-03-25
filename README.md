# README
## アプリケーション名
 Todomemo-app
## アプリケーション概要
 シンプルかつ簡単にメモやTodoを登録し、確認・更新ができるアプリケーション
## URL
 デプロイ後追加予定
## テスト用アカウント
 ログイン機能は現時点で未実装
## 利用方法
 デプロイ後追記予定
## 目指した課題解決
 簡単にメモを画像も含めてとっておきたい方
 自身のReactについて理解を深める
## 洗い出した要件
- 基本機能
- 検索機能
- 期限設定機能
- 画像添付機能
- 出力機能
## 実装した機能についてのGIFと説明
    - メモ投稿機能
    - メモ削除機能
    - メモ一覧表示機能
    - 非同期通信
- 状態管理機能
## 実装予定の機能
- ユーザー管理機能
- メモの内容を保存できる機能
- 期日設定機能
- タグ機能
- 画像投稿・表示機能
- 出力機能
## データベース設計
#### ER図
https://gyazo.com/2a76aa864b4f51ae1dc7679ed20bd4d8
### 【タスク情報テーブル】Todomemos
| Column       | Type    | Options                 |
| ------------ | ------- | ----------------------- |
| name         | string  | null: false             |
| content      | string  | null: false             |
| is_completed | boolean | null: false             |
| user         | references | null: false, FK: true|
#### アソシエーション
- belongs_to :user
- belongs_to :tag_todomemos
### 【ユーザ情報テーブル】Users
| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |
| email    | string | null: false |
| password | string | null: false |
#### アソシエーション
- has_many :todomemos
### 【タグ情報テーブル】Tags
| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string |             |
#### アソシエーション
has_many :tag_todomemos
### 【タグとメモ（タスク）の関連性テーブル】tag_todomemo
| Column   | Type    | Options     |
| -------- | ------- | ----------- |
| tag      | integer | null: false |
| todomemo | integer | null: false |
#### アソシエーション
belongs_to :tag
belongs_to :todomemo
## ローカルでの動作方法
- 準備中