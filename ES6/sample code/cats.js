function startsWith(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
}

function catNames(paragraph) {
	var colon = paragraph.indexOf(':');
	return paragraph.slice(colon + 2).split(', ');
}

function addToSet(set, values) {
	for (var i = 0; i < values.length; i++) {
		set[values[i]] = true;
	}
}

function removeFromSet(set, values) {
	for (var i = 0; i < values.length; i++) {
		delete set[values[i]];
	}
}

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
var today = new Date();
console.log('Year:', today.getFullYear(), ', month: ', today.getMonth(), ', day: ', today.getDate());
console.log('Hour: ', today.getHours(), ', minutes: ', today.getMinutes(), ', seconds: ', today.getSeconds());
console.log('Day of week: ', today.getDay());