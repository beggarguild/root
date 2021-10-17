import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-complementary',
  styleUrl: 'headless-complementary.css',
  shadow: true,
})
export class HeadlessComplementary {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
