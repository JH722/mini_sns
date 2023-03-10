exports.home = (ctx, next) => {
  ctx.body = "hello world";
};

exports.page = (ctx, next) => {
  let page = ctx.params.page;
  let content;

  switch (page) {
    case "terms":
      content = "이용약관";
      break;

    case "policy":
      content = "개인정보 처리방침";
      break;
  }
  ctx.body = content;
};
