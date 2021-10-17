import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-carousel',
  styleUrl: 'headless-carousel.css',
  shadow: true,
})
export class HeadlessCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
