Chrome拡張「LinkTree」のGithubリポジトリです。

## 導入方法
リポジトリをクローンし、下記コマンドを実行しビルドを行ってください。
1. 各種リソースのインストール
   `npm i`
2. コードのビルド
   `npm run build`

ビルド完了後、Google Chromeの拡張機能画面から「パッケージ化されていない拡張機能を取り込む」を行い拡張機能を取り込んでください。  
「パッケージ化されていない拡張機能を取り込む」はデベロッパーモードがONになっていないと表示されないためご注意ください。  
その後の設定や使用方法は利用方法のセクションを確認ください。  

## 利用方法

### 初期設定
Chrome拡張機能の画面からLinkTreeの詳細を開き、「拡張機能のオプション」から設定画面を表示してください。  
「リンクツリーJSON」の欄から手間ですがJSONを作成して設定してください。  
ポップアップの幅は空の場合、700pxで表示されます。必要に応じて設定してください。  
JSONの形式は以下のような形です。  

```
[
  {
    "type": "folder",
    "label": "フォルダ1",
    "member": [
      {
        "type": "link",
        "label": "Google Home",
        "link": "https://www.google.com/",
        "memo": "Gooleのホーム画面だよ"
      },
      {
        "type": "link",
        "label": "Google mail",
        "link": "https://mail.google.com/mail/u/0/?ogbl/",
        "memo": "Gmailの画面だよ"
      },
      {
        "type": "folder",
        "label": "フォルダ1-1",
        "member": [
          {
            "type": "link",
            "label": "Google Home",
            "link": "https://www.google.com/",
            "memo": "Gooleのホーム画面だよ"
          },
          {
            "type": "link",
            "label": "Google mail",
            "link": "https://mail.google.com/mail/u/0/?ogbl/",
            "memo": "Gmailの画面だよ"
          }
        ]
      }
    ]
  }
]
```

#### フォルダ
| プロパティ | 型 | 内容 |
| --- | --- | --- |
| type | 文字列 | 固定値 "folder" |
| label | 文字列 | フォルダのラベル |
| member | 配列 | フォルダ、リンクを含んだ配列 |

#### リンク
| プロパティ | 型 | 内容 |
| --- | --- | --- |
| type | 文字列 | 固定値 "link" |
| label | 文字列 | リンクのラベル |
| link | 配列 | リンクのURL |
| memo | 配列 | リンクをマウスオーバーした際に表示されるメモ |

### 機能について
上記で設定したJSONに従ってブックマークの一覧を表示します。  
フォルダは開閉可能ですが初期表示時は常にすべてのフォルダを開きます。  
フォルダをAlt + クリックするとフォルダ直下のリンクをすべて開きます。  
業務などで一括で表示したいリンク群をフォルダにまとめて同時に表示するような利用方法を想定しています。  
