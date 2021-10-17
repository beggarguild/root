import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-dialog',
  styleUrl: 'headless-dialog.css',
  shadow: true,
})
export class HeadlessDialog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
