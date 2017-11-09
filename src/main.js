import * as THREE from 'three';
import ThreeSceneFactory from './three/three_scene_factory';
import * as fragmentS from './test.frag';
import * as vertextS from './test.vert';

window.addEventListener('DOMContentLoaded', () => {
  let three = new ThreeSceneFactory(window.innerWidth, window.innerHeight);
  three.buildAll();
  three.camera.position.z = 1;

  const geometry = new THREE.PlaneBufferGeometry(6, 2);

  const unifor = {
    time: { type: 'f', value: 1.0 },
    resolution: { type: 'v2', value: new THREE.Vector2() },
    mouse: { type: 'v2', value: new THREE.Vector2() },
  };

  let material = new THREE.ShaderMaterial({
    uniforms: unifor,
    vertexShader: vertextS,
    fragmentShader: fragmentS,
  });

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);

  const mat = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const geo2 = new THREE.BoxGeometry(1, 1, 1);
  const box = new THREE.Mesh(geo2, mat);
  const mesh = new THREE.Mesh(geometry, mat);

  box.position.z = -5;
  mesh.position.z = -6;
  three.scene.add(box);
  three.scene.add(light);
  three.scene.add(mesh);

  const tick = () => {
    requestAnimationFrame(tick);

    box.rotation.x += 0.05;
    box.rotation.y += 0.05;

    // 描画
    three.renderer.render(three.scene, three.camera);
  };
  tick();
});
