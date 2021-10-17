import { newE2EPage } from '@stencil/core/testing';

describe('headless-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-button></headless-button>');

    const element = await page.find('headless-button');
    expect(element).toHaveClass('hydrated');
  });
});
