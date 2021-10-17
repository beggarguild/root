import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-slider',
  styleUrl: 'headless-slider.css',
  shadow: true,
})
export class HeadlessSlider {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
