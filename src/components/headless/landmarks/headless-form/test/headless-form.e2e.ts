import { newE2EPage } from '@stencil/core/testing';

describe('headless-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-form></headless-form>');

    const element = await page.find('headless-form');
    expect(element).toHaveClass('hydrated');
  });
});
