import { newE2EPage } from '@stencil/core/testing';

describe('headless-meter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-meter></headless-meter>');

    const element = await page.find('headless-meter');
    expect(element).toHaveClass('hydrated');
  });
});
