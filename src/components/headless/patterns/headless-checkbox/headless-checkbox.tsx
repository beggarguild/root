import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-checkbox',
  styleUrl: 'headless-checkbox.css',
  shadow: true,
})
export class HeadlessCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
