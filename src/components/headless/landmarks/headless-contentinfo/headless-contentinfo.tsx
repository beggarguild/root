import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-contentinfo',
  styleUrl: 'headless-contentinfo.css',
  shadow: true,
})
export class HeadlessContentinfo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
