import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-alert-dialog',
  styleUrl: 'headless-alert-dialog.css',
  shadow: true,
})
export class HeadlessAlertDialog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
