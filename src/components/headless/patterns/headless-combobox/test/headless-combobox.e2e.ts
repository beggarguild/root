import { newE2EPage } from '@stencil/core/testing';

describe('headless-combobox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-combobox></headless-combobox>');

    const element = await page.find('headless-combobox');
    expect(element).toHaveClass('hydrated');
  });
});
