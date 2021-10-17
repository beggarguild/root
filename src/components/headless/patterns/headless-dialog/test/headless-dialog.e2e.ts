import { newE2EPage } from '@stencil/core/testing';

describe('headless-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-dialog></headless-dialog>');

    const element = await page.find('headless-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
