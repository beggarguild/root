import { newE2EPage } from '@stencil/core/testing';

describe('headless-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-table></headless-table>');

    const element = await page.find('headless-table');
    expect(element).toHaveClass('hydrated');
  });
});
