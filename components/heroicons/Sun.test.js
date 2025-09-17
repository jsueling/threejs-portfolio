import { render } from '@testing-library/react';
import Sun from './Sun';

describe('Sun icon', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Sun />);
    expect(asFragment()).toMatchSnapshot();
  });
});