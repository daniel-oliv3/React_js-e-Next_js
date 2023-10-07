import { render, screen } from '@testing-library/react';
import { PostCard } from '.'; 
import { PostCardPropsMock } from './mock';


const props = PostCardPropsMock

// deve renderizar PostCard corretamente
describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        // expect(screen.getByRole('img')).toBeInTheDocument();
        // expect(screen.getByRole('img')).not.toBeInTheDocument();
        // expect(screen.getByRole('img', { name: /props/i })).toBeInTheDocument();
        // expect(screen.getByRole('img', { name: 'title 1' })).toBeInTheDocument();
        // expect(screen.getByRole('img', { name: /title 1/i })).toBeInTheDocument();
        // expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', props.cover);
        expect(screen.getByAltText(/title 1/)).toHaveAttribute('src', 'img/img.png');
        // expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.png');


        // expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();

        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    // deve corresponder ao instantâneo(foto)
    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});









// ----------------------------------------------------------------------------------


// import { render } from '@testing-library/react';
// import { PostCard } from '.'; 

// //mock de dados
// const mock = {
//     title: 'title1',
//     body: 'body1',
//     id: 1,
//     cover: 'img/img.png'
// }


// // deve renderizar PostCard corretamente
// describe('<PostCard />', () => {
//     it('should render PostCard correctly', () => {
//         const { debug } = render(<PostCard {...mock} />);

//         debug();
//     });
// });