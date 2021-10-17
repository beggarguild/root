import { newE2EPage } from '@stencil/core/testing';

describe('headless-listbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-listbox></headless-listbox>');

    const element = await page.find('headless-listbox');
    expect(element).toHaveClass('hydrated');
  });
});
