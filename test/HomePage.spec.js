import HomePage from '@/pages/Index'
import { mount } from '@vue/test-utils'

const mockStore = {
  dispatch: jest.fn(),
  commit: jest.fn(),
  state: { posts: [], snapshots: [] },
}

describe('HomePage', () => {
  it('should dispatch an action to load posts', async () => {
    const wrapper = mount(HomePage, {
      mocks: {
        $store: mockStore,
      },
      stubs: {
        Panel: true,
        Post: true,
      },
    })
    await wrapper.vm.$nextTick()
    expect(mockStore.dispatch).toHaveBeenCalledWith('fetchPosts')
  })

  it('should commit a move_post mutation when a post is moved up', async () => {
    const wrapper = mount(HomePage, {
      mocks: {
        $store: mockStore,
      },
      stubs: {
        Panel: true,
        Post: true,
      },
    })
    const mockPost = {
      title: 'Post 1',
      id: 0,
      index: 2,
    }

    wrapper.vm.upBtn(mockPost)
    await wrapper.vm.$nextTick()
    expect(mockStore.commit).toHaveBeenCalledWith('move_post', {
      post: mockPost,
      direction: -1,
    })

    wrapper.vm.downBtn(mockPost)
    await wrapper.vm.$nextTick()
    expect(mockStore.commit).toHaveBeenCalledWith('move_post', {
      post: mockPost,
      direction: 1,
    })
  })

  it('should commit a time_travel mutation when the time travel btn is pressed', async () => {
    const wrapper = mount(HomePage, {
      mocks: {
        $store: mockStore,
      },
      stubs: {
        Panel: true,
        Post: true,
      },
    })
    const mockSnapshot = {
      title: 'Moved Post 1 from index 1 to index 2',
      id: 0,
      posts: [],
    }

    wrapper.vm.timeTravelBtn(mockSnapshot)
    await wrapper.vm.$nextTick()
    expect(mockStore.commit).toHaveBeenCalledWith('time_travel', {
      snapshot: mockSnapshot,
    })
  })
})
