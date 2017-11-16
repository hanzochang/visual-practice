/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, LensFlare, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, FontLoader, FileLoader, Loader, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, CatmullRomCurve3, CubicBezierCurve3, QuadraticBezierCurve3, LineCurve3, ArcCurve, EllipseCurve, SplineCurve, CubicBezierCurve, QuadraticBezierCurve, LineCurve, Shape, Path, ShapePath, Font, CurvePath, Curve, ShapeUtils, SceneUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, ImageUtils, Projector, CanvasRenderer */
/*! exports used: BoxGeometry, DirectionalLight, Mesh, PerspectiveCamera, RawShaderMaterial, Scene, Vector2, WebGLRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!************************!*\
  !*** ./src/003/app.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(/*! three */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__three_three_scene_factory__ = __webpack_require__(/*! ./three/three_scene_factory */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_frag__ = __webpack_require__(/*! ./test.frag */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_frag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__test_frag__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_vert__ = __webpack_require__(/*! ./test.vert */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_vert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__test_vert__);\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  // set three objects\n  var uniforms = {\n    resolution: { type: 'v2', value: new __WEBPACK_IMPORTED_MODULE_0_three__[\"g\" /* Vector2 */]() }\n  };\n\n  var material = new __WEBPACK_IMPORTED_MODULE_0_three__[\"e\" /* RawShaderMaterial */]({\n    uniforms: uniforms, vertexShader: __WEBPACK_IMPORTED_MODULE_3__test_vert__, fragmentShader: __WEBPACK_IMPORTED_MODULE_2__test_frag__\n  });\n\n  var geometry = new __WEBPACK_IMPORTED_MODULE_0_three__[\"a\" /* BoxGeometry */](3, 3, 1);\n  var light = new __WEBPACK_IMPORTED_MODULE_0_three__[\"b\" /* DirectionalLight */](0xffffff);\n  var mesh = new __WEBPACK_IMPORTED_MODULE_0_three__[\"c\" /* Mesh */](geometry, material);\n\n  light.position.set(1, 1, 1);\n  mesh.position.z = -20;\n\n  // build scenes\n  var three = new __WEBPACK_IMPORTED_MODULE_1__three_three_scene_factory__[\"a\" /* default */](window.innerWidth, window.innerHeight);\n  three.buildAll();\n  three.addScene(light, mesh);\n\n  var tick = function tick() {\n    requestAnimationFrame(tick);\n    uniforms.resolution.value.x = three.renderer.domElement.width;\n    uniforms.resolution.value.y = three.renderer.domElement.height;\n\n    mesh.rotation.x += 0.01;\n    mesh.rotation.y += 0.01;\n    mesh.rotation.z += 0.01;\n\n    // 描画\n    three.renderer.render(three.scene, three.camera);\n  };\n  tick();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvMDAzL2FwcC5qcz8xNzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBUaHJlZVNjZW5lRmFjdG9yeSBmcm9tICcuL3RocmVlL3RocmVlX3NjZW5lX2ZhY3RvcnknO1xuaW1wb3J0ICogYXMgZnJhZ21lbnRTaGFkZXIgZnJvbSAnLi90ZXN0LmZyYWcnO1xuaW1wb3J0ICogYXMgdmVydGV4U2hhZGVyIGZyb20gJy4vdGVzdC52ZXJ0Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIHNldCB0aHJlZSBvYmplY3RzXG4gIGNvbnN0IHVuaWZvcm1zID0ge1xuICAgIHJlc29sdXRpb246IHsgdHlwZTogJ3YyJywgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgfTtcblxuICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XG4gICAgdW5pZm9ybXMsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIsXG4gIH0pO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDMsIDEpO1xuICBjb25zdCBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgbGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpO1xuICBtZXNoLnBvc2l0aW9uLnogPSAtMjA7XG5cbiAgLy8gYnVpbGQgc2NlbmVzXG4gIGNvbnN0IHRocmVlID0gbmV3IFRocmVlU2NlbmVGYWN0b3J5KHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB0aHJlZS5idWlsZEFsbCgpO1xuICB0aHJlZS5hZGRTY2VuZShsaWdodCwgbWVzaCk7XG5cbiAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgdW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS54ID0gdGhyZWUucmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aDtcbiAgICB1bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnkgPSB0aHJlZS5yZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcblxuICAgIG1lc2gucm90YXRpb24ueCArPSAwLjAxO1xuICAgIG1lc2gucm90YXRpb24ueSArPSAwLjAxO1xuICAgIG1lc2gucm90YXRpb24ueiArPSAwLjAxO1xuXG4gICAgLy8g5o+P55S7XG4gICAgdGhyZWUucmVuZGVyZXIucmVuZGVyKHRocmVlLnNjZW5lLCB0aHJlZS5jYW1lcmEpO1xuICB9O1xuICB0aWNrKCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvMDAzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************!*\
  !*** ./src/003/three/three_scene_factory.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(/*! three */ 0);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n// Create Renderer, Scene, Camera\n\nvar ThreeSceneFactory = function () {\n  function ThreeSceneFactory(width, height) {\n    _classCallCheck(this, ThreeSceneFactory);\n\n    this._setViewPort(width, height);\n  }\n\n  // build renderer, scene, camera\n\n\n  _createClass(ThreeSceneFactory, [{\n    key: 'buildAll',\n    value: function buildAll() {\n      this._buildRenderer(this.VIEWPORT_W, this.VIEWPORT_H);\n      this._buildScene();\n      this._buildCamera(this.VIEWPORT_W / this.VIEWPORT_H);\n    }\n\n    // allow mass assignment three js objects to scene\n\n  }, {\n    key: 'addScene',\n    value: function addScene() {\n      var _this = this;\n\n      for (var _len = arguments.length, threeObj = Array(_len), _key = 0; _key < _len; _key++) {\n        threeObj[_key] = arguments[_key];\n      }\n\n      threeObj.forEach(function (obj) {\n        _this.scene.add(obj);\n      });\n    }\n\n    // set viewPort\n\n  }, {\n    key: '_setViewPort',\n    value: function _setViewPort(width, height) {\n      this.VIEWPORT_W = width;\n      this.VIEWPORT_H = height;\n    }\n\n    // build renderer\n\n  }, {\n    key: '_buildRenderer',\n    value: function _buildRenderer(width, height) {\n      this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__[\"h\" /* WebGLRenderer */]();\n      this.renderer.setSize(width, height);\n      this.renderer.setPixelRatio(window.devicePixelRatio);\n      document.body.appendChild(this.renderer.domElement);\n    }\n\n    // build Scene\n\n  }, {\n    key: '_buildScene',\n    value: function _buildScene() {\n      this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__[\"f\" /* Scene */]();\n    }\n\n    // @param [Number] aspect — Camera frustum aspect ratio.\n    // @param [Number] fov    — Camera frustum vertical field of view.\n    // @param [Number] near   — Camera frustum near plane.\n    // @param [Number] far    — Camera frustum far plane.\n\n  }, {\n    key: '_buildCamera',\n    value: function _buildCamera(aspect) {\n      var fov = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 45;\n      var near = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n      var far = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;\n\n      this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__[\"d\" /* PerspectiveCamera */](fov, aspect, near, far);\n    }\n  }]);\n\n  return ThreeSceneFactory;\n}();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ThreeSceneFactory);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvMDAzL3RocmVlL3RocmVlX3NjZW5lX2ZhY3RvcnkuanM/NDI2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8vIENyZWF0ZSBSZW5kZXJlciwgU2NlbmUsIENhbWVyYVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVTY2VuZUZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fc2V0Vmlld1BvcnQod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICAvLyBidWlsZCByZW5kZXJlciwgc2NlbmUsIGNhbWVyYVxuICBidWlsZEFsbCgpIHtcbiAgICB0aGlzLl9idWlsZFJlbmRlcmVyKHRoaXMuVklFV1BPUlRfVywgdGhpcy5WSUVXUE9SVF9IKTtcbiAgICB0aGlzLl9idWlsZFNjZW5lKCk7XG4gICAgdGhpcy5fYnVpbGRDYW1lcmEodGhpcy5WSUVXUE9SVF9XIC8gdGhpcy5WSUVXUE9SVF9IKTtcbiAgfVxuXG4gIC8vIGFsbG93IG1hc3MgYXNzaWdubWVudCB0aHJlZSBqcyBvYmplY3RzIHRvIHNjZW5lXG4gIGFkZFNjZW5lKC4uLnRocmVlT2JqKSB7XG4gICAgdGhyZWVPYmouZm9yRWFjaCgob2JqKSA9PiB7IHRoaXMuc2NlbmUuYWRkKG9iaik7IH0pO1xuICB9XG5cbiAgLy8gc2V0IHZpZXdQb3J0XG4gIF9zZXRWaWV3UG9ydCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5WSUVXUE9SVF9XID0gd2lkdGg7XG4gICAgdGhpcy5WSUVXUE9SVF9IID0gaGVpZ2h0O1xuICB9XG5cbiAgLy8gYnVpbGQgcmVuZGVyZXJcbiAgX2J1aWxkUmVuZGVyZXIod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgfVxuXG4gIC8vIGJ1aWxkIFNjZW5lXG4gIF9idWlsZFNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgfVxuXG4gIC8vIEBwYXJhbSBbTnVtYmVyXSBhc3BlY3Qg4oCUIENhbWVyYSBmcnVzdHVtIGFzcGVjdCByYXRpby5cbiAgLy8gQHBhcmFtIFtOdW1iZXJdIGZvdiAgICDigJQgQ2FtZXJhIGZydXN0dW0gdmVydGljYWwgZmllbGQgb2Ygdmlldy5cbiAgLy8gQHBhcmFtIFtOdW1iZXJdIG5lYXIgICDigJQgQ2FtZXJhIGZydXN0dW0gbmVhciBwbGFuZS5cbiAgLy8gQHBhcmFtIFtOdW1iZXJdIGZhciAgICDigJQgQ2FtZXJhIGZydXN0dW0gZmFyIHBsYW5lLlxuICBfYnVpbGRDYW1lcmEoYXNwZWN0LCBmb3YgPSA0NSwgbmVhciA9IDEsIGZhciA9IDEwMDApIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShmb3YsIGFzcGVjdCwgbmVhciwgZmFyKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy8wMDMvdGhyZWUvdGhyZWVfc2NlbmVfZmFjdG9yeS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUExQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./src/003/test.frag ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\nuniform vec2 resolution;\\nvarying vec3 vNormal;\\n\\nvec2 tile(vec2 _st, float _zoom, float _offset){\\n  _st *= _zoom;\\n  return fract(_st - _offset/2.);\\n}\\n\\nvoid main(void){\\n  float offset = 0.10;\\n  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);\\n  p = p + vNormal.xy;\\n\\n  p = tile(p, floor(10.0), offset);\\n\\n  float o = 1.0 - step(1.0 - offset, max(abs(p.x), abs(p.y)));\\n  vec3 color = vec3(o*0.2);\\n\\n  //gl_FragColor = vec4(color, 1.0);\\n  gl_FragColor = vec4(vNormal+vec3(0.2), 1.0);\\n  //gl_FragColor = vec4(cross(vNormal, color), 1.0);\\n}\\n\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy8wMDMvdGVzdC5mcmFnPzU2NzgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcblxcbnZlYzIgdGlsZSh2ZWMyIF9zdCwgZmxvYXQgX3pvb20sIGZsb2F0IF9vZmZzZXQpe1xcbiAgX3N0ICo9IF96b29tO1xcbiAgcmV0dXJuIGZyYWN0KF9zdCAtIF9vZmZzZXQvMi4pO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCl7XFxuICBmbG9hdCBvZmZzZXQgPSAwLjEwO1xcbiAgdmVjMiBwID0gKGdsX0ZyYWdDb29yZC54eSAqIDIuMCAtIHJlc29sdXRpb24pIC8gbWluKHJlc29sdXRpb24ueCwgcmVzb2x1dGlvbi55KTtcXG4gIHAgPSBwICsgdk5vcm1hbC54eTtcXG5cXG4gIHAgPSB0aWxlKHAsIGZsb29yKDEwLjApLCBvZmZzZXQpO1xcblxcbiAgZmxvYXQgbyA9IDEuMCAtIHN0ZXAoMS4wIC0gb2Zmc2V0LCBtYXgoYWJzKHAueCksIGFicyhwLnkpKSk7XFxuICB2ZWMzIGNvbG9yID0gdmVjMyhvKjAuMik7XFxuXFxuICAvL2dsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIDEuMCk7XFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZOb3JtYWwrdmVjMygwLjIpLCAxLjApO1xcbiAgLy9nbF9GcmFnQ29sb3IgPSB2ZWM0KGNyb3NzKHZOb3JtYWwsIGNvbG9yKSwgMS4wKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy8wMDMvdGVzdC5mcmFnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***************************!*\
  !*** ./src/003/test.vert ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec4 position;\\nattribute vec3 normal;\\n\\nuniform mat4 projectionMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 viewMatrix;\\n\\nvarying vec3 vNormal;\\n\\nvoid main () {\\n  vNormal = normal;\\n  vec4 offset = position;\\n  float dist = 0.01;\\n  offset.xyz += normal * dist;\\n  //gl_Position = projectionMatrix * modelViewMatrix * viewMatrix * vec4(position, 1.0);\\n  gl_Position = projectionMatrix * modelViewMatrix * viewMatrix * offset;\\n}\\n\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy8wMDMvdGVzdC52ZXJ0P2E1NGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcXG5cXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCB2aWV3TWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcblxcbnZvaWQgbWFpbiAoKSB7XFxuICB2Tm9ybWFsID0gbm9ybWFsO1xcbiAgdmVjNCBvZmZzZXQgPSBwb3NpdGlvbjtcXG4gIGZsb2F0IGRpc3QgPSAwLjAxO1xcbiAgb2Zmc2V0Lnh5eiArPSBub3JtYWwgKiBkaXN0O1xcbiAgLy9nbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2aWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZpZXdNYXRyaXggKiBvZmZzZXQ7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvMDAzL3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);