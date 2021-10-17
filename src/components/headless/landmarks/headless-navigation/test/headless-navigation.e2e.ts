import { newE2EPage } from '@stencil/core/testing';

describe('headless-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-navigation></headless-navigation>');

    const element = await page.find('headless-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
