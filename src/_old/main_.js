import * as THREE from 'three';
import ThreeSceneFactory from './three/three_scene_factory';
import * as fragmentShader from './test.frag';

window.addEventListener('DOMContentLoaded', () => {
  let three = new ThreeSceneFactory(window.innerWidth, window.innerHeight);
  three.buildAll();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

  const box = new THREE.Mesh(geometry, material);
  const light = new THREE.DirectionalLight(0xffffff);

  light.position.set(1, 1, 1);
  box.position.z = -5;

  three.scene.add(box);
  three.scene.add(light);

  const tick = () => {
    requestAnimationFrame(tick);

    box.rotation.x += 0.05;
    box.rotation.y += 0.05;

    // 描画
    three.renderer.render(three.scene, three.camera);
  };
  tick();
});
