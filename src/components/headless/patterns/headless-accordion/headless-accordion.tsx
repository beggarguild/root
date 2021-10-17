import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-accordion',
  styleUrl: 'headless-accordion.css',
  shadow: true,
})
export class HeadlessAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
