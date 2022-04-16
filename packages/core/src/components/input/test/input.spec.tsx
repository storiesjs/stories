import { newSpecPage } from '@stencil/core/testing';

import { Input } from '../input';

describe('stories-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<stories-input></stories-input>`,
    });
    expect(page.root).toEqualHtml(`
     <stories-input size="medium" type="text" value="">
       <mock:shadow-root>
         <div class="form-control form-control-medium">
           <label aria-hidden="true" class="form-control-label" htmlfor="input-1" id="input-label-1">
             <slot name="label"></slot>
           </label>
           <div class="form-control-input">
             <div class="input input-empty input-medium">
               <span class="start">
                 <slot name="start"></slot>
               </span>
               <input aria-describedby="input-help-text-1" aria-invalid="false" aria-labelledby="input-label-1" aria-required="false" autocapitalize="off" autocomplete="off" autocorrect="off" class="input-control" placeholder="" type="text" value="">
               <span class="end">
                 <slot name="end"></slot>
               </span>
             </div>
           </div>
           <div aria-hidden="true" class="form-control-help-text" id="input-help-text-1">
             <slot name="help-text"></slot>
           </div>
         </div>
       </mock:shadow-root>
       <input class="aux-input" type="hidden" value="">
      </stories-input>
    `);
  });
});
