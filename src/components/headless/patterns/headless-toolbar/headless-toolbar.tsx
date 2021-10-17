import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-toolbar',
  styleUrl: 'headless-toolbar.css',
  shadow: true,
})
export class HeadlessToolbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
