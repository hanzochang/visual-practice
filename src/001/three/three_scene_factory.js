import * as THREE from 'three';

// Create Renderer, Scene, Camera
export default class ThreeSceneFactory {
  constructor(width, height) {
    this._setViewPort(width, height);
  }

  // build renderer, scene, camera
  buildAll() {
    this._buildRenderer(this.VIEWPORT_W, this.VIEWPORT_H);
    this._buildScene();
    this._buildCamera(this.VIEWPORT_W / this.VIEWPORT_H);
  }

  // set viewPort
  _setViewPort(width, height) {
    this.VIEWPORT_W = width;
    this.VIEWPORT_H = height;
  }

  // build renderer
  _buildRenderer(width, height) {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);
  }

  // build Scene
  _buildScene() {
    this.scene = new THREE.Scene();
  }

  // @param [Number] aspect — Camera frustum aspect ratio.
  // @param [Number] fov    — Camera frustum vertical field of view.
  // @param [Number] near   — Camera frustum near plane.
  // @param [Number] far    — Camera frustum far plane.
  _buildCamera(aspect, fov = 45, near = 1, far = 1000) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  }
}
