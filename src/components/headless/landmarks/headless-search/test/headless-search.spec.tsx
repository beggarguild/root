import { newSpecPage } from '@stencil/core/testing';
import { HeadlessSearch } from '../headless-search';

describe('headless-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessSearch],
      html: `<headless-search></headless-search>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-search>
    `);
  });
});
