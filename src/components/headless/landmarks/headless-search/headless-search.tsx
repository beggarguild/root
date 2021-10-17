import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-search',
  styleUrl: 'headless-search.css',
  shadow: true,
})
export class HeadlessSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
