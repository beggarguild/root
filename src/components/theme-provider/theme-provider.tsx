import { Component, Host, h } from '@stencil/core';
import { css as createClassName } from '@emotion/css';
import { css as transformStyleObject } from '@theme-ui/css';
import * as scales from '../../theme/scales';
import * as styles from '../../theme/styles';

/** @type {import("@theme-ui/css").Theme} */

@Component({
  tag: 'theme-provider',
  styleUrl: 'theme-provider.css',
  shadow: true,
})
export class ThemeProvider {
  componentWillRender() {
    const transformedStyles = transformStyleObject({ ...styles })({ ...scales });
    const root = document.getElementById('root');
    root.classList.add(createClassName(transformedStyles));
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
