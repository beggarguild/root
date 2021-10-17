import { newE2EPage } from '@stencil/core/testing';

describe('headless-region', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-region></headless-region>');

    const element = await page.find('headless-region');
    expect(element).toHaveClass('hydrated');
  });
});
