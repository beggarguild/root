import { newE2EPage } from '@stencil/core/testing';

describe('headless-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-breadcrumb></headless-breadcrumb>');

    const element = await page.find('headless-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
