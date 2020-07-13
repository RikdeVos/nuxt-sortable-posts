import { cloneDeep } from 'lodash'

export const state = () => ({
  posts: [],
  snapshots: [],
})

export const mutations = {
  update_posts(state, { posts }) {
    state.posts = posts
  },
  move_post(state, { post, direction }) {
    // Add a snapshot with this mutation
    state.snapshots = [
      {
        title: `Moved ${post.title} from index ${post.index} to index ${
          post.index + direction
        }`,
        posts: cloneDeep(state.posts),
        id: state.snapshots.length,
      },
      ...state.snapshots,
    ]

    // Find and move the post on the new index to old index
    state.posts.find(
      (p) => p.index === post.index + direction
    ).index -= direction

    // Finally, move the post to new index
    state.posts.find((p) => p.id === post.id).index += direction
  },
  time_travel(state, { snapshot }) {
    // Set posts to snapshot posts
    state.posts = snapshot.posts

    // Remove snapshots and snapshots before this one
    state.snapshots = state.snapshots.filter((s) => s.id < snapshot.id)
  },
}

export const actions = {
  /**
   * Fetch posts from API and save in state
   */
  async fetchPosts({ commit }) {
    // Get posts from API
    const allPosts = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/posts`
    )

    // Grab only first 5 posts, and map them to a title, id, index.
    const posts = allPosts.slice(0, 5).map((post, index) => ({
      title: `Post ${post.id}`,
      id: post.id,
      index,
    }))

    commit('update_posts', { posts })
  },
}
