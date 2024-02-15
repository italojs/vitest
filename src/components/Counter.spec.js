import { mount } from '@vue/test-utils';
import Counter from './Counter.vue'; 

describe('Counter Component', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { initialCount: 5 },
    });

    expect(wrapper.text()).toContain('The count is: 5');
    expect(wrapper.html()).toMatchSnapshot('initial state');

    const incrementSpy = vi.spyOn(wrapper.vm.methods, 'increment');
    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain('The count is: 6');
    expect(incrementSpy).toHaveBeenCalled();
    expect(wrapper.html()).toMatchSnapshot('after click');
  });
});
