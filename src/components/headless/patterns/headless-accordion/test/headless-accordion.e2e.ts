import { newE2EPage } from '@stencil/core/testing';

describe('headless-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-accordion></headless-accordion>');

    const element = await page.find('headless-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
