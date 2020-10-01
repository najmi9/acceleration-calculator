const c = 3 * Math.pow(10, 8);

const accForceMass = (f, m) => (f/m);
const accVfVi = (Vf, Vi, dt) =>((Vf-Vi)/dt);
const accDistTravld = (d, Vi, dt) =>2*(d-Vi*dt)/(dt*dt);

const format = number =>{
	if(number<0.001){
		return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}else{
		return new Intl.NumberFormat().format(number)
    }
}	
