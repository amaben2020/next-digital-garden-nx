import { render } from '@testing-library/react';

import Article from './[slug]';

describe('Article', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Article />);
    expect(baseElement).toBeTruthy();
  });
});
