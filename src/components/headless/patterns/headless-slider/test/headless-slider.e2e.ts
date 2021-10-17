import { newE2EPage } from '@stencil/core/testing';

describe('headless-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-slider></headless-slider>');

    const element = await page.find('headless-slider');
    expect(element).toHaveClass('hydrated');
  });
});
