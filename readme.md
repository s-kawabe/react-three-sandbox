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
→ 現状のpackage.json通りにやる必要がある
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
sceneインスタンスの作成

e.g.
```ts
const scene = new THREE.Scene()
```

### camera
cameraインスタンスの作成

e.g.
```ts
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
```

### light
「光」
- ambientLight
- directionalLight
「shader」部分にて説明している

### renderer

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
> materials
> Generally materials will be defined, allowing different portions of the mesh to use different shaders when rendered.
通常、マテリアルが定義され、メッシュのさまざまな部分がレンダリング時にさまざまなシェーダーを使用できるようになります。

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

### shader
https://en.wikipedia.org/wiki/Shader
https://en.wikipedia.org/wiki/Shading

シェーダー、シェーディングとは暗さレベルを変化させて3Dモデルまたはイラストに対し、奥行きの感覚を表現する手法の総称(?)
シェーディングはオブジェクトの表面での光の局所的な動作を近似しようとする。
シェーディングは、シェーダーと呼ばれるプログラムによってレンダリングプロセス中に実行されます。
照明の種類には次のようなものがある
- アンビエント照明
- ポイントライティング
- スポットライト
- エリア照明

### Canvas

### WebGL