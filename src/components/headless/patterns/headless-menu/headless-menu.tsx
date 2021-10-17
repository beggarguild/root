import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-menu',
  styleUrl: 'headless-menu.css',
  shadow: true,
})
export class HeadlessMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
