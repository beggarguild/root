import { newE2EPage } from '@stencil/core/testing';

describe('headless-tree-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-tree-view></headless-tree-view>');

    const element = await page.find('headless-tree-view');
    expect(element).toHaveClass('hydrated');
  });
});
