export const calculateRotation = scrollY => {
 let rotationX = 0;
 let rotationY = 0;
 let rotationZ = 0;
 let zoom = 1;
 let CX = 1000;
 let CY = 2;
 let meshPositionX = 0;
 let meshPositionY = 0;
 let frontLightValue = 0;

 // total 8 stages
 let stage = 0;

 if (scrollY <10) {
  rotationX = 90 - (scrollY / 2500) * 90;
  zoom = 1;
  meshPositionX = 0;
  CY = 20;
  stage = 0;
 } else if (scrollY < 1500) {
  rotationX = 0;
  zoom = 1;
  meshPositionX = 0;
  CY = 4;
  stage = 1;
 } else if (scrollY >= 1500 && scrollY < 2250) {
  rotationX = 0;
  zoom = 1.8;
  meshPositionX = 0;
  CY = 2.7;
  frontLightValue = 1000;
  stage = 2;
 } else if (scrollY >= 2250 && scrollY < 3000) {
  rotationY = ((scrollY - 2500) / 2500) * 35;
  zoom = 2.5;
  CX = 4;
  CY = 2;
  meshPositionX = 2.2;
  stage = 3;
 } else if (scrollY >= 3000 && scrollY < 4000) {
  zoom = 3;
  rotationY = 0;
  rotationX = 0;
  CX = 90;
  CY = 3;
  meshPositionX = 0;
  stage = 4;
 } else if (scrollY >= 4000 && scrollY < 5000) {
  zoom = 3;
  rotationY = 0;
  rotationX = 0;
  CX = 90;
  CY = 3;
  meshPositionX = 0;
  stage = 4.5;
 } else if (scrollY >= 5000 && scrollY < 6000) {
  zoom = 0.95;
  rotationY = 90;
  CX = 1.8;
  CY = 3;
  meshPositionX = 0;
  stage = 5;
 } else if (scrollY >= 6000 && scrollY < 7500) {
  zoom = 1.7;
  rotationY = 94;
  CX = 15;
  CY = 1.72;
  stage = 6;
 } else if (scrollY >= 7500 && scrollY < 9000) {
  zoom = 1.8;
  rotationY = 110;
  CX = 6;
  CY = 4;
  stage = 7;
 } else if (scrollY >= 9000 && scrollY < 10500) {
  zoom = .1;
  rotationY = 0;
  rotationX = 0;
  CX = 90;
  CY = 3;
  meshPositionX = 0;
  stage = 8;
 } else if (scrollY >= 10500) {
  zoom = .7;
  rotationY = -130;
  rotationX = 0;
  CX = 100;
  CY = 3;
  meshPositionX = 7;
  stage = 9;
 }
 return {
  rotationX,
  rotationY,
  rotationZ,
  zoom,
  CX,
  CY,
  meshPositionX,
  meshPositionY,
  stage,
  frontLightValue,
 };
};
