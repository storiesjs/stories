import { Component, h } from '@stencil/core';

@Component({
  tag: 'str-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  render() {
    return <span class="spinner" aria-busy="true" aria-live="polite" />;
  }
}
