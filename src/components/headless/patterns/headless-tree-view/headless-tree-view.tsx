import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-tree-view',
  styleUrl: 'headless-tree-view.css',
  shadow: true,
})
export class HeadlessTreeView {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
