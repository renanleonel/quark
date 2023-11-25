import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Hello World!', () => {
	it('Hello World!', () => {
		render(<Home />);
		expect(screen.getByText('Hello World!')).toBeInTheDocument();
	});
});
