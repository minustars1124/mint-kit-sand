# mint-kit-sand

新宿発渋谷系アイドルポップロックシューゲイザーバンド Mint kit sand の公式サイト( https://mintkitsand.com )を管理するレポジトリです。

## 環境
* Nuxt3 (Vue3 + Nuxt.js)
* node.js
* VSCode

## 何故 Nuxt にしたのか
* 使ってみたかったから
  * Vue3 を普段利用しているが、import の指定が不要だったり、router の指定が不要だったり楽が出来る
  * 開発環境での起動は Vue3 + Vite の方が早かったが、これくらいなら待てる
  * SSG（= Static Site Generation/静的生成機能）があり、SPA では弱かった SEO 対策ができる

## 情報を更新するには
assets/json 以下にあるファイルの上に json 形式でデータを追加する

* discs.json
  * id と同じファイル名かつ webp 形式の画像を assets/images/disc 以下に配置する
* events.json
  * type が live か distribution かで指定するプロパティが異なる
  * link は任意だがあると詳細ボタンが表示される
* news.json
  * ある程度の情報が溜まったら古いものを削除する

## 今後やりたいこと
* イベント情報の充実
  * 過去に参加したイベントとかフライヤーとか乗せたい
  * 場所の公式サイトやアクセス情報
* 特設サイトを作る
  * ロリポップではサブドメインを作れるらしいので、リリースとかイベントとかのサイトを組めばサブドメインで見れるようにできます

## 参考
* 基本的な実装
  * https://reffect.co.jp/vue/nuxt3
* 画像のパスを動的に指定できない事象の対応
  * https://qiita.com/AngelCase/items/f5bcc7d9f6e131e979a3
* metaタグ
  * https://digitalidentity.co.jp/blog/seo/ogp-share-setting.html
  * https://nuxt.com/docs/getting-started/seo-meta
* デフォルトブランチ更新をキックに GitHub Actions から静的ファイル生成とロリポップ FTP へアップロード
  * https://qiita.com/harachan/items/08a92feb2dea921f99b2
  * https://github.com/SamKirkland/FTP-Deploy-Action
    * 上の記事は古かったことから参照しているライブラリのバージョンを最新に設定
* 動的ルーティングの静的ファイル生成
  * https://zenn.dev/kon_karin/articles/0e514dea329044


## 準備

必要なパッケージをインストールします。

```bash
# npm
npm install
```

## 開発環境での起動

`http://localhost:3000` でサーバを起動します。

```bash
# npm
npm run dev
```

## 本番リリース
デフォルトブランチに更新がマージされると、 `.github/workflow/node.js.yml` の設定より以下の処理を実行します。

* パッケージのインストール
* 静的ファイルの生成
* FTP を利用してロリポップのレンタルサーバにデプロイ

## 本番リリースで生成されるファイルの確認

本番リリース用に静的ファイルを生成しビルドします。

```bash
# npm
npm run generate
```

本番リリース用のファイルを開発環境で確認します。

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
