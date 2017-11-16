import * as THREE from 'three';
import ThreeSceneFactory from './three/three_scene_factory';
import * as fragmentS from './test.frag';
import * as vertextS from './test.vert';

window.addEventListener('DOMContentLoaded', () => {
  let three = new ThreeSceneFactory(window.innerWidth, window.innerHeight);
  three.buildAll();
  three.camera.position.z = 1;

  // const geometry = new THREE.PlaneBufferGeometry(6, 6);
  const geometry = new THREE.BoxGeometry(3, 3, 1);

  const unifor = {
    resolution: { type: 'v2', value: new THREE.Vector2() },
  };

  let material = new THREE.RawShaderMaterial({
    uniforms: unifor,
    vertexShader: vertextS,
    fragmentShader: fragmentS,
  });

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);

  const mat = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const geo2 = new THREE.BoxGeometry(1, 1, 1);
  const box = new THREE.Mesh(geo2, material);
  const mesh = new THREE.Mesh(geometry, material);

  box.position.z = -10;
  mesh.position.z = -10;
  three.scene.add(box);
  three.scene.add(light);

  unifor.resolution.value.x = three.renderer.domElement.width;
  unifor.resolution.value.y = three.renderer.domElement.height;
  three.scene.add(mesh);
  console.log(mesh.geometry.parameters);

  const tick = () => {
    requestAnimationFrame(tick);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box.rotation.y += 0.01;

    // 描画
    three.renderer.render(three.scene, three.camera);
  };
  tick();
});
