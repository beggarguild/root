import { newSpecPage } from '@stencil/core/testing';
import { HeadlessDisclosure } from '../headless-disclosure';

describe('headless-disclosure', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessDisclosure],
      html: `<headless-disclosure></headless-disclosure>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-disclosure>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-disclosure>
    `);
  });
});
