# parcelEmcTest

# 作者

taktod
twitter: https://twitter.com/taktod
email: poepoemix@hotmail.com

# 概要

parcel-plugin-emcというparcel用のプラグインをつくったので、そのpluginをどのように使うかというのを示すためのテストプロジェクト

# 使い方

## 下準備

まず、emsdk_portableを取得して解凍します。
emsdk-portableのdirectoryに入り

```
$ ./emsdk update
$ ./emsdk install latest
$ ./emsdk activate latest
$ cd emscripten/x.xx.xx
```
と順番にコマンドを実施していきます。
activateまで終わったら
emsdk-portable/emscripten/x.xx.xx/にパスをとおします。

すると
```
$ emcc --version
```
と入力したらバージョンが表示されるようになると思います。

## このプロジェクトの使い方

まずemcLibに移動します。
そして、必要なパッケージをインストールします

```
$ cd emcLib
$ npm install
```

続いてparcelTestに移動します

```
$ cd ../parcelTest
$ npm install
$ npm test
```

これで http://localhost:1234/ にブラウザでアクセスすることで
プログラムを実行することができます。
最終的にemcLibでつくったc言語のプログラムの関数が実行され、応答の99という数値がconsole logに表示されます。