# welcome to Three.js prayground
`@react-three/fiber`では、Three.jsをそのままjsで書くと手続き的で複雑になる処理をコンポーネント/hooksベースで直感的に描けるようになるものである

## introduction

```
yarn
```

```
yanr dev
```

(そのままインストールするとバージョンの違いでエラーでる？)
→ このリポジトリのpackage.json通りにやる必要がある
```
yarn add three @react-three/fiber @react-three/drei gsap
```

> Three.jsをReactライクに記述するための 「react-three-fiber」 
> 便利な関数群をまとめた 「react-three-drei」

```
yarn add -D @types/three
```

## knowladge

### scene
「土台、舞台」
必ず必要な要素で、モノをおくためのところ(?)

### camera
「カメラ」
3Dオブジェクトをどう捉えるか。

- Camera
- ArrayCamera
(複数のカメラを使って特定のキャンバス領域をレンダリング - マリオカートなど)
- Perspective(視点)Camera
(よく使う、現実の遠近法に近い表現)
- OrthographicCamera
(遠いものと近いものが同じ大きさ？)

などがある

### renderer
「変換器」
カメラで撮影した対象を投影するために必要なモジュール

### geometry
「形状」
これを指定することで、球体や直方体、平面など様々な3Dオブジェクトを表示できる。
Three.jsで扱えるジオメトリには以下のようなものがある
- 平面
- 球体
- 直方体
- 三角錐
- 円柱
- 円錐
- ドーナツ形状

### material
「素材」

色や画像などのテクスチャとかのこと。
Geometry(骨組み)に対してmaterial(素材)を適用して、mesh化することで３Dオブジェクトを生成する。
生成したmesh達を組み合わせたり、適切にlightを当てたりして、カメラの位置を調整することによって
3D空間にいい感じに表示して見せる感じ。

`meshXXXXMaterial` というオブジェクトが複数用意されているが、これは光沢感だったり質感などの差が関係している。

### mesh
> 三角形ポリゴンメッシュベースのオブジェクトを表すクラス。SkinnedMeshなどの他のクラスのベースとしても機能します。

https://en.wikipedia.org/wiki/Polygon_mesh
3Dコンピューターグラフィックスにおけるポリゴンメッシュ、頂点、エッジなどの話。
ポリゴンメッシュは様々な形状の面で構成される(?)

- vertex
- edges
- faces
- polygons
- material
などの用語が関係している(or, これらでmeshが構成されている)

https://en.wikipedia.org/wiki/Polygon_mesh#/media/File:Dolphin_triangle_mesh.png
(イルカをポリゴンメッシュで表した図)

#### geometry, material, meshの関係

geometryとmaterialを作成したら、それを元にmeshを作成してmeshを3D空間に描画する。

e.g.
```ts
// ①ジオメトリを作成
const geometry = new THREE.SphereGeometry(300, 30, 30);
// マテリアルを作成
const material = new THREE.MeshPhongMaterial({color: 0xFF0000});
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
```

e.g.(2) - 3Dの球体を描画する例
```ts
// args: radius / widthSegments / heightSegments
// widthSegments / 横のポリゴンの数? 
// widthSegments / 縦のポリゴンの数?
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
```

### light
「光」
次のように種類が色々ある

- アンビエント照明(AmbientLight)
  (アンビエントライト、また、拡散環境光として知られているライトは 、シーン周囲すべてに存在するライトであり、特定のソースオブジェクトから放出されていません。シーンの全体的な見た目と明るさに重要な影響を与えます。)
- ポイントライティング(PointLight)
  - (単一点からあらゆる方向に放射される光源)
- 平行光源(DirectionalLight)
  - (特定の方向に放射される光。光源は無限に離れているものとして、そこから発生する光線はすべて平行になります。)
- 半球光源(HemisphereLight)
  - (AmbientLightクラスに似ていますが、上からの光の色と下からの光の色を分けられます。)
- スポットライト光源(SpotLight)
  - (単一の点から一方向に放出され、円錐に沿って放出される光源。)
- エリア照明

## Technique

### 環境マッピング
対象オブジェクトに対して背景を反映させるための手法。(SphereGeometryに地球の背景を適用して地球儀ができたりする)

### StereoCamera
2つのカメラを用いて「視差効果」をもたらす。
よりリアルで奥行きのある表現が可能になる。　

### OrbitControls
常に対象を捉えるカメラ。
マウスムーブによってカメラを移動できたりする？

### castShadow / receiveShadow
meshオブジェクトに指定する
影を適用したいオブジェクトにはcastShadow, castShadowを適用したオブジェクトに
光が当たった時実際に影が反映される地面や壁のようなオブジェクトにはreceiveShadowを適用。
さらにCanvasコンポーネントで`shadows={true}`にする
### Animation

## Supplement

### (shader)
https://en.wikipedia.org/wiki/Shader
https://en.wikipedia.org/wiki/Shading

シェーダー、シェーディングとは暗さレベルを変化させて3Dモデルまたはイラストに対し、奥行きの感覚を表現する手法の総称(?)
シェーディングはオブジェクトの表面での光の局所的な動作を近似しようとする。
シェーディングは、シェーダーと呼ばれるプログラムによってレンダリングプロセス中に実行されます。
照明の種類についてはlightの部分に記載。