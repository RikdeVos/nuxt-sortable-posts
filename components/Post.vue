<template>
  <div
    class="flex flex-row shadow-lg rounded pl-2 text-lg bg-white items-center justify-between text-dark h-24"
  >
    <div>{{ post.title }}</div>
    <div class="flex flex-col text-primary h-24">
      <PostBtn
        v-if="upBtn"
        data-testid="move-up-btn"
        @click.native="$emit('up')"
        ><i class="fas fa-chevron-up"></i
      ></PostBtn>
      <PostBtn
        v-if="downBtn"
        data-testid="move-down-btn"
        @click.native="$emit('down')"
        ><i class="fas fa-chevron-down"></i
      ></PostBtn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    upBtn: {
      type: Boolean,
      required: false,
      default: false,
    },
    downBtn: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style></style>
