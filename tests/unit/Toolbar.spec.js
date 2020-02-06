import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { VBtn } from 'vuetify/lib';
import sinon from 'sinon';
import Toolbar from '@/components/Toolbar.vue';

chai.use(sinonChai);
Vue.use(Vuetify);

describe('Toolbar.vue', () => {
  let wrapper;
  const edit = sinon.spy();
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = mount(Toolbar, {
      localVue,
      listeners: {
        edit,
      },
      propsData: {
        articleIndex: 3,
      },
    });
  });
  it('Emits edit event according to passed articleIndex when click', () => {
    const editButton = wrapper.find(VBtn);
    editButton.trigger('click');
    expect(edit).to.have.been.calledWith(3);
  });
  it('Generate to props on router the same as articleIndex passed', () => {
    const readButton = wrapper.findAll(VBtn).at(1);
    const prop = readButton.props('to');
    expect(prop.name).to.equal('articleDetail');
    expect(prop.params.articleIndex).to.equal(3);
  });
});
