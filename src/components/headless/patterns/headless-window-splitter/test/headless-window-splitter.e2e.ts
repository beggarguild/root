import { newE2EPage } from '@stencil/core/testing';

describe('headless-window-splitter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-window-splitter></headless-window-splitter>');

    const element = await page.find('headless-window-splitter');
    expect(element).toHaveClass('hydrated');
  });
});
