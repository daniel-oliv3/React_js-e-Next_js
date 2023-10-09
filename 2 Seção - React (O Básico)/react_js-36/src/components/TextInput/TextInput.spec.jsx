import { render, screen, userEvent } from '@testing-library/react';

import { TextInput } from '.';


// deve ter um valor de searchValue
describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'testando'} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        // expect(input).toBeInTheDocument();
        
        expect(input.value).toBe('testando');

    });

    // deve chamar a função handleChange em cada tecla pressionada
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/type your search/i);

        const value = 'o valor';

        userEvent.type(input, value);
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });


    // deve corresponder ao instantâneo(snapshot)
    it('should match snapshot', () => {
        const fn = jest.fn();

        const { container } = render(<TextInput handleChange={fn} />);
        expect(container).toMatchSnapshot();
    });
}); 




























// import { render, screen } from '@testing-library/react';

// import { TextInput } from '.';


// // deve chamar a função handleChange em cada tecla pressionada
// describe('<TextInput />', () => {
//     it('should call handleChange function on each key pressed', () => {
//         const fn = jest.fn();

//         const {debug} = render(<TextInput handleChange={fn} searchValue={'testando'} />);

//         debug();
//     });

// }); 












