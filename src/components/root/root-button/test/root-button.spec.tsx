import { newSpecPage } from '@stencil/core/testing';
import { RootButton } from '../root-button';

describe('root-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RootButton],
      html: `<root-button></root-button>`,
    });
    expect(page.root).toEqualHtml(`
      <root-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </root-button>
    `);
  });
});
