import { newSpecPage } from '@stencil/core/testing';
import { HeadlessFeed } from '../headless-feed';

describe('headless-feed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessFeed],
      html: `<headless-feed></headless-feed>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-feed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-feed>
    `);
  });
});
