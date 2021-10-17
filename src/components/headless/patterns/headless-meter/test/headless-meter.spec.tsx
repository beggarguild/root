import { newSpecPage } from '@stencil/core/testing';
import { HeadlessMeter } from '../headless-meter';

describe('headless-meter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessMeter],
      html: `<headless-meter></headless-meter>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-meter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-meter>
    `);
  });
});
