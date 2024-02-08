import '@testing-library/jest-dom';

import Auth from '@/app/page';
import { render } from '@testing-library/react';

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    useFormState: () => [{ errors: { email: null } }, null],
    useFormStatus: () => [null, null],
}));

describe('Hello World!', () => {
    it('Hello World!', () => {
        render(<Auth />);
    });
});
