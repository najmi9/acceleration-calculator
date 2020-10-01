let previousAccUnit = document.querySelector("select#acceleration").value
let previousMassUnit = document.querySelector("select#mass").value
let previousDistUnit = document.querySelector("select#distance").value
let previousTimeUnit = document.querySelector("select#time").value
let previousViUnit = document.querySelector("select#Vi").value
let previousVfUnit = document.querySelector("select#Vf").value
let previousForceUnit = document.querySelector("select#force").value;

const handleChange = (input, newUnit, previousUnit, handleUnit) => {
  if (input.value == '') {
    return;
  }
  if (newUnit == previousUnit) {
    return;
  }

  const factor = handleUnit(newUnit, previousUnit); 
  input.value = format(parseFloat(input.value.replaceAll(',', '')) * factor);
}

document.querySelector("select#acceleration").onchange = ({ currentTarget }) => {
  const acc = document.querySelector("input#acceleration");
  // handleAccUnitChange : function exist in unit_convert_functs.js
  handleChange(acc, currentTarget.value, previousAccUnit, handleAccUnitChange);
  previousAccUnit = currentTarget.value;
}

document.querySelector("select#mass").onchange = ({ currentTarget }) => {
  const mass = document.querySelector("input#mass");
  handleChange(mass, currentTarget.value, previousMassUnit, handleMassUnitChange);
  previousMassUnit = currentTarget.value;
}

document.querySelector("select#distance").onchange = ({ currentTarget }) => {
  const dist = document.querySelector("input#distance");
  if ((currentTarget.value == "m/cm" || currentTarget.value == "ft/inch") || (previousDistUnit == "m/cm" || previousDistUnit == "ft/inch")) {
      handleDistanceChange(currentTarget.value, previousDistUnit, dist);
  } else {
      handleChange(dist, currentTarget.value, previousDistUnit, handleDistUnitChange);
  }
  previousDistUnit = currentTarget.value;
}


document.querySelector("select#time").onchange = ({ currentTarget }) => {
   const time = document.querySelector("input#time");
  //curr.value == newUnit
  if ((currentTarget.value== "min/sec"||currentTarget.value=="hrs/min") || (previousTimeUnit== "min/sec"||previousTimeUnit=="hrs/min")) {
      handleTime(currentTarget.value, previousTimeUnit, time);
  }else{
      handleChange(time, currentTarget.value, previousTimeUnit, handleTimeUnitChange);
  }
  previousTimeUnit = currentTarget.value;
}

document.querySelector("select#Vi").onchange = ({ currentTarget }) => {
  const velo = document.querySelector("input#Vi");
  handleChange(velo, currentTarget.value, previousViUnit, handleVeloUnitChange);
  previousViUnit = currentTarget.value;
}

document.querySelector("select#Vf").onchange = ({ currentTarget }) => {
  const v = document.querySelector("input#Vf");
  handleChange(v, currentTarget.value, previousVfUnit, handleVeloUnitChange);
  previousVfUnit = currentTarget.value;
}


document.querySelector("select#force").onchange = ({ currentTarget }) => {
  const input = document.querySelector("input#force");
  handleChange(input, currentTarget.value, previousForceUnit, handleForceUnitChange);
  previousForceUnit = currentTarget.value;
}


