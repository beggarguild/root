import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-grids',
  styleUrl: 'headless-grids.css',
  shadow: true,
})
export class HeadlessGrids {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
