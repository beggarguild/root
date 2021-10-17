import { newSpecPage } from '@stencil/core/testing';
import { HeadlessAlert } from '../headless-alert';

describe('headless-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessAlert],
      html: `<headless-alert></headless-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-alert>
    `);
  });
});
