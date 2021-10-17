import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-button',
  styleUrl: 'headless-button.css',
  shadow: true,
})
export class HeadlessButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
