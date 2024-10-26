const Add = (x, y) => x + y;
console.log(Add(30, 21));

const Sxvaoba = function (x, y) {
  return x - y;
};
console.log(Sxvaoba(100, 40));

const IsEven = (x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(IsEven(20));

function Multiply(x, y, Callback) {
  return Callback(x, y);
}
function Namrvli(x, y) {
  return x * y;
}
console.log(Multiply(13, 4, Namrvli));

const Positive = (x) => {
  if (x > 0) {
    return "დადებითია";
  } else {
    return "არ არის დადებითი";
  }
};
console.log(Positive(-12));

const x2 = function (x) {
  console.log(x * 2);
};
x2(20);

function Double(x, Callback) {
  return Callback(x);
}
function Gaormageba(x) {
  return x * 2;
}
console.log(Double(100, Gaormageba));

const Nashti = (x) => {
  if (x % 3 === 0) {
    return "ნაშთია 0";
  } else if (x % 3 === 1) {
    return "ნაშთია 1";
  } else {
    return "ნაშთია 2";
  }
};
console.log(Nashti(314));

function CallbackLuwi(x, Callback) {
  return Callback(x);
}
function Luwi(x) {
  if (x % 2 == 0) {
    return "ლუწია";
  } else {
    return "კენტია";
  }
}
console.log(CallbackLuwi(20, Luwi));

const Cube = (x) => x * x * x;
console.log(Cube(4));

function CallbackNamravli(x, y, Callback) {
  return Callback(x, y);
}
function Namravli(x, y) {
  return x * y;
}
console.log(CallbackNamravli(20, 10, Namravli));

const IsMoreThanZero = (x) => {
  if (x >= 0) {
    return "არის";
  } else {
    return "არ არის";
  }
};
console.log(IsMoreThanZero(20));

const half = function (x) {
  return x / 2;
};
console.log(half(10));

function CallbackJami(x, y, Callback) {
  return Callback(x, y);
}
function Jami(x, y) {
  return x + y;
}
console.log(CallbackJami(20, 21, Jami));

const Kvadrat = (x) => x * x;
console.log(Kvadrat(20));
