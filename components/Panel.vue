<template>
  <div class="shadow-lg rounded">
    <div class="rounded-t bg-white p-4 text-2xl font-medium text-dark">
      {{ title }}
    </div>
    <div class="rounded-b bg-light p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style></style>
