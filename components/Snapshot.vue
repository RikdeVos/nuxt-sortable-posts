<template>
  <div class="flex flex-row items-center justify-between p-2">
    <div class="truncate mr-2">{{ title }}</div>
    <button
      class="bg-secondary text-secondary-dark w-32 h-12 rounded font-medium transition-colors duration-300 hover:bg-opacity-75 focus:outline-none active:transition-none active:bg-dark active:text-white"
      @click.prevent="timeTravelBtn()"
    >
      Time travel
    </button>
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
  methods: {
    timeTravelBtn() {
      this.$emit('time-travel')
    },
  },
}
</script>

<style></style>
