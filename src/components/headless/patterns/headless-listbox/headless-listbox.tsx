import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-listbox',
  styleUrl: 'headless-listbox.css',
  shadow: true,
})
export class HeadlessListbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
