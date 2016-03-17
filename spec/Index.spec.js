var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should display the info correctly', function() {
		var component = element.all(by.css('contact-card'));

		expect(component.get(0).getText()).toContain('NAME');
		expect(component.get(0).getText()).toContain('EMAIL');
		expect(component.get(0).getText()).toContain('PHONE');
		expect(component.get(0).getText()).toContain('Bill Gates');
	})
});