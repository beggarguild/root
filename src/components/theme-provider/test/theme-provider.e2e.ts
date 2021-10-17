import { newE2EPage } from '@stencil/core/testing';

describe('theme-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theme-provider></theme-provider>');

    const element = await page.find('theme-provider');
    expect(element).toHaveClass('hydrated');
  });
});
