'use strict';

const { mockTHREE } = require('ebabel-mocks');
const soundEffect = require('../src/ebabel-sound-effect.js');

let THREE;
let camera;

beforeEach(() => {
  THREE = mockTHREE;
  camera = new THREE.PerspectiveCamera();
  camera.children = [ {name: 'camera-listener'} ];
});

test('soundEffect returns something other than undefined.', () => {
  const result = soundEffect({
    THREE,
    camera,
    name: 'death',
    url: 'assets/death-grown.ogg'
  });
  expect(result !== undefined).toBe(true);
});

test('missing URL input for soundEffect', () => {
  const result = soundEffect({
    THREE,
    camera,
    volume: 0.45,
    name: 'main-music',
  });
  expect(result === undefined).toBe(true);
  
});
