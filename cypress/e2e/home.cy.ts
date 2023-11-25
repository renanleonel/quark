describe('Hello World', () => {
	it('should find Hello World!', () => {
		cy.visit('http://localhost:3000/');

		cy.get('main').contains('Hello World!');
	});
});
