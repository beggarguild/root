import { newE2EPage } from '@stencil/core/testing';

describe('headless-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-checkbox></headless-checkbox>');

    const element = await page.find('headless-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
