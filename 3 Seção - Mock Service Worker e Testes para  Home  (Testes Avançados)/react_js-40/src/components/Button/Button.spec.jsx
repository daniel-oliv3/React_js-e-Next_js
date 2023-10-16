const { render, screen, fireEvent } = require('@testing-library/react');

import { Button } from '.';

//deve renderizar o botão com o texto
describe('<Button/>', () => {
  it('should call function on button click ', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  // deve ser desabilitado quando desabilitado é verdadeiro
  it('should be disabled whe disabled is true ', () => {
    const fn = jest.fn();
    // render(<Button text="Load more" disabled={true} />);
    render(<Button text="Load more" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  // deve ser ativado quando desativado é falso
  it('should be enabled whe disabled is false ', () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  // deve corresponder ao instantâneo(foto)
  it('should match snapshot ', () => {
    const { container } = render(<Button text="Load more" disabled={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

