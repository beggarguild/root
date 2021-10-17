import { newSpecPage } from '@stencil/core/testing';
import { HeadlessDialog } from '../headless-dialog';

describe('headless-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessDialog],
      html: `<headless-dialog></headless-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-dialog>
    `);
  });
});
