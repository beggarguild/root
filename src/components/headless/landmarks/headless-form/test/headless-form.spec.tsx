import { newSpecPage } from '@stencil/core/testing';
import { HeadlessForm } from '../headless-form';

describe('headless-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlessForm],
      html: `<headless-form></headless-form>`,
    });
    expect(page.root).toEqualHtml(`
      <headless-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headless-form>
    `);
  });
});
