<template>
  <div class="background">
    <div class="container mx-auto mt-12">
      <div class="flex flex-row flex-fill">
        <div class="w-3/6 mr-24">
          <h2 class="text-white text-2xl font-medium">Sortable Post List</h2>
          <Post
            v-for="post of posts"
            :key="post.id"
            :post="post"
            class="my-4"
          ></Post>
        </div>
        <div class="w-3/6">
          <Panel :title="'List of actions to be committed'">
            <div class="bg-white rounded shadow-lg">
              <Snapshot
                :title="'Moved post 1 from index 2 to index 1'"
                class="border-b border-light"
              ></Snapshot>
              <Snapshot
                :title="'Moved post 1 from index 2 to index 1'"
              ></Snapshot>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      posts: [
        {
          title: 'Post 1',
          id: 1,
        },
        {
          title: 'Post 2',
          id: 2,
        },
      ],
    }
  },
}
</script>

<style>
.container {
  /* @apply min-h-screen flex justify-center items-center text-center mx-auto; */
}
</style>
