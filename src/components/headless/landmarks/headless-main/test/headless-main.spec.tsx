import { newSpecPage } from '@stencil/core/testing';
import { HeadlessMain } from '../headless-main';

describe('headless-main', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessMain],
      html: `<headless-main></headless-main>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-main>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-main>
    `);
  });
});
