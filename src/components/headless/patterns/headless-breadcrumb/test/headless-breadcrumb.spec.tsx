import { newSpecPage } from '@stencil/core/testing';
import { HeadlessBreadcrumb } from '../headless-breadcrumb';

describe('headless-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessBreadcrumb],
      html: `<headless-breadcrumb></headless-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-breadcrumb>
    `);
  });
});
