import { newE2EPage } from '@stencil/core/testing';

describe('headless-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-alert></headless-alert>');

    const element = await page.find('headless-alert');
    expect(element).toHaveClass('hydrated');
  });
});
