import { newE2EPage } from '@stencil/core/testing';

describe('headless-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-banner></headless-banner>');

    const element = await page.find('headless-banner');
    expect(element).toHaveClass('hydrated');
  });
});
