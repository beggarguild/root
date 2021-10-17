import { newSpecPage } from '@stencil/core/testing';
import { HeadlessBanner } from '../headless-banner';

describe('headless-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessBanner],
      html: `<headless-banner></headless-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-banner>
    `);
  });
});
