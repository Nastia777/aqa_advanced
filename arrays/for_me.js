// using anonymous arrow function

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

// using arrow function

const getMaterialsLength = (material) => material.length;

console.log(materials.map(getMaterialsLength));