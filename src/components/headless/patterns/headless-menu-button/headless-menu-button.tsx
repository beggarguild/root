import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-menu-button',
  styleUrl: 'headless-menu-button.css',
  shadow: true,
})
export class HeadlessMenuButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
