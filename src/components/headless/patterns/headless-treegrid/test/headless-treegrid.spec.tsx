import { newSpecPage } from '@stencil/core/testing';
import { HeadlessTreegrid } from '../headless-treegrid';

describe('headless-treegrid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessTreegrid],
      html: `<headless-treegrid></headless-treegrid>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-treegrid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-treegrid>
    `);
  });
});
