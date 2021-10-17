import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-navigation',
  styleUrl: 'headless-navigation.css',
  shadow: true,
})
export class HeadlessNavigation {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
