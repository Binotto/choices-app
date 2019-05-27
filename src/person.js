// export const isAdult = (age) => age >= 18;
// export const canDrink = (age) => age >= 18;
//////////////////////////////////////////////
const canDrink = (age) => age >= 18;
const isAdult = (age) => age >= 21;
const isSeniorCitizen = (age) => age >= 65;

export{ canDrink, isAdult, isSeniorCitizen as default};