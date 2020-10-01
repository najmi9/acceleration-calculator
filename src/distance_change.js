function handleDistanceChange(newUnit, previousUnit, x) {
	if (newUnit == previousUnit) {
		return 1;
	}
     const normal = document.querySelector("div#normal-dist");
	 const mCm = document.querySelector("div#m-cm");
	 const ftInch = document.querySelector("div#ft-inch"); 
     const m = document.querySelector("input#m");
     const cm =document.querySelector("input#cm");
     const ft =document.querySelector("input#ft");
     const inch =document.querySelector("input#inch");
     const asUn = 149597870700;
	 const psUn = 30857000000000000;
	 const lyear = 9460700000000000;
     const meter = {
		'm': 1, 'cm':0.01, 'inch':0.0254, 'mm':0.001 
		,'km': 1000, 'mile': 1609.3, 'ft': 0.3048, 'yd': 0.9144,
		'au': asUn, 'parsec': psUn, 'ly': lyear
	};
		if (newUnit == "m/cm" && previousUnit != "ft/inch") {
			normal.style.display = 'none';
		    mCm.style.display = 'block';
		    ftInch.style.display = 'none';
	        const mm = clean(x.value) * meter[previousUnit];
	        m.value = format(parseInt(mm));
	        cm.value = format((mm-parseInt(mm))*100||0);
		} else if(previousUnit == "m/cm" && newUnit != "ft/inch") {
		   mCm.style.display= 'none';
		   ftInch.style.display= 'none';
		   normal.style.display= 'block';
	  	   const mm = clean(m.value);
	  	   const cms = clean(cm.value);
           x.value = format((mm+(cms/100))/meter[newUnit]);
        }else if (newUnit == "ft/inch" && previousUnit !="m/cm") {
		    normal.style.display = 'none';
		    mCm.style.display = 'none';
		    ftInch.style.display = 'block';
	        const mm = clean(x.value) * meter[previousUnit];
	        console.log(previousUnit,meter[previousUnit], x.value)
	        ft.value = format(parseInt(mm/0.3048));
	        inch.value = format(((mm/0.3048)-parseInt(mm/0.3048))/0.0254);
		}else if (previousUnit == "ft/inch" && newUnit !="m/cm") {
		    mCm.style.display= 'none';
		    ftInch.style.display= 'none';
		    normal.style.display= 'block';
		    const a = clean(ft.value)*0.3048;
		    const b = clean(inch.value)*0.0254;
		    x.value = format((a+b)/meter[newUnit]);
		}else if (previousUnit == "m/cm" && newUnit == "ft/inch") {
			mCm.style.display= 'none';
		    ftInch.style.display= 'block';
		    normal.style.display= 'none';
		    const mm = clean(m.value);
	  	    const cms = clean(cm.value);
	  	    const ms = mm + cms /100;
		    ft.value = format(parseInt(ms/0.3048));
	        inch.value = format((ms/0.3048-parseInt(ms/0.3048))/0.0254);
		}else if (previousUnit == "ft/inch" && newUnit == "m/cm") {
			mCm.style.display= 'block';
		    ftInch.style.display= 'none';
		    normal.style.display= 'none';
		    const fts = clean(ft.value);
		    const inchs = clean(inch.value);
		    const ms = fts*0.3048+inchs*0.0254;
		    m.value = format(parseInt(ms));
	        cm.value = format((ms-parseInt(ms))*100||0);
		} 
}