import { newSpecPage } from '@stencil/core/testing';
import { HeadlessListbox } from '../headless-listbox';

describe('headless-listbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessListbox],
      html: `<headless-listbox></headless-listbox>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-listbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-listbox>
    `);
  });
});
