import { cloneDeep } from 'lodash'
import { mutations } from '@/store/index'

describe('update_posts', () => {
  it('should update posts in the state', () => {
    const posts = [{ id: 1, title: 'Post 1', index: 1 }]
    const state = { posts: [], snapshots: [] }
    mutations.update_posts(state, { posts })
    expect(state).toEqual({
      posts,
      snapshots: [],
    })
  })
})

describe('move_post', () => {
  it('should swap a post with the post below when moving the post down', () => {
    const posts = [
      { id: 1, title: 'Post 1', index: 1 },
      { id: 2, title: 'Post 2', index: 2 },
      { id: 3, title: 'Post 3', index: 3 },
    ]
    const state = { posts, snapshots: [] }
    mutations.move_post(state, { post: posts[0], direction: 1 })
    expect(state.posts).toEqual([
      { id: 1, title: 'Post 1', index: 2 },
      { id: 2, title: 'Post 2', index: 1 },
      { id: 3, title: 'Post 3', index: 3 },
    ])
  })

  it('should swap a post with the post above when moving the post up', () => {
    const posts = [
      { id: 1, title: 'Post 1', index: 1 },
      { id: 2, title: 'Post 2', index: 2 },
      { id: 3, title: 'Post 3', index: 3 },
    ]
    const state = { posts, snapshots: [] }
    mutations.move_post(state, { post: posts[1], direction: -1 })
    expect(state.posts).toEqual([
      { id: 1, title: 'Post 1', index: 2 },
      { id: 2, title: 'Post 2', index: 1 },
      { id: 3, title: 'Post 3', index: 3 },
    ])
  })

  it('should create a snapshot when moving a post', () => {
    const posts = [
      { id: 1, title: 'Post 1', index: 1 },
      { id: 2, title: 'Post 2', index: 2 },
      { id: 3, title: 'Post 3', index: 3 },
    ]
    const postsCopy = cloneDeep(posts)
    const state = { posts, snapshots: [] }
    mutations.move_post(state, { post: posts[1], direction: 1 })
    expect(state.snapshots.length).toEqual(1)
    expect(state.snapshots[0].id).toEqual(0)
    expect(state.snapshots[0].title).toEqual(
      `Moved Post 2 from index 2 to index 3`
    )
    expect(state.snapshots[0].posts).toEqual(postsCopy)
  })

  it('should add new snapshots before old snapshots', () => {
    const posts = [
      { id: 1, title: 'Post 1', index: 1 },
      { id: 2, title: 'Post 2', index: 2 },
      { id: 3, title: 'Post 3', index: 3 },
    ]
    const state = { posts, snapshots: [] }
    mutations.move_post(state, { post: posts[0], direction: 1 })
    mutations.move_post(state, { post: posts[0], direction: 1 })
    expect(state.snapshots.length).toEqual(2)
    expect(state.snapshots[0].title).toEqual(
      `Moved Post 1 from index 2 to index 3`
    )
  })

  it('should set posts back to a previous state when using the time traveling feature', () => {
    const posts = [
      { id: 1, title: 'Post 1', index: 1 },
      { id: 2, title: 'Post 2', index: 2 },
      { id: 3, title: 'Post 3', index: 3 },
    ]
    const postsCopy = cloneDeep(posts)
    const state = { posts, snapshots: [] }

    // Move post 1 down
    mutations.move_post(state, { post: posts[0], direction: 1 })
    expect(state.snapshots.length).toEqual(1)

    // Time travel back to previous state
    mutations.time_travel(state, { snapshot: state.snapshots[0] })
    expect(state.snapshots.length).toEqual(0)
    expect(state.posts).toEqual(postsCopy)
  })
})
