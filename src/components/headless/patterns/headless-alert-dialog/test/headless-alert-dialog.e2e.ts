import { newE2EPage } from '@stencil/core/testing';

describe('headless-alert-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-alert-dialog></headless-alert-dialog>');

    const element = await page.find('headless-alert-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
