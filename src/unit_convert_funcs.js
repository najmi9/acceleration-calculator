
let handleAccUnitChange = (newUnit, previousUnit) => {
	if (newUnit == previousUnit) {
		return 1;
	}
	const ms = { 'm/s²': 1, 'g': 9.807, 'ft/s²': 0.3048 };
	return ms[previousUnit] / ms[newUnit];
}

const handleMassUnitChange = (newUnit, previousUnit) => {
	if (newUnit == previousUnit) {
		return 1;
	}
	const kg = {
		'kg': 1, 'g':Math.pow(10, 3), 
		'mg': Math.pow(10, 6),'t': 1000,
		'oz':0.0283495, 'gr' :0.0000647989, 'dr':0.001771845 ,
		 'Ib': 1 / 2.046, 'stone': 6.35,
		'USton': 907.2, 'LongTon': 1016
	};

	return  kg[previousUnit] / kg[newUnit];
};    
const handleDistUnitChange = (newUnit, previousUnit) => {
	if (previousUnit == newUnit) {
		return 1;
	}
	const asUn = 149597870700;
	const psUn = 30857000000000000;
	const lyear = 9460700000000000;
	const m = {
		'm': 1, 'cm':0.01, 'inch':0.0254, 'mm':0.001 
		,'km': 1000, 'mile': 1609.3, 'ft': 0.3048, 'yd': 0.9144,
		'au': asUn, 'parsec': psUn, 'ly': lyear
	};

	return m[previousUnit] / m[newUnit];
};

const handleTimeUnitChange = (newUnit, previousUnit) => {
	if (previousUnit == newUnit) {
		return 1;
	}
		const sec = {
		'sec': 1, 'ms':0.001,'min': 60, 'hrs': 3600,
		'dys': 3600 * 24, 'week': 3600 * 7 * 24, 'month': 3600 * 24 * 30,
		'yrs': 3600 * 24 * 365
	}   
	return sec[previousUnit] / sec[newUnit];
};

const handleVeloUnitChange = (newUnit, previousUnit) => {
	
	if (previousUnit == newUnit) {
		return 1;
	}
	const ms = {
		'm/s': 1, 'knots':0.514444, 'km/h': 1000 / 3600, 'ft/s': 0.3048, 'mile/h': 1609.3 / 3600
		, 'c': c, 'km/s': 1000, 'mile/s': 1609.3
	}

	return ms[previousUnit] / ms[newUnit];
};

function handleForceUnitChange(newUnit, previousUnit) {
	if (newUnit == previousUnit) {
		return 1;
	}
	const N = {
				'N':1, 'KN':1000, 'MN':Math.pow(10,6), 'GN':Math.pow(10,9),
				'TN':Math.pow(10,12), 'pdl':0.138255, 'Ibf': 4.44822, 
				'dyn': 0.00001
			  }
	return N[previousUnit]/N[newUnit];
}
