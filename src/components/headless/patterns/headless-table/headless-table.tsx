import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-table',
  styleUrl: 'headless-table.css',
  shadow: true,
})
export class HeadlessTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
