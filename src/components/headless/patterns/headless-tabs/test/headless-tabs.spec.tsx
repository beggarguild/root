import { newSpecPage } from '@stencil/core/testing';
import { HeadlessTabs } from '../headless-tabs';

describe('headless-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessTabs],
      html: `<headless-tabs></headless-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-tabs>
    `);
  });
});
