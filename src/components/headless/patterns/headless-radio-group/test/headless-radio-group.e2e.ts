import { newE2EPage } from '@stencil/core/testing';

describe('headless-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headless-radio-group></headless-radio-group>');

    const element = await page.find('headless-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
