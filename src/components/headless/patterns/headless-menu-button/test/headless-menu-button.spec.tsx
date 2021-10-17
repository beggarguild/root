import { newSpecPage } from '@stencil/core/testing';
import { HeadlessMenuButton } from '../headless-menu-button';

describe('headless-menu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessMenuButton],
      html: `<headless-menu-button></headless-menu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-menu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-menu-button>
    `);
  });
});
