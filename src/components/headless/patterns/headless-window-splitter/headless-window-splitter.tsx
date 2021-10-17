import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-window-splitter',
  styleUrl: 'headless-window-splitter.css',
  shadow: true,
})
export class HeadlessWindowSplitter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
