<script setup lang="ts">
import PageNumber from "../components/PageNumber.vue";

const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout default col-grid">
    <div class="top" :class="props.class">
      <slot/>
    </div>
    <div class="left" :class="props.class">
      <slot name="left"/>
    </div>
    <div class="right" :class="props.class">
      <slot name="right"/>
    </div>
    <div class="bottom" :class="props.class">
      <slot name="bottom"/>
      <PageNumber/>
    </div>
  </div>
</template>

<style>
.col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto min-content;
  grid-column-gap: 3rem;
  grid-row-gap: 0;
  height: 100%;
}

.top {
  grid-area: 1 / 1 / 2 / 3;
}

.left {
  grid-area: 2 / 1 / 3 / 2;
}

.right {
  grid-area: 2 / 2 / 3 / 3;
}

.bottom {
  grid-area: 3 / 1 / 4 / 3;
}
</style>