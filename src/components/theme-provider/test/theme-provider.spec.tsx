import { newSpecPage } from '@stencil/core/testing';
import { ThemeProvider } from '../theme-provider';

describe('theme-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThemeProvider],
      html: `<theme-provider></theme-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <theme-provider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theme-provider>
    `);
  });
});
