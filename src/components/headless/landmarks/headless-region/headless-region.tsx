import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-region',
  styleUrl: 'headless-region.css',
  shadow: true,
})
export class HeadlessRegion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
