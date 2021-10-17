import { newE2EPage } from '@stencil/core/testing';

describe('headless-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-link></headless-link>');

    const element = await page.find('headless-link');
    expect(element).toHaveClass('hydrated');
  });
});
