import { newE2EPage } from '@stencil/core/testing';

describe('headless-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-toolbar></headless-toolbar>');

    const element = await page.find('headless-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
