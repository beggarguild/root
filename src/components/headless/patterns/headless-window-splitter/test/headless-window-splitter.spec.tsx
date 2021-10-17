import { newSpecPage } from '@stencil/core/testing';
import { HeadlessWindowSplitter } from '../headless-window-splitter';

describe('headless-window-splitter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessWindowSplitter],
      html: `<headless-window-splitter></headless-window-splitter>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-window-splitter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-window-splitter>
    `);
  });
});
