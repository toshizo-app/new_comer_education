# Wiki コンテンツ

このディレクトリは、GitHub Wiki に投入するMarkdownファイルの **ソース置き場 / バックアップ** です。

GitHub Wiki は本リポジトリとは別の git リポジトリ（`*.wiki.git`）で管理されるため、こちらは本体と同じリポジトリに保管しておき、Wiki本体への反映は手動で同期します。

## 初回セットアップ

GitHub Wiki は最初の1ページをブラウザから作成する必要があります（API/CLIでは初期化不可）。

### 手順

1. ブラウザで https://github.com/toshizo-app/new_comer_education/wiki にアクセス
2. 「Create the first page」をクリック
3. タイトルに `Home`、本文に何でもいいので1文字入れて「Save Page」
4. これで `new_comer_education.wiki` リポジトリが作られる

その後、ターミナルで以下を実行して全ページを反映：

```bash
cd /tmp
git clone https://github.com/toshizo-app/new_comer_education.wiki.git
cp /Volumes/DockSSD/ClaudeProject/new_comer_education/wiki/*.md new_comer_education.wiki/
cd new_comer_education.wiki
git add -A
git commit -m "Add initial wiki content (Home, Glossary, FAQ, Yarakashi, Templates, Resources, sidebar/footer)"
git push origin master   # ※ Wikiのデフォルトブランチは "master" のことが多い
```

## ページ追加・編集

- ブラウザから直接編集（手軽）
- またはローカルで wiki リポジトリを編集して push
- 編集後、 **このディレクトリにもコピーしてバックアップ**しておくと安心

## ファイル一覧

| ファイル | 役割 |
|---|---|
| `Home.md` | Wikiトップページ |
| `Glossary.md` | 用語集 |
| `FAQ.md` | よくある質問 |
| `Yarakashi.md` | やらかし事例集 |
| `Templates.md` | テンプレ拡張集 |
| `Resources.md` | 役立つリンク集 |
| `_Sidebar.md` | 全ページ右側のサイドバー |
| `_Footer.md` | 全ページ下部のフッター |
