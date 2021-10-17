import { newSpecPage } from '@stencil/core/testing';
import { HeadlessSpinbutton } from '../headless-spinbutton';

describe('headless-spinbutton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessSpinbutton],
      html: `<headless-spinbutton></headless-spinbutton>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-spinbutton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-spinbutton>
    `);
  });
});
