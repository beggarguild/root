import { newSpecPage } from '@stencil/core/testing';
import { HeadlessContentinfo } from '../headless-contentinfo';

describe('headless-contentinfo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessContentinfo],
      html: `<headless-contentinfo></headless-contentinfo>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-contentinfo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-contentinfo>
    `);
  });
});
