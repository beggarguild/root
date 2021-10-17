import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-main',
  styleUrl: 'headless-main.css',
  shadow: true,
})
export class HeadlessMain {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
