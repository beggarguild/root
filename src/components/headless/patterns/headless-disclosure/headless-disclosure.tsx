import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-disclosure',
  styleUrl: 'headless-disclosure.css',
  shadow: true,
})
export class HeadlessDisclosure {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
