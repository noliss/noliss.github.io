const MOODS = {
				'😡': { max: 1 }, 
				'😡': { max: 10 }, 
				'😠': { max: 20 }, 
				'😦': { max: 30 }, 
				'☹️': { max: 40 }, 
				'🙁': { max: 50 }, 
				'😐': { max: 60 }, 
				'🙂': { max: 70 }, 
				'😊': { max: 80 }, 
				'😄': { max: 90 }, 
				'😃': { max: 100 }, 
				'😍': { min: 100 }
			}, 
			_MOOD = document.getElementById('mood'), 
			_FORM = _MOOD.parentNode, 
			_MOUT = _MOOD.nextElementSibling;

let val = null;

function updateVal() {
	let newval = +_MOOD.value;
	
	if(val !== newval) {
		_FORM.style.setProperty('--val', val = newval);
		
		for(let k in MOODS)
			if((!MOODS[k].min || (MOODS[k].min <= val)) && 
				 (!MOODS[k].max || (MOODS[k].max > val))) {
				_MOUT.textContent = k;
				break
			}
	}
};

updateVal();

addEventListener('change', updateVal, false);
addEventListener('input', updateVal, false);