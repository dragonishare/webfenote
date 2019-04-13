// var paragraph = 'born 15-11-2003 (mother Spot): white Fang';
// var paragraph1 = 'born 20/09/2004 (mother Yellow Bess): Doctor Hobbles the 2nd, Noog';
function startsWith(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
}

function catNames(paragraph) {
	var colon = paragraph.indexOf(':');
	return paragraph.slice(colon + 2).split(', ');
}

/* function addToSet(set, values) {
	for (var i = 0; i < values.length; i++) {
		set[values[i]] = true;
	}
}

function removeFromSet(set, values) {
	for (var i = 0; i < values.length; i++) {
		delete set[values[i]];
	}
} */

function catRecord(name, birthdate, mother) {
	return {name: name, birth: birthdate, mother: mother};
}

function addCats(set, names, birthdate, mother) {
	for (var i = 0; i < names.length; i++) {
		set[names[i]] = catRecord(names[i], birthdate, mother);
	}
}

function deadCats(set, names, deathdate) {
	for (var i = 0; i < names.length; i++) {
		set[names[i]].death = deathdate
	}
}

function extractMother(paragraph) {
	var start = paragraph.indexOf('(mother ') + '(mother '.length;
	var end = paragraph.indexOf(')');
	// console.log(paragraph.slice(start, end))
	return paragraph.slice(start, end);
}

extractMother('born 15/11/2003 (mother Spot): White Fang');
function extractDate(paragraph) {
	function numberAt(start, length) {
		return Number(paragraph.slice(start, start + length));
	}
	// console.log(new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2)));
	return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
}

function formatDate(date) {
	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function catInfo(data, name) {
	console.log('data: ', data,name);
	var cat = data[name];
	console.log('catinfo: ', cat)
	if (cat == undefined) {
		return 'No cat by the name of ' + name + ' is known.';
	}
	var message = name + ', born ' + formatDate(cat.birth) + ' from mother ' + cat.mother;

	if ('death' in cat) {
		message += ', died ' + formatDate(cat.death);
	}
	console.log(message + '.')
	return message + '.';
}

function oldestCat(data) {
	var oldest = null;

	for (var name in data) {
		var cat = data[name];
		if (!('death' in cat) && (oldest == null || oldest.birth > cat.birth)) {
			oldest = cat;
		}
	}

	if (oldest == null) {
		return null;
	} else {
		return oldest.name;
	}
}

function findCats() {
	var ARCHIVE = ['born 15-11-2003 (mother Spot): white Fang', 'born 20/09/2004 (mother Yellow Bess): Doctor Hobbles the 2nd, Noog'];//邮件集合
	var cats = {'Spot': catRecord('Spot', new Date(1997, 2, 5), 'unknown')};
	function handleParagraph(paragraph) {
		if (startsWith(paragraph, 'born')) {
			console.log('born: ', cats, catNames(paragraph), extractDate(paragraph), extractMother(paragraph))
			addCats(cats, catNames(paragraph), extractDate(paragraph), extractMother(paragraph));
		} else if (startsWith(paragraph, 'died')) {
			deadCats(cats, catNames(paragraph), extractDate(paragraph));
		}
	}

	for (var mail = 0; mail < ARCHIVE.length; mail++) {
		var paragraphs = ARCHIVE[mail].split('\n');
		console.log('paragraphs: ', paragraphs);
		for (var i = 0; i < paragraphs.length; i++) {
			console.log('paragraph[i]: ', paragraphs[i]);
			handleParagraph(paragraphs[i]);
		}
	}
	// console.log(cats);
	return cats;
}

// console.log(catInfo(findCats(), 'Noog'));

// findCats();

function findLivingCats() {
	var ARCHIVE = [];//邮件集合
	var livingCats = {'Spot': true};

	function handleParagraph(paragraph) {
		if (startsWith(paragraph, 'born')) {
			/*var names = catNames(paragraph);
			for (var name = 0; name < names.length; name++) {
				livingCats[names[name]] = true;
			}*/
			addToSet(livingCats, catNames(paragraph));
		} else if (startsWith(paragraph, 'died')) {
			/*var names = catNames(paragraph);
			for (var name = 0; name < names.length; name++) {
				delete livingCats[names[name]];
			}*/
			removeFromSet(livingCats, catNames(paragraph));
		}
	}

	for (var mail = 0; mail < ARCHIVE.length; mail++) {
		var paragraph = ARCHIVE[mail].split('\n');
		for (var i = 0; i < paragraph.length; i++) {
			handleParagraph(paragraph[i])
		}
	}
	return livingCats;
}

// 年year 月month 日day
/* var today = new Date();
console.log('Year:', today.getFullYear(), ', month: ', today.getMonth(), ', day: ', today.getDate());
console.log('Hour: ', today.getHours(), ', minutes: ', today.getMinutes(), ', seconds: ', today.getSeconds());
console.log('Day of week: ', today.getDay()); */

