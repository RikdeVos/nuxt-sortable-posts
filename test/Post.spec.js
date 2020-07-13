import Post from '@/components/Post'
import { mount } from '@vue/test-utils'

fdescribe('Post', () => {
  it('should emit an event upon clicking the up btn', () => {
    const wrapper = mount(Post, {
      propsData: {
        upBtn: true,
        downBtn: true,
        post: { id: 1, title: 'Post 1', index: 0 },
      },
      stubs: {
        PostBtn: true,
      },
    })
    const upBtn = wrapper.find('[data-testid="move-up-btn"]')
    upBtn.trigger('click')
    const postUpCalls = wrapper.emitted('up')
    expect(postUpCalls).toHaveLength(1)
  })

  it('should emit an event upon clicking the down btn', () => {
    const wrapper = mount(Post, {
      propsData: {
        upBtn: true,
        downBtn: true,
        post: { id: 1, title: 'Post 1', index: 0 },
      },
      stubs: {
        PostBtn: true,
      },
    })
    const downBtn = wrapper.find('[data-testid="move-down-btn"]')
    downBtn.trigger('click')
    const postDownCalls = wrapper.emitted('down')
    expect(postDownCalls).toHaveLength(1)
  })
})
