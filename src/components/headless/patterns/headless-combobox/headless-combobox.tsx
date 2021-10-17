import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-combobox',
  styleUrl: 'headless-combobox.css',
  shadow: true,
})
export class HeadlessCombobox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
