import { newE2EPage } from '@stencil/core/testing';

describe('headless-menu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-menu-button></headless-menu-button>');

    const element = await page.find('headless-menu-button');
    expect(element).toHaveClass('hydrated');
  });
});
