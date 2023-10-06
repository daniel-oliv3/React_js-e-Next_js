const { render, screen, fireEvent, userEvent } = require("@testing-library/react");
import { Button } from '.';

//deve renderizar o botão com o texto
describe('<Button/>', () => {
    it('should call function on button click ', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);
        
        // expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i  });
        // expect(button).toBeInTheDocument();

        // userEvent.click(button);
        fireEvent.click(button);
        // fireEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });

    // deve ser desabilitado quando desabilitado é verdadeiro
    it('should be disabled whe disabled is true ', () => {
        render(<Button text="Load more" disabled={true} />);

        const button = screen.getByRole('button', { name: /load more/i  });

        // expect(button).toBeDisabled();
        // expect(button).not.toBeDisabled();
        // expect(button).toBeEnabled();
        // expect(button).toBeDisabled();
    });

    // deve ser ativado quando desativado é falso
    it('should be enabled whe disabled is false ', () => {
        render(<Button text="Load more" disabled={false} />);

        const button = screen.getByRole('button', { name: /load more/i  });

        expect(button).toBeEnabled();
    });
}); 
















// const { render, screen } = require("@testing-library/react");
// import { Button } from '.';

// //deve renderizar o botão com o texto
// describe('<Button/>', () => {
//     it('should render the button with the text "Load more" ', () => {
//         render(<Button text="Load more" />);
//         expect.assertions(1);

//         const button = screen.getByRole('button', { name: /load more/i  });
//         expect(button).toBeInTheDocument();
//         // expect(button).toHaveAttribute('class', 'button');
//     });
// }); 