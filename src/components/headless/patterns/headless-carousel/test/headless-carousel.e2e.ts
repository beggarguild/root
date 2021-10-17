import { newE2EPage } from '@stencil/core/testing';

describe('headless-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-carousel></headless-carousel>');

    const element = await page.find('headless-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
