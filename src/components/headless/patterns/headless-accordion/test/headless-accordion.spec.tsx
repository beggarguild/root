import { newSpecPage } from '@stencil/core/testing';
import { HeadlessAccordion } from '../headless-accordion';

describe('headless-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessAccordion],
      html: `<headless-accordion></headless-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-accordion>
    `);
  });
});
