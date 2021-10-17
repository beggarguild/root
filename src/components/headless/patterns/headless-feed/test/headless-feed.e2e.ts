import { newE2EPage } from '@stencil/core/testing';

describe('headless-feed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-feed></headless-feed>');

    const element = await page.find('headless-feed');
    expect(element).toHaveClass('hydrated');
  });
});
