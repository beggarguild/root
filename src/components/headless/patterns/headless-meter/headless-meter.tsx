import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-meter',
  styleUrl: 'headless-meter.css',
  shadow: true,
})
export class HeadlessMeter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
