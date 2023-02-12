import { render } from '@testing-library/react';

import MyNewComponent from './my-new-component';

describe('MyNewComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyNewComponent />);
    expect(baseElement).toBeTruthy();
  });
});
