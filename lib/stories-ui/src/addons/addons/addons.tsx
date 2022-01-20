// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h } from '@stencil/core';

@Component({
  tag: 'stories-addons',
  styleUrl: 'addons.scss',
  shadow: true,
})
export class Addons {

  render(): JSX.Element {
    return (
      // <stories-tabs>
      //   <stories-tab-bar>
      //     <slot name="button"/>
      //   </stories-tab-bar>
        <slot/>
      // </stories-tabs>
    );
  }

}

/*

<stories-tabs>
          <stories-tab-bar>
            <slot name="button"/>
          </stories-tab-bar>
          <slot/>
        </stories-tabs>

*/
