import { newSpecPage } from '@stencil/core/testing';
import { HeadlessAlertDialog } from '../headless-alert-dialog';

describe('headless-alert-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessAlertDialog],
      html: `<headless-alert-dialog></headless-alert-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-alert-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-alert-dialog>
    `);
  });
});
