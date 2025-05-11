export const vertexShader = `
  attribute vec3 velocity;
  uniform float uMaxSpeed;

  varying vec3 vColor;

  void main() {
    // Compute speed and normalize into [0..1] range
    float speed = length(velocity);
    float t = clamp(speed / uMaxSpeed, 0.0, 1.0);

    // Gradient: black (slow) -> red/orange (medium) -> white (fast)
    vec3 black = vec3(0.1, 0.1, 0.1);
    vec3 mid   = vec3(0.2, 0.2, 0.2);
    vec3 white = vec3(0.35, 0.35, 0.4);

    if (t < 0.5) {
      float subT = t / 0.5;
      vColor = mix(black, mid, subT);
    } else {
      float subT = (t - 0.5) / 0.5;
      vColor = mix(mid, white, subT);
    }

    // Set point size (in screen space)
    gl_PointSize = 3.0;

    // Standard projection
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  varying vec3 vColor;

  void main() {
    // Optional round point shape
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (length(coord) > 0.5) {
      discard;
    }
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

export default { fragmentShader, vertexShader };