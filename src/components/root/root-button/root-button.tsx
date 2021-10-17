import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'root-button',
  styleUrl: 'root-button.css',
  shadow: true,
})
export class RootButton {
  render() {
    return (
      <Host>
        <button type="button">
          <slot name="before"></slot>
          <slot></slot>
          <slot name="after"></slot>
        </button>
      </Host>
    );
  }
}
