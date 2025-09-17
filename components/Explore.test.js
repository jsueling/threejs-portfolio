import { render, screen, fireEvent } from '@testing-library/react';
import Explore from './Explore';

describe('Explore component', () => {
  it('renders the correct instructions', () => {
    render(<Explore setExplore={() => {}} dark={false} setDark={() => {}} />);
    
    expect(screen.getByText('Hold left click to rotate')).toBeInTheDocument();
    expect(screen.getByText('Hold right click to drag')).toBeInTheDocument();
    expect(screen.getByText('Scroll to zoom')).toBeInTheDocument();
  });

  it('calls setExplore when the close icon is clicked', () => {
    const setExploreMock = jest.fn();
    render(<Explore setExplore={setExploreMock} dark={false} setDark={() => {}} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(setExploreMock).toHaveBeenCalledTimes(1);
  });
});