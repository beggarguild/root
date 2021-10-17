import { newE2EPage } from '@stencil/core/testing';

describe('headless-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-search></headless-search>');

    const element = await page.find('headless-search');
    expect(element).toHaveClass('hydrated');
  });
});
