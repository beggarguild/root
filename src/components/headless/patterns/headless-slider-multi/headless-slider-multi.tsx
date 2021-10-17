import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-slider-multi',
  styleUrl: 'headless-slider-multi.css',
  shadow: true,
})
export class HeadlessSliderMulti {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
