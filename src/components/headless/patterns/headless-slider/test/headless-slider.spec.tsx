import { newSpecPage } from '@stencil/core/testing';
import { HeadlessSlider } from '../headless-slider';

describe('headless-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessSlider],
      html: `<headless-slider></headless-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-slider>
    `);
  });
});
