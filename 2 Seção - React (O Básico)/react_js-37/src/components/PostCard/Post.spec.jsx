import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { PostCardPropsMock } from './mock';

const props = PostCardPropsMock;

// deve renderizar PostCard corretamente
describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);


    expect(screen.getByAltText(/title 1/)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument(3);
    expect(screen.getByText('body 1')).toBeInTheDocument(3);
  });

  // deve corresponder ao instantâneo(foto)
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

