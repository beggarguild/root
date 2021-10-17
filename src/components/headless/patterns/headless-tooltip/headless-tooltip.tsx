import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-tooltip',
  styleUrl: 'headless-tooltip.css',
  shadow: true,
})
export class HeadlessTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
