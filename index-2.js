const ret1 = () => {
  return "ret1";
};

const ret2 = () => {
  return "ret2";
};
const ret3 = () => {
  return "ret3";
};

const f1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(ret1());
    rej("1 err");
  }, 500);
});

const f2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(ret2());
    rej("2 err");
  }, 500);
});

const f3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(ret3());
    rej("2 err");
  }, 500);
});

f1.then(value => {
  console.log(value);

  f3.then(value => {
    console.log(value);

    f2.then(value => {
      console.log(value);
      console.log("all resolved");
    });
  });
});
