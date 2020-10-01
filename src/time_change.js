function handleTime (newUnit, previousUnit, x) {
	if (newUnit == previousUnit) {
		return 1;
	}
     const normal = document.querySelector("div.normal-time");
	 const minSec = document.querySelector("div.min-sec");
	 const hrsMin = document.querySelector("div.hrs-min"); 
     const min = document.querySelector("input#min");
     const secs =document.querySelector("input#sec");
     const hrs =document.querySelector("input#hrs");
     const min2 =document.querySelector("input#min2");
     const sec = {
		'sec': 1, 'ms':0.001,'min': 60, 'hrs': 3600,
		'dys': 3600 * 24, 'week': 3600 * 7 * 24, 'month': 3600 * 24 * 30,
		'yrs': 3600 * 24 * 365
	}; 
		if (newUnit == "min/sec" && previousUnit != "hrs/min") {
		    normal.style.display = 'none';
		    minSec.style.display = 'block';
		    hrsMin.style.display = 'none';
	        const seconds = clean(x.value) * sec[previousUnit];
	        min.value = format(parseInt(seconds/60));
	        secs.value = format((seconds/60-parseInt(seconds/60))*60||0);
		} else if(previousUnit == "min/sec" && newUnit != "hrs/min") {
		   minSec.style.display= 'none';
		   hrsMin.style.display= 'none';
		   normal.style.display= 'block';
	  	   const mins = clean(min.value);
	  	   const secds = clean(secs.value);
           x.value = format((mins*60+secds)/sec[newUnit]);
        }else if (newUnit == "hrs/min" && previousUnit !="min/sec") {
		    normal.style.display = 'none';
		    minSec.style.display = 'none';
		    hrsMin.style.display = 'block';
	        const seconds = clean(x.value) * sec[previousUnit];
	        hrs.value = format(parseInt(seconds/3600));
	        min2.value = format((seconds/3600-parseInt(seconds/3600))*60);
		}else if (previousUnit == "hrs/min" && newUnit !="min/sec") {
		    minSec.style.display= 'none';
		    hrsMin.style.display= 'none';
		    normal.style.display= 'block';
		    x.value = format((clean(hrs.value)*3600+clean(min2.value)*60)/sec[newUnit]);
		}else if (previousUnit == "min/sec" && newUnit == "hrs/min") {
			minSec.style.display= 'none';
		    hrsMin.style.display= 'block';
		    normal.style.display= 'none';
		    const mins = clean(min.value);
	  	    const secds = clean(secs.value);
	  	    const seconds = secds + mins * 60;
		    hrs.value = format(parseInt(seconds/3600));
	        min2.value = format((seconds/3600-parseInt(seconds/3600))*60);
		}else if (previousUnit == "hrs/min" && newUnit == "min/sec") {
			minSec.style.display= 'block';
		    hrsMin.style.display= 'none';
		    normal.style.display= 'none';
		    const hr = clean(hrs.value);
		    const mins = clean(min2.value);
		    const seconds = hr*3600+mins*60;
		    min.value = format(parseInt(seconds/60));
	        secs.value = format((seconds/60-parseInt(seconds/60))*60||0);
		} 
}

const clean = (x)=>{
	if (!x) {
		return 0;
	}
	return parseFloat(x.replaceAll(',', ''));
};