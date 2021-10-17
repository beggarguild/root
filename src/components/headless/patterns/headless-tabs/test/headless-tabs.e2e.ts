import { newE2EPage } from '@stencil/core/testing';

describe('headless-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-tabs></headless-tabs>');

    const element = await page.find('headless-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
