import { newSpecPage } from '@stencil/core/testing';
import { HeadlessCarousel } from '../headless-carousel';

describe('headless-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessCarousel],
      html: `<headless-carousel></headless-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-carousel>
    `);
  });
});
