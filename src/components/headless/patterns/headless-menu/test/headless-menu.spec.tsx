import { newSpecPage } from '@stencil/core/testing';
import { HeadlessMenu } from '../headless-menu';

describe('headless-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessMenu],
      html: `<headless-menu></headless-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-menu>
    `);
  });
});
