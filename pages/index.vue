<template>
  <div class="background">
    <div class="container mx-auto mt-12">
      <div class="flex flex-row flex-fill">
        <div class="w-3/6 mr-24">
          <h2 class="text-white text-2xl font-medium mb-4">
            Sortable Post List
          </h2>
          <div class="relative" :style="{ height: posts.length * 116 + 'px' }">
            <Post
              v-for="post of posts"
              :key="post.id"
              :post="post"
              :prev-btn="post.index !== 0"
              :next-btn="post.index + 1 < posts.length"
              :style="{ top: post.index * 116 + 'px' }"
              class="w-full absolute transition-all ease-out-bounce duration-300"
            ></Post>
          </div>
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
          index: 1,
        },
        {
          title: 'Post 2',
          id: 2,
          index: 0,
        },
        {
          title: 'Post 3',
          id: 3,
          index: 2,
        },
        {
          title: 'Post 4',
          id: 4,
          index: 3,
        },
        {
          title: 'Post 5',
          id: 5,
          index: 4,
        },
      ],
    }
  },
}
</script>

<style></style>
