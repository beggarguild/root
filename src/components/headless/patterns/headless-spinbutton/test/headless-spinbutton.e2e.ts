import { newE2EPage } from '@stencil/core/testing';

describe('headless-spinbutton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-spinbutton></headless-spinbutton>');

    const element = await page.find('headless-spinbutton');
    expect(element).toHaveClass('hydrated');
  });
});
