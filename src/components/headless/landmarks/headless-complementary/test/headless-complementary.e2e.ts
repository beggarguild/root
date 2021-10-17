import { newE2EPage } from '@stencil/core/testing';

describe('headless-complementary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-complementary></headless-complementary>');

    const element = await page.find('headless-complementary');
    expect(element).toHaveClass('hydrated');
  });
});
