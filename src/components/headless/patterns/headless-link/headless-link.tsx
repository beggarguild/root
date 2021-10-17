import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-link',
  styleUrl: 'headless-link.css',
  shadow: true,
})
export class HeadlessLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
