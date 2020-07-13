import axios from 'axios'
import { actions } from '@/store/index.js'

const store = {
  state: {
    posts: [],
    snapshots: [],
  },
  actions,
}

jest.mock('axios')
store.actions.$axios = axios

const commit = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchPosts', () => {
  it('should fetch posts', async () => {
    store.actions.$axios.get.mockResolvedValue({
      status: 200,
      data: [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut fnderit',
          body: 'quia et suscipi',
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempor',
        },
        {
          userId: 1,
          id: 3,
          title: 'sunt aut fnderit',
          body: 'quia et suscipi',
        },
        {
          userId: 1,
          id: 4,
          title: 'qui est esse',
          body: 'est rerum tempor',
        },
        {
          userId: 1,
          id: 5,
          title: 'sunt aut fnderit',
          body: 'quia et suscipi',
        },
        {
          userId: 1,
          id: 6,
          title: 'qui est esse',
          body: 'est rerum tempor',
        },
      ],
    })

    await store.actions.fetchPosts({ commit, state: store.state })

    expect(commit).toHaveBeenCalledWith('update_posts', {
      posts: [
        { id: 1, title: 'Post 1', index: 0 },
        { id: 2, title: 'Post 2', index: 1 },
        { id: 3, title: 'Post 3', index: 2 },
        { id: 4, title: 'Post 4', index: 3 },
        { id: 5, title: 'Post 5', index: 4 },
      ],
    })
  })
})
