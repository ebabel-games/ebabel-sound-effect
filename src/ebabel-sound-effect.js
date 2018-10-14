'use strict';

/**
 * `ebabelSoundEffect`
 * Attach a sound effect to a 3D mesh, like an npc for example.
 */
const soundEffect = (input) => {
  const {
    THREE,
    camera,
    name,
    url,
    distance = 20,
    loop = false,
    volume = 0.6,
    autostart = false,
  } = input;

  if (!camera || !name || !url) return;

  // Create an AudioListener and add it to the camera.
  const listener = new THREE.AudioListener();
  listener.name = name;
  camera.add(listener);

  const sound = new THREE.PositionalAudio(listener);
  sound.name = name;

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(url, (buffer) => {
    sound.setBuffer(buffer);
    sound.setRefDistance(distance);
    sound.setLoop(loop);
    sound.setVolume(volume);
    if (autostart) sound.play();
  });

  return sound;
};

module.exports = soundEffect;
