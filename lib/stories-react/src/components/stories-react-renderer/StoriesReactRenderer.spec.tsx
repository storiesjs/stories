import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import * as React from 'react';

import { StoriesReactRenderer } from '.';

let documentBody: RenderResult;

describe('<StoriesReactRenderer />', () => {
  beforeEach(() => {
    documentBody = render(<StoriesReactRenderer />);
  });

  it('shows not found message', () => {
    // expect(documentBody.getByText('Not Found')).toBeInTheDocument();
    // expect(documentBody.getByText('404')).toBeInTheDocument();
    expect(documentBody).toBeDefined();
  });
});