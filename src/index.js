function classList(...args) {
  let list = "";
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (Boolean(arg)) {
      list += (i !== 0 ? " " : "") + arg;
    }
  }
  return list;
}

module.exports = classList;
