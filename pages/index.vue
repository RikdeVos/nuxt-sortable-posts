<template>
  <div class="background">
    <div class="container mx-auto p-4">
      <div class="flex flex-col flex-fill md:flex-row mt-12">
        <div class="w-full md:w-3/6 mr-24">
          <h2 class="text-white text-2xl font-medium mb-4">
            Sortable Post List
          </h2>
          <div class="relative" :style="{ height: posts.length * 116 + 'px' }">
            <Post
              v-for="post of posts"
              :key="post.id"
              :post="post"
              :up-btn="post.index !== 0"
              :down-btn="post.index + 1 < posts.length"
              :style="{ top: post.index * 116 + 'px' }"
              class="w-full absolute transition-all ease-out-bounce duration-300"
              @up="upBtn(post)"
              @down="downBtn(post)"
            ></Post>
          </div>
        </div>
        <div class="w-full md:w-3/6">
          <Panel :title="'List of actions to be committed'">
            <div class="bg-white rounded shadow-lg">
              <Snapshot
                v-for="snapshot of snapshots"
                :key="snapshot.id"
                :snapshot="snapshot"
                class="border-b border-light last:border-0"
                @time-travel="timeTravelBtn(snapshot)"
              ></Snapshot>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState(['posts', 'snapshots']),
  },
  mounted() {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    upBtn(post) {
      this.$store.commit('move_post', { post, direction: -1 })
    },
    downBtn(post) {
      this.$store.commit('move_post', { post, direction: 1 })
    },
    timeTravelBtn(snapshot) {
      this.$store.commit('time_travel', { snapshot })
    },
  },
}
</script>

<style></style>
