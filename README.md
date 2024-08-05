# Discord クローン

このプロジェクトは、React、Redux、Firebase を使用して構築された Discord アプリケーションの簡易クローンです。Google 認証によるユーザー認証やリアルタイムチャット、Material-UI を使ったモダンな UI 要素などの基本的な機能を提供しています。

## 目次

-   [機能](#機能)
-   [インストール](#インストール)
-   [使い方](#使い方)
-   [スクリプト](#スクリプト)
-   [依存関係](#依存関係)
-   [貢献](#貢献)
-   [ライセンス](#ライセンス)

## 機能

-   **ユーザー認証**: Google Firebase 認証を使用してログインできます。
-   **リアルタイムメッセージング**: Firestore を使用してリアルタイムでメッセージの送受信が可能です。
-   **Material-UI デザイン**: Material-UI を使用したモダンな UI コンポーネント。
-   **Redux Toolkit**: Redux Toolkit を使用した効率的な状態管理。
-   **Sass サポート**: Sass を使用したスタイルの作成。

## インストール

このプロジェクトをローカルで実行するには、以下の手順に従ってください:

1. **リポジトリをクローン:**

    ```bash
    git clone https://github.com/your-username/discord-clone.git
    cd discord-clone
    ```

2. **依存関係をインストール:**

    ```bash
    npm install
    ```

3. **Firebase の設定:**

    - [Firebase コンソール](https://console.firebase.google.com/)で Firebase プロジェクトを作成します。
    - プロジェクトのルートに `.env` ファイルを作成し、Firebase の設定を追加します:
        ```plaintext
        REACT_APP_FIREBASE_API_KEY=your-api-key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
        REACT_APP_FIREBASE_PROJECT_ID=your-project-id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
        REACT_APP_FIREBASE_APP_ID=your-app-id
        ```

4. **開発サーバーを起動:**

    ```bash
    npm run dev
    ```

5. **アプリにアクセス:**
    - ブラウザで `http://localhost:3000` にアクセスしてください。

## 使い方

-   **認証**: Google サインインボタンを使用してログインできます。
-   **チャット機能**: チャンネルを作成してリアルタイムでメッセージを送信できます。
-   **UI コンポーネント**: Material-UI を使った様々な UI コンポーネントを探索できます。

## スクリプト

-   **`npm run dev`**: 開発サーバーを起動します。
-   **`npm run build`**: アプリを本番用にビルドします。
-   **`npm run test`**: テストスイートを実行します。
-   **`npm run eject`**: Create React App の設定をエクスポートします（注意して使用してください）。

## 依存関係

このプロジェクトで使用されている主な依存関係は以下の通りです:

-   **React**: UI を構築するためのフロントエンドフレームワーク。
-   **Redux Toolkit**: 効率的な状態管理を行うための
