import { newSpecPage } from '@stencil/core/testing';
import { HeadlessToolbar } from '../headless-toolbar';

describe('headless-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessToolbar],
      html: `<headless-toolbar></headless-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-toolbar>
    `);
  });
});
