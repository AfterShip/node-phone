'use strict';

require('should');
var phone = require('../lib/index');

/* suggest 10 test case for each country, except USA
	Test Case, for non-USA

	valid +phone, null
	valid +phone, valid iso
	valid +phone, invalid iso
	valid +phone, valid name
	valid +phone, invalid name

	invalid +phone, null
	invalid +phone, valid iso
	invalid +phone, invalid iso
	invalid +phone, valid name
	invalid +phone, invalid name

	valid phone, null
	valid phone, valid iso
	valid phone, invalid iso
	valid phone, valid name
	valid phone, invalid name

	invalid phone, null
	invalid phone, valid iso
	invalid phone, invalid iso
	invalid phone, valid name
	invalid phone, invalid name
*/

describe('Testing input parameter Phone', function () {
	describe('Test 1', function () {
		var number = '(852) 569-8900';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '+1 (817) 569-8900';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+852 6569-8900';
		var result = {
			phone_number: '+85265698900',
			phone_beautified: '+852 6569-8900',
			country: '852',
			area_code: '',
			number: '65698900',
			iso3: 'HKG',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number).should.eql(result);
		});
	});

	describe('Test 4', function () {
		var number = '+852 6569-8900';
		var country = 'HKG';
		var result = {
			phone_number: '+85265698900',
			phone_beautified: '+852 6569-8900',
			country: '852',
			area_code: '',
			number: '65698900',
			iso3: 'HKG',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing USA Phone', function () {
	describe('Test 1', function () {
		var number = '(852) 569-8900';
		var country = '';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '+1 (817) 569-8900';
		var country = '';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};

		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+1 (817) 569-8900';
		var country = null;
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 4', function () {
		var number = '2121234567';
		var country = '';
		var result = {
			phone_number: '+12121234567',
			phone_beautified: '+1(212)1234-567',
			country: '1',
			area_code: '212',
			number: '1234567',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function () {
		var number = '22-6569-8900';
		var country = '';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 6', function () {
		var number = '22-5569-8900';
		var country = '';
		var result = {
			phone_number: '+12255698900',
			phone_beautified: '+1(225)5698-900',
			country: '1',
			area_code: '225',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 7', function () {
		var number = '+1 (817) 569-8900';
		var country = 'United States';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 8', function () {
		var number = '+1 (817) 569-8900';
		var country = 'United States ';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 9', function () {
		var number = '+1 (817) 569-8900';
		var country = 'USA';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};

		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 10', function () {
		var number = '+1 (817) 569-8900';
		var country = 'USA ';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 11', function () {
		var number = '+1 (817) 569-8900';
		var country = 'US';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 12', function () {
		var number = '+1 (817) 569-8900';
		var country = ' US';
		var result = {
			phone_number: '+18175698900',
			phone_beautified: '+1(817)5698-900',
			country: '1',
			area_code: '817',
			number: '5698900',
			iso3: 'USA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 13', function () {
		var number = '+1 (817) 569-8900';
		var country = 'HKG';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing +1 but NOT in USA', function () {
	describe('+1 340  United States Virgin Islands', function () {
		var number = '+1 340 1234 567';
		var country = 'VIR';
		var result = {
			phone_number: '+13401234567',
			phone_beautified: '+1 3401-2345-67',
			country: '1',
			area_code: '',
			number: '3401234567',
			iso3: 'VIR',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 670 Northern Mariana Islands', function () {
		var number = '+1 670 1234 567';
		var country = 'MNP';
		var result = {
			phone_number: '+16701234567',
			phone_beautified: '+1 6701-2345-67',
			country: '1',
			area_code: '',
			number: '6701234567',
			iso3: 'MNP',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 671 Guam', function () {
		var number = '+1 671 1234 567';
		var country = 'GUM';
		var result = {
			phone_number: '+16711234567',
			phone_beautified: '+1 6711-2345-67',
			country: '1',
			area_code: '',
			number: '6711234567',
			iso3: 'GUM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		var number = '+1 684 1234 567';
		var country = 'ASM';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		var number = '+1 684 2584 567';
		var country = 'ASM';
		var result = {
			phone_number: '+16842584567',
			phone_beautified: '+1 6842-5845-67',
			country: '1',
			area_code: '',
			number: '6842584567',
			iso3: 'ASM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		var number = '+1 684 7334 567';
		var country = 'ASM';
		var result = {
			phone_number: '+16847334567',
			phone_beautified: '+1 6847-3345-67',
			country: '1',
			area_code: '',
			number: '6847334567',
			iso3: 'ASM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function () {
		var number = '+1 787 1234 567';
		var country = 'PRI';
		var result = {
			phone_number: '+17871234567',
			phone_beautified: '+1 7871-2345-67',
			country: '1',
			area_code: '',
			number: '7871234567',
			iso3: 'PRI',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function () {
		var number = '+1 939 1234 567';
		var country = 'PRI';
		var result = {
			phone_number: '+19391234567',
			phone_beautified: '+1 9391-2345-67',
			country: '1',
			area_code: '',
			number: '9391234567',
			iso3: 'PRI',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 242 Bahamas', function () {
		var number = '+1 242 1234 567';
		var country = 'BHS';
		var result = {
			phone_number: '+12421234567',
			phone_beautified: '+1 2421-2345-67',
			country: '1',
			area_code: '',
			number: '2421234567',
			iso3: 'BHS',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('+1 246 Barbados', function () {
		var number = '+1 246 1234 567';
		var country = 'BRB';
		var result = {
			phone_number: '+12461234567',
			phone_beautified: '+1 2461-2345-67',
			country: '1',
			area_code: '',
			number: '2461234567',
			iso3: 'BRB',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		var number = '+1 264 1234 567';
		var country = 'AIA';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		var number = '+1 264 5234 567';
		var country = 'AIA';
		var result = {
			phone_number: '+12645234567',
			phone_beautified: '+1 2645-2345-67',
			country: '1',
			area_code: '',
			number: '2645234567',
			iso3: 'AIA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		var number = '+1 264 7234 567';
		var country = 'AIA';
		var result = {
			phone_number: '+12647234567',
			phone_beautified: '+1 2647-2345-67',
			country: '1',
			area_code: '',
			number: '2647234567',
			iso3: 'AIA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function () {
		var number = '+1 268 1234 567';
		var country = 'ATG';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function () {
		var number = '+1 268 7234 567';
		var country = 'ATG';
		var result = {
			phone_number: '+12687234567',
			phone_beautified: '+1 2687-2345-67',
			country: '1',
			area_code: '',
			number: '2687234567',
			iso3: 'ATG',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 284 British Virgin Islands', function () {
		var number = '+1 284 1234 567';
		var country = 'VGB';
		var result = {
			phone_number: '+12841234567',
			phone_beautified: '+1 2841-2345-67',
			country: '1',
			area_code: '',
			number: '2841234567',
			iso3: 'VGB',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 345 Cayman Islands', function () {
		var number = '+1 345 1234 567';
		var country = 'CYM';
		var result = {
			phone_number: '+13451234567',
			phone_beautified: '+1 3451-2345-67',
			country: '1',
			area_code: '',
			number: '3451234567',
			iso3: 'CYM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		var number = '+1 441 1234 567';
		var country = 'BMU';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 441 Bermuda', function () {
		var number = '+1 441 3234 567';
		var country = 'BMU';
		var result = {
			phone_number: '+14413234567',
			phone_beautified: '+1 4413-2345-67',
			country: '1',
			area_code: '',
			number: '4413234567',
			iso3: 'BMU',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		var number = '+1 441 5234 567';
		var country = 'BMU';
		var result = {
			phone_number: '+14415234567',
			phone_beautified: '+1 4415-2345-67',
			country: '1',
			area_code: '',
			number: '4415234567',
			iso3: 'BMU',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		var number = '+1 441 7234 567';
		var country = 'BMU';
		var result = {
			phone_number: '+14417234567',
			phone_beautified: '+1 4417-2345-67',
			country: '1',
			area_code: '',
			number: '4417234567',
			iso3: 'BMU',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 473 Grenada', function () {
		var number = '+1 473 1234 567';
		var country = 'GRD';
		var result = {
			phone_number: '+14731234567',
			phone_beautified: '+1 4731-2345-67',
			country: '1',
			area_code: '',
			number: '4731234567',
			iso3: 'GRD',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 649 Turks and Caicos Islands', function () {
		var number = '+1 649 1234 567';
		var country = 'TCA';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 649 Turks and Caicos Islands', function () {
		var number = '+1 649 2234 567';
		var country = 'TCA';
		var result = {
			phone_number: '+16492234567',
			phone_beautified: '+1 6492-2345-67',
			country: '1',
			area_code: '',
			number: '6492234567',
			iso3: 'TCA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 664 Montserrat', function () {
		var number = '+1 664 1234 567';
		var country = 'MSR';
		var result = {
			phone_number: '+16641234567',
			phone_beautified: '+1 6641-2345-67',
			country: '1',
			area_code: '',
			number: '6641234567',
			iso3: 'MSR',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 721 Sint Maarten', function () {
		var number = '+1 721 1234 567';
		var country = 'SXM';
		var result = {
			phone_number: '+17211234567',
			phone_beautified: '+1 7211-2345-67',
			country: '1',
			area_code: '',
			number: '7211234567',
			iso3: 'SXM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 758 Saint Lucia', function () {
		var number = '+1 758 1234 567';
		var country = 'LCA';
		var result = {
			phone_number: '+17581234567',
			phone_beautified: '+1 7581-2345-67',
			country: '1',
			area_code: '',
			number: '7581234567',
			iso3: 'LCA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 767 Dominica', function () {
		var number = '+1 767 1234 567';
		var country = 'DMA';
		var result = {
			phone_number: '+17671234567',
			phone_beautified: '+1 7671-2345-67',
			country: '1',
			area_code: '',
			number: '7671234567',
			iso3: 'DMA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 784 Saint Vincent and the Grenadines', function () {
		var number = '+1 784 1234 567';
		var country = 'VCT';
		var result = {
			phone_number: '+17841234567',
			phone_beautified: '+1 7841-2345-67',
			country: '1',
			area_code: '',
			number: '7841234567',
			iso3: 'VCT',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		var number = '+1 809 1234 567';
		var country = 'DOM';
		var result = {
			phone_number: '+18091234567',
			phone_beautified: '+1 8091-2345-67',
			country: '1',
			area_code: '',
			number: '8091234567',
			iso3: 'DOM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		var number = '+1 829 1234 567';
		var country = 'DOM';
		var result = {
			phone_number: '+18291234567',
			phone_beautified: '+1 8291-2345-67',
			country: '1',
			area_code: '',
			number: '8291234567',
			iso3: 'DOM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		var number = '+1 849 1234 567';
		var country = 'DOM';
		var result = {
			phone_number: '+18491234567',
			phone_beautified: '+1 8491-2345-67',
			country: '1',
			area_code: '',
			number: '8491234567',
			iso3: 'DOM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 868 Trinidad and Tobago', function () {
		var number = '+1 868 1234 567';
		var country = 'TTO';
		var result = {
			phone_number: '+18681234567',
			phone_beautified: '+1 8681-2345-67',
			country: '1',
			area_code: '',
			number: '8681234567',
			iso3: 'TTO',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 869 Saint Kitts and Nevis', function () {
		var number = '+1 869 1234 567';
		var country = 'KNA';
		var result = {
			phone_number: '+18691234567',
			phone_beautified: '+1 8691-2345-67',
			country: '1',
			area_code: '',
			number: '8691234567',
			iso3: 'KNA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 876 Jamaica', function () {
		var number = '+1 876 1234 567';
		var country = 'JAM';
		var result = {
			phone_number: '+18761234567',
			phone_beautified: '+1 8761-2345-67',
			country: '1',
			area_code: '',
			number: '8761234567',
			iso3: 'JAM',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing MEX Phone', function () {
	//  valid +phone, null
	//  valid +phone, valid iso
	//  valid +phone, invalid iso
	//  valid +phone, valid name
	//  valid +phone, invalid name

	describe('Test 1', function () {
		var number = '+52 1 762 100 9517';
		var country = null;
		var result = {
			phone_number: '+5217621009517',
			phone_beautified: '+52 1762-1009-517',
			country: '52',
			area_code: '',
			number: '17621009517',
			iso3: 'MEX',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function () {
		var number = '+52 1 762 100 9517';
		var country = 'MEX';
		var result = {
			phone_number: '+5217621009517',
			phone_beautified: '+52 1762-1009-517',
			country: '52',
			area_code: '',
			number: '17621009517',
			iso3: 'MEX',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 3', function () {
		var number = '+52 1 762 100 9517';
		var country = 'USA';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 4', function () {
		var number = '+52 1 762 100 9517';
		var country = 'Mexico';
		var result = {
			phone_number: '+5217621009517',
			phone_beautified: '+52 1762-1009-517',
			country: '52',
			area_code: '',
			number: '17621009517',
			iso3: 'MEX',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 5', function () {
		var number = '+52 1 762 100 9517';
		var country = 'United States';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	//  invalid +phone, null
	//  invalid +phone, valid iso
	//  invalid +phone, invalid iso
	//  invalid +phone, valid name
	//  invalid +phone, invalid name


	describe('Test 6', function () {
		var number = '+52 62 100 9517';
		var country = null;
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 7', function () {
		var number = '+52 62 100 9517';
		var country = 'MEX';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 8', function () {
		var number = '+52 62 100 9517';
		var country = 'USA';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 9', function () {
		var number = '+52 62 100 9517';
		var country = 'Mexico';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 10', function () {
		var number = '+52 62 100 9517';
		var country = 'United States';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	//  valid phone, null
	//  valid phone, valid iso
	//  valid phone, invalid iso
	//  valid phone, valid name
	//  valid phone, invalid name


	describe('Test 11', function () {
		var number = '52762 100 9517';
		var country = null;
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 12', function () {
		var number = '762 100 9517';
		var country = 'MEX';
		var result = {
			phone_number: '+527621009517',
			phone_beautified: '+52 7621-0095-17',
			country: '52',
			area_code: '',
			number: '7621009517',
			iso3: 'MEX',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 13', function () {
		var number = '762 100 9517';
		var country = 'MEXINVALID';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 14', function () {
		var number = '762 100 9517';
		var country = 'Mexico';
		var result = {
			phone_number: '+527621009517',
			phone_beautified: '+52 7621-0095-17',
			country: '52',
			area_code: '',
			number: '7621009517',
			iso3: 'MEX',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 15', function () {
		var number = '762 100 9517';
		var country = 'Mexico Invalid';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing HKG Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '6123-6123';
		var country = 'HKG';
		var result = {
			phone_number: '+85261236123',
			phone_beautified: '+852 6123-6123',
			country: '852',
			area_code: '',
			number: '61236123',
			iso3: 'HKG',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing BRA Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '+55 11 9 6123 1234';
		var country = 'BRA';
		var result = {
			phone_number: '+5511961231234',
			phone_beautified: '+55 1196-1231-234',
			country: '55',
			area_code: '',
			number: '11961231234',
			iso3: 'BRA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function () {
		var number = '+55 11 6123 1234'; // as 9 is missing
		var country = 'BRA';
		var result = {
			'error': 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+55 11 8 6123 1234'; // prefix must be 9 after area code
		var country = 'BRA';
		var result = {
			'error': 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function () {
		var number = '+55 69 8 6123 1234'; // we don't check prefix for area code 69
		var country = 'BRA';
		var result = {
			phone_number: '+5569861231234',
			phone_beautified: '+55 6986-1231-234',
			country: '55',
			area_code: '',
			number: '69861231234',
			iso3: 'BRA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing PRI Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '+1-787-672-9999';
		var country = 'PRI';
		var result = {
			phone_number: '+17876729999',
			phone_beautified: '+1 7876-7299-99',
			country: '1',
			area_code: '',
			number: '7876729999',
			iso3: 'PRI',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '17876729999';
		var country = 'PRI';
		var result = {
			phone_number: '+17876729999',
			phone_beautified: '+1 7876-7299-99',
			country: '1',
			area_code: '',
			number: '7876729999',
			iso3: 'PRI',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '7876729999';
		var country = 'PRI';
		var result = {
			phone_number: '+17876729999',
			phone_beautified: '+1 7876-7299-99',
			country: '1',
			area_code: '',
			number: '7876729999',
			iso3: 'PRI',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});

// input --> output
// 89234567890, RUS --> +79234567890, RUS
// +79234567890, RUS --> +79234567890, RUS
// +79234567890  ---> +79234567890, RUS
// +70234567890, RUS  ---> invalid
// 9234567890, RUS  ---> +79234567890, RUS


describe('Testing RUS Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '89234567890'; // remove the 8, treat it as 9234567890
		var country = 'RUS';
		var result = {
			phone_number: '+79234567890',
			phone_beautified: '+7 9234-5678-90',
			country: '7',
			area_code: '',
			number: '9234567890',
			iso3: 'RUS',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '+79234567890';
		var country = 'RUS';
		var result = {
			phone_number: '+79234567890',
			phone_beautified: '+7 9234-5678-90',
			country: '7',
			area_code: '',
			number: '9234567890',
			iso3: 'RUS',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+79234567890';
		var country = '';
		var result = {
			phone_number: '+79234567890',
			phone_beautified: '+7 9234-5678-90',
			country: '7',
			area_code: '',
			number: '9234567890',
			iso3: 'RUS',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function () {
		var number = '+70234567890';
		var country = 'RUS';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function () {
		var number = '+79234567890';
		var country = 'USA';
		var result = {
			error: 'Invalid phone number'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing THA Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '0812345678'; // remove the leading 0
		var country = 'THA';
		var result = {
			phone_number: '+66812345678',
			phone_beautified: '+66 8123-4567-8',
			country: '66',
			area_code: '',
			number: '812345678',
			iso3: 'THA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '0912345678'; // remove the leading 0
		var country = 'THA';
		var result = {
			phone_number: '+66912345678',
			phone_beautified: '+66 9123-4567-8',
			country: '66',
			area_code: '',
			number: '912345678',
			iso3: 'THA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '812345678';
		var country = 'THA';
		var result = {
			phone_number: '+66812345678',
			phone_beautified: '+66 8123-4567-8',
			country: '66',
			area_code: '',
			number: '812345678',
			iso3: 'THA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing TZA Phone Quick Test', function () {
	describe('Test 1', function () {
		var number = '0714795861'; // remove the leading 0
		var country = 'TZA';
		var result = {
			phone_number: '+255714795861',
			phone_beautified: '+255 7147-9586-1',
			country: '255',
			area_code: '',
			number: '714795861',
			iso3: 'TZA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '0684795861'; // remove the leading 0
		var country = 'TZA';
		var result = {
			phone_number: '+255684795861',
			phone_beautified: '+255 6847-9586-1',
			country: '255',
			area_code: '',
			number: '684795861',
			iso3: 'TZA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '714795861';
		var country = 'TZA';
		var result = {
			phone_number: '+255714795861',
			phone_beautified: '+255 7147-9586-1',
			country: '255',
			area_code: '',
			number: '714795861',
			iso3: 'TZA',
			type: 'm'
		};
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing SWE Phone Quick Test', function () {
	var country3 = 'SWE';
	var country2 = 'SE';
	var result = {
		phone_number: '+46709771337',
		phone_beautified: '+46 7097-7133-7',
		country: '46',
		area_code: '',
		number: '709771337',
		iso3: 'SWE',
		type: 'm'
	};

	describe('Test 1', function () {
		var number = '0709771337'; // remove the leading 0
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '709771337';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '0709 - 77 13 37';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test long "virtual" number', function () {
		var number = '467090322880009';
		var expected = {
			phone_number: '+467090322880009',
			phone_beautified: '+46 7090-3228-8000-9',
			country: '46',
			area_code: '',
			number: '7090322880009',
			iso3: 'SWE',
			type: 'm'
		};
		it('returns ' + JSON.stringify(expected), function () {
			phone(number, country2).should.eql(expected);
			phone(number, country3).should.eql(expected);
		});
	});

	/** Fails since the middle 0 is not stripped
	describe('Test 4', function () {
		var number = '+46 (0) 709 - 77 13 37';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country).should.eql(result);
		});
	});*/
});

describe('Testing FIN Phone Quick Test', function () {
	var country3 = 'FIN';
	var country2 = 'FI';
	var result = {
		phone_number: '+358401111111',
		phone_beautified: '+358 4011-1111-1',
		country: '358',
		area_code: '',
		number: '401111111',
		iso3: 'FIN',
		type: 'm'
	};

	describe('Test 1', function () {
		var number = '0401111111';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '358401111111';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+35 840 111 1111';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});
});

describe('Testing DNK Phone Quick Test', function () {
	var country3 = 'DNK';
	var country2 = 'DK';
	var result = {
		phone_number: '+4528199871',
		phone_beautified: '+45 2819-9871',
		country: '45',
		area_code: '',
		number: '28199871',
		iso3: 'DNK',
		type: 'm'
	};

	describe('Test 1', function () {
		var number = '028199871';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '4528199871';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+45 281 99 871';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});
});

describe('Testing NOR Phone Quick Test', function () {
	var country3 = 'NOR';
	var country2 = 'NO';
	var result = {
		phone_number: '+4797134809',
		phone_beautified: '+47 9713-4809',
		country: '47',
		area_code: '',
		number: '97134809',
		iso3: 'NOR',
		type: 'm'
	};

	describe('Test 1', function () {
		var number = '097134809';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 2', function () {
		var number = '+4797134809';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});

	describe('Test 3', function () {
		var number = '+47 97-134809';
		it('returns ' + JSON.stringify(result), function () {
			phone(number, country2).should.eql(result);
			phone(number, country3).should.eql(result);
		});
	});
});
