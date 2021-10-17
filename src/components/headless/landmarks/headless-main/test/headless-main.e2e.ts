import { newE2EPage } from '@stencil/core/testing';

describe('headless-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-main></headless-main>');

    const element = await page.find('headless-main');
    expect(element).toHaveClass('hydrated');
  });
});
