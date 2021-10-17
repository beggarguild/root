import { newSpecPage } from '@stencil/core/testing';
import { HeadlessNavigation } from '../headless-navigation';

describe('headless-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessNavigation],
      html: `<headless-navigation></headless-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-navigation>
    `);
  });
});
