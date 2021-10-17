import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-banner',
  styleUrl: 'headless-banner.css',
  shadow: true,
})
export class HeadlessBanner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
