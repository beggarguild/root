import { newSpecPage } from '@stencil/core/testing';
import { HeadlessGrids } from '../headless-grids';

describe('headless-grids', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessGrids],
      html: `<headless-grids></headless-grids>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-grids>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-grids>
    `);
  });
});
