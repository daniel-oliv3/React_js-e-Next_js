import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

// deve ter um valor de searchValue
describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {

  });

  // deve chamar a função handleChange em cada tecla pressionada
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  // deve corresponder ao instantâneo(snapshot)
  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<TextInput handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});



