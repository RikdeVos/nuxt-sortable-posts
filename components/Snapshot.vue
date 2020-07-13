<template>
  <div class="flex flex-row items-center justify-between p-2">
    <div class="truncate mr-2">{{ snapshot.title }}</div>
    <button
      class="bg-secondary text-secondary-dark w-32 h-12 rounded font-medium transition-colors duration-300 hover:bg-opacity-75 focus:outline-none active:transition-none active:bg-dark active:text-white"
      data-testid="time-travel-btn"
      @click.prevent="$emit('time-travel')"
    >
      Time travel
    </button>
  </div>
</template>

<script>
export default {
  props: {
    snapshot: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
