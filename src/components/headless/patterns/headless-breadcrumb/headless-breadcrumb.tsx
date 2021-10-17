import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'headless-breadcrumb',
  styleUrl: 'headless-breadcrumb.css',
  shadow: true,
})
export class HeadlessBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
