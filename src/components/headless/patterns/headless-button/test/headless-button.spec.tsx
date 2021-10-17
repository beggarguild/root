import { newSpecPage } from '@stencil/core/testing';
import { HeadlessButton } from '../headless-button';

describe('headless-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessButton],
      html: `<headless-button></headless-button>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-button>
    `);
  });
});
