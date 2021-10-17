import { newE2EPage } from '@stencil/core/testing';

describe('headless-contentinfo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-contentinfo></headless-contentinfo>');

    const element = await page.find('headless-contentinfo');
    expect(element).toHaveClass('hydrated');
  });
});
