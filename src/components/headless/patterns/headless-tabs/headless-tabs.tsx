import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-tabs',
  styleUrl: 'headless-tabs.css',
  shadow: true,
})
export class HeadlessTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
