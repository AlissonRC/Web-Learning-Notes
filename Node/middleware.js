const pass1 = (context, next) => {
  context.val1 = "pass1";
  next();
};
const pass2 = (context, next) => {
  context.val2 = "pass2";
  next();
};

const pass3 = (context) => {
  context.val3 = "pass3";
};

const exec = (context, ...callback) => {
  const execPass = (indice) => {
    callback &&
      indice < callback.length &&
      callback[indice](context, () => execPass(indice + 1));
  };
  execPass(0);
};
const context = {};
exec(context, pass1, pass2, pass3);
console.log(context);
