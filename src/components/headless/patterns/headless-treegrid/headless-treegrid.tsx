import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-treegrid',
  styleUrl: 'headless-treegrid.css',
  shadow: true,
})
export class HeadlessTreegrid {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
