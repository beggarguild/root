import { newE2EPage } from '@stencil/core/testing';

describe('headless-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-menu></headless-menu>');

    const element = await page.find('headless-menu');
    expect(element).toHaveClass('hydrated');
  });
});
