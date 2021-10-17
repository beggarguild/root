import { newE2EPage } from '@stencil/core/testing';

describe('headless-treegrid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-treegrid></headless-treegrid>');

    const element = await page.find('headless-treegrid');
    expect(element).toHaveClass('hydrated');
  });
});
