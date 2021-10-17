import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-alert',
  styleUrl: 'headless-alert.css',
  shadow: true,
})
export class HeadlessAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
