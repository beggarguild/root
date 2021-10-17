import { newSpecPage } from '@stencil/core/testing';
import { HeadlessCombobox } from '../headless-combobox';

describe('headless-combobox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessCombobox],
      html: `<headless-combobox></headless-combobox>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-combobox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-combobox>
    `);
  });
});
