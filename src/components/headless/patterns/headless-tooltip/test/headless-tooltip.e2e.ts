import { newE2EPage } from '@stencil/core/testing';

describe('headless-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-tooltip></headless-tooltip>');

    const element = await page.find('headless-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
