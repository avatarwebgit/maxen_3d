export const calculateRotation = (scrollY) => {
  let rotationX = 0;
  let rotationY = 0;
  let rotationZ = 0;
  let zoom = 1;
  let CX = 1000;
  let CY = 2;
  let meshPositionX = 0;

  if (scrollY === 0) {
    rotationX = 90 - (scrollY / 2500) * 90;
    zoom = 1;
    meshPositionX = 0;
    CY = 12;
  } else if (scrollY < 2500) {
    rotationX = 90 - (scrollY / 2500) * 90;
    zoom = 1;
    meshPositionX = 0;
    CY = 3;
  } else if (scrollY >= 2500 && scrollY < 5000) {
    rotationY = ((scrollY - 2500) / 2500) * 45;
    zoom = 2.5;
    CX = 4;
    CY = 2;
    meshPositionX = 2.2;
  } else if (scrollY >= 5000 && scrollY < 7500) {
    zoom = 1;
    if (rotationY <= 90) {
      rotationY = ((scrollY - 2500) / 2500) * 45;
    }

    CX = 4;
    CY = 4;
    meshPositionX = 0.5;
  } else if (scrollY >= 5000 && scrollY < 7500) {
    zoom = 1;
    if (rotationY <= 90) {
      rotationY = ((scrollY - 2500) / 2500) * 45;
    }

    CX = 4;
    CY = 4;
    meshPositionX = 0.5;
  } else if (scrollY >= 7500) {
    zoom = 1.8;
    rotationY = ((scrollY - 2500) / 2500) * 45;
    CX = 5;
    CY = 4;
  }
  return { rotationX, rotationY, rotationZ, zoom, CX, CY, meshPositionX };
};
