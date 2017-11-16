attribute vec4 position;
attribute vec3 normal;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;

varying vec3 vNormal;

void main () {
  vNormal = normal;
  vec4 offset = position;
  float dist = 0.01;
  offset.xyz += normal * dist;
  //gl_Position = projectionMatrix * modelViewMatrix * viewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * viewMatrix * offset;
}
