# Miniconda + GitHub サーバー環境構築ガイド

サーバー上でMinicondaを使った仮想環境を作り、GitHubで再現可能な形に管理するための静的サイトです。

## 公開URL

https://shinnosuke-yoshida.github.io/miniconda-github/

## ファイル構成

```text
miniconda-github/
├─ index.html
├─ styles.css
├─ README.md
└─ .gitignore
```

## 内容

- SSHでサーバーへ接続する流れ
- Minicondaのインストール
- Conda仮想環境の作成とパッケージ追加
- `environment.yml` による環境の記録
- GitHubでの管理と別サーバーでの復元
- 公開前チェックリスト
- よくあるトラブル対応

## 更新方法

このディレクトリ配下の `index.html` と `styles.css` を編集すると、GitHub Pages上のページに反映されます。
