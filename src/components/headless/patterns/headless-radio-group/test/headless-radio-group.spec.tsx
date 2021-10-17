import { newSpecPage } from '@stencil/core/testing';
import { HeadlessRadioGroup } from '../headless-radio-group';

describe('headless-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessRadioGroup],
      html: `<headless-radio-group></headless-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-radio-group>
    `);
  });
});
