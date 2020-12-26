<template>
  <vl-feature :id="id">
    <vl-geom-point :coordinates="coordinates"></vl-geom-point>
    <vl-style-box>
      <vl-style-icon :src="icon" :scale="scale || 0.125" :anchor="anchor || [0.5, 1]"></vl-style-icon>
    </vl-style-box>
  </vl-feature>
</template>

<script>
export default {
  name: "MapIcon",
  props: {
    id: {
      type: String,
      required: true
    },
    coordinates: {
      type: Array,
      required: true
    },
    icon: {
      required: true
    },
    scale: {
      type: Number,
      required: false
    },
    anchor: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>

</style>