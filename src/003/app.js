import * as THREE from 'three';
import ThreeSceneFactory from './three/three_scene_factory';
import * as fragmentShader from './test.frag';
import * as vertexShader from './test.vert';

window.addEventListener('DOMContentLoaded', () => {
  // set three objects
  const uniforms = {
    resolution: { type: 'v2', value: new THREE.Vector2() },
  };

  const material = new THREE.RawShaderMaterial({
    uniforms, vertexShader, fragmentShader,
  });

  const geometry = new THREE.BoxGeometry(3, 3, 1);
  const light = new THREE.DirectionalLight(0xffffff);
  const mesh = new THREE.Mesh(geometry, material);

  light.position.set(1, 1, 1);
  mesh.position.z = -20;

  // build scenes
  const three = new ThreeSceneFactory(window.innerWidth, window.innerHeight);
  three.buildAll();
  three.addScene(light, mesh);

  const tick = () => {
    requestAnimationFrame(tick);
    uniforms.resolution.value.x = three.renderer.domElement.width;
    uniforms.resolution.value.y = three.renderer.domElement.height;

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    // 描画
    three.renderer.render(three.scene, three.camera);
  };
  tick();
});
