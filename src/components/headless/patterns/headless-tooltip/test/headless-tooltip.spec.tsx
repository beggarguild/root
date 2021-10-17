import { newSpecPage } from '@stencil/core/testing';
import { HeadlessTooltip } from '../headless-tooltip';

describe('headless-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessTooltip],
      html: `<headless-tooltip></headless-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-tooltip>
    `);
  });
});
