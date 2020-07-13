import Snapshot from '@/components/Snapshot'
import { mount } from '@vue/test-utils'

describe('Snapshot', () => {
  it('should emit an event upon clicking the btn', () => {
    const wrapper = mount(Snapshot, {
      propsData: {
        snapshot: {},
      },
    })
    const btn = wrapper.find('[data-testid="time-travel-btn"]')
    btn.trigger('click')
    const timeTravelCalls = wrapper.emitted('time-travel')
    expect(timeTravelCalls).toHaveLength(1)
  })
})
