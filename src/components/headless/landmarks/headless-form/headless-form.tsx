import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-form',
  styleUrl: 'headless-form.css',
  shadow: true,
})
export class HeadlessForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
