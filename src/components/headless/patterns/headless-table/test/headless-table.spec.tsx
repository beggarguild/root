import { newSpecPage } from '@stencil/core/testing';
import { HeadlessTable } from '../headless-table';

describe('headless-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessTable],
      html: `<headless-table></headless-table>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-table>
    `);
  });
});
