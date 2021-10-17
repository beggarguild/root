import { newE2EPage } from '@stencil/core/testing';

describe('root-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<root-button></root-button>');

    const element = await page.find('root-button');
    expect(element).toHaveClass('hydrated');
  });
});
