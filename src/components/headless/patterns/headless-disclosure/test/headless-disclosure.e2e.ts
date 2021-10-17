import { newE2EPage } from '@stencil/core/testing';

describe('headless-disclosure', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-disclosure></headless-disclosure>');

    const element = await page.find('headless-disclosure');
    expect(element).toHaveClass('hydrated');
  });
});
