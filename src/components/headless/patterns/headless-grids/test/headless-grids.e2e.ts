import { newE2EPage } from '@stencil/core/testing';

describe('headless-grids', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-grids></headless-grids>');

    const element = await page.find('headless-grids');
    expect(element).toHaveClass('hydrated');
  });
});
