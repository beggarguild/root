import { newSpecPage } from '@stencil/core/testing';
import { HeadlessLink } from '../headless-link';

describe('headless-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessLink],
      html: `<headless-link></headless-link>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-link>
    `);
  });
});
