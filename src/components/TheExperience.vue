<script setup lang="ts">
import ThePortal from './ThePortal.vue';
import { OrbitControls, useTweakPane } from '@tresjs/cientos';
import TheFireFlies from './TheFireFlies.vue';

const sceneState = {
  backgroundColor: '#201919',
};

const { pane } = useTweakPane();

const sceneFolder = pane.addFolder({
  title: 'Scene',
  expanded: true,
});

sceneFolder
  .addInput(sceneState, 'backgroundColor', {
    label: 'Background Color',
    colorMode: 'hex',
  })
  .on('change', (ev: any) => {
    scene.fog = new Fog(new Color(ev.value), 0.1, 75);
    scene.background = new Color(ev.value);
  });
</script>

<template>
  <TresCanvas
    clear-color="#201919"
    shadows
    alpha
    window-size
    power-preference="high-performance"
  >
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[5, 5, 5]"
      :fov="45"
      :aspect="1"
      :near="0.1"
      :far="1000"
    />
    <TresScene>
      <TresFog :args="['#201919', 0.1, 75]" />
      <ThePortal />
      <TheFireFlies />
      <TresAmbientLight
        :position="[10, 10, 10]"
        :intensity="1.5"
        color="#00ff00"
      />
    </TresScene>
  </TresCanvas>
</template>
