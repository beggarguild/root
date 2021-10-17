import { newE2EPage } from '@stencil/core/testing';

describe('headless-slider-multi', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-slider-multi></headless-slider-multi>');

    const element = await page.find('headless-slider-multi');
    expect(element).toHaveClass('hydrated');
  });
});
