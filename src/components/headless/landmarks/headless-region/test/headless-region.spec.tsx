import { newSpecPage } from '@stencil/core/testing';
import { HeadlessRegion } from '../headless-region';

describe('headless-region', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessRegion],
      html: `<headless-region></headless-region>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-region>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-region>
    `);
  });
});
