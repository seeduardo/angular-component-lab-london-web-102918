var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should display the info correctly', function() {
		var directive = element.all(by.css('contact-card'));

		expect(directive.get(0).getText()).toContain('NAME');
		expect(directive.get(0).getText()).toContain('EMAIL');
		expect(directive.get(0).getText()).toContain('PHONE');
		expect(directive.get(0).getText()).toContain('Bill Gates');
	})
});