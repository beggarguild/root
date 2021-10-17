import { newSpecPage } from '@stencil/core/testing';
import { HeadlessComplementary } from '../headless-complementary';

describe('headless-complementary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessComplementary],
      html: `<headless-complementary></headless-complementary>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-complementary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-complementary>
    `);
  });
});
