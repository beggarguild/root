import { newSpecPage } from '@stencil/core/testing';
import { HeadlessSliderMulti } from '../headless-slider-multi';

describe('headless-slider-multi', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessSliderMulti],
      html: `<headless-slider-multi></headless-slider-multi>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-slider-multi>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-slider-multi>
    `);
  });
});
