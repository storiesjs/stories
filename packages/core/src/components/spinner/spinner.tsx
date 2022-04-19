import { Component, h } from '@stencil/core';

@Component({
  tag: 'stories-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  render() {
    return <span class="spinner" aria-busy="true" aria-live="polite" />;
  }
}
