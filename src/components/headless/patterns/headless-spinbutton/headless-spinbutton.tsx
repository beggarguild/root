import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-spinbutton',
  styleUrl: 'headless-spinbutton.css',
  shadow: true,
})
export class HeadlessSpinbutton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
