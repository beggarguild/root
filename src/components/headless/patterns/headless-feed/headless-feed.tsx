import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-feed',
  styleUrl: 'headless-feed.css',
  shadow: true,
})
export class HeadlessFeed {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
