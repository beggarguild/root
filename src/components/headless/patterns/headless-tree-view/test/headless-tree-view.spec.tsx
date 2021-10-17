import { newSpecPage } from '@stencil/core/testing';
import { HeadlessTreeView } from '../headless-tree-view';

describe('headless-tree-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessTreeView],
      html: `<headless-tree-view></headless-tree-view>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-tree-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-tree-view>
    `);
  });
});
