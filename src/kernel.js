function manageViewAndResult(given) {
    const au = document.querySelector("select#acceleration").value;
    let T = 0;
	if (given == "Distance Traveled") {
		const is = parseFloat(document.querySelector("input#Vi").value.replaceAll(',', ''))||0;
		const d = parseFloat(document.querySelector("input#distance").value.replaceAll(',', ''))||0;
		const tu = document.querySelector("select#time").value;
		const isu = document.querySelector("select#Vi").value;	
    const du = document.querySelector("select#distance").value;
     let D = 0;
		 if (tu == "min/sec" || tu == "hrs/min") {
           if (tu == "min/sec") {
       	     const min = clean(document.querySelector("input#min").value);
             const secs = clean(document.querySelector("input#sec").value);
              T  = min*60+secs;
          }else if(tu == "hrs/min") {
       	      const hrs =clean(document.querySelector("input#hrs").value);
              const min =clean(document.querySelector("input#min2").value);
              T = hrs*3600+min*60;
          }
        }else{    
		   const t = parseFloat(document.querySelector("input#time").value.replaceAll(',', ''))||0;     
           if(t==0){return;}
           T = t *  handleTimeUnitChange('sec', tu);
        }
        if(!T){return;}
        if (du == "m/cm" || du=="ft/inch") {
           if(du == "m/cm"){
             const mValue = clean(document.querySelector("input#m").value);
             const cmValue = clean(document.querySelector("input#cm").value);
             D = mValue + cmValue/100;
           }else if (du == "ft/inch"){
              const ftValue = clean(document.querySelector("input#ft").value);
              const inchValue = clean(document.querySelector("input#inch").value);
              D = ftValue*0.3048 + inchValue*0.0254;
           }
        } else {
          D = d * handleDistUnitChange('m', du);
        }
        const IS = is * handleVeloUnitChange('m/s', isu);
        const A = accDistTravld(D, IS, T);
		document.querySelector("input#acceleration").value = format(A*handleAccUnitChange(au, 'm/s²'));
	
	} else if (given == "Mass and force") {
		const m = parseFloat(document.querySelector("input#mass").value.replaceAll(',', ''))||0;
		const f = parseFloat(document.querySelector("input#force").value.replaceAll(',', ''))||0;
		 if(!m){return;}
        const mu = document.querySelector("select#mass").value;
        const fu = document.querySelector("select#force").value;
        const M = m * handleMassUnitChange('kg', mu);
        const F = f * handleForceUnitChange('N', fu);
        const A = accForceMass(F, M);
        document.querySelector("input#acceleration").value = format(A*handleAccUnitChange(au, 'm/s²'));
	}else if (given == "Speed Difference") {
		  const is = parseFloat(document.querySelector("input#Vi").value.replaceAll(',', ''))||0;
		  const fs = parseFloat(document.querySelector("input#Vf").value.replaceAll(',', ''))||0;
      const tu = document.querySelector("select#time").value;
		  const isu = document.querySelector("select#Vi").value;
		  const fsu = document.querySelector("select#Vf").value;
      if (tu == "min/sec" || tu == "hrs/min") {
          if (tu == "min/sec") {
       	      const min = clean(document.querySelector("input#min").value);
              const secs = clean(document.querySelector("input#sec").value);
              T  = min*60+secs;
          }else if(tu == "hrs/min") {
       	      const hrs =clean(document.querySelector("input#hrs").value);
              const min =clean(document.querySelector("input#min2").value);
              T = hrs*3600+min*60;
          }
      }else{
		    const t = parseFloat(document.querySelector("input#time").value.replaceAll(',', ''))||0;
         if(!t){return;}		   
            T = t * handleTimeUnitChange('sec', tu); 
	    }
	    if(!T){return;}
	    const IS = is * handleVeloUnitChange('m/s', isu);
		  const FS = fs * handleVeloUnitChange('m/s', fsu);
		  const A = accVfVi(FS, IS, T);
		  document.querySelector("input#acceleration").value = format(A*handleAccUnitChange(au, 'm/s²'));
    }
}