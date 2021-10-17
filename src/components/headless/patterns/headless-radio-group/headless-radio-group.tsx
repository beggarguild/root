import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-radio-group',
  styleUrl: 'headless-radio-group.css',
  shadow: true,
})
export class HeadlessRadioGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
