import { newSpecPage } from '@stencil/core/testing';
import { HeadlessCheckbox } from '../headless-checkbox';

describe('headless-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessCheckbox],
      html: `<headless-checkbox></headless-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-checkbox>
    `);
  });
});
