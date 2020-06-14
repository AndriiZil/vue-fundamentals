export default {
  bind(el, bindings, vnode) {
    console.log(el, bindings, vnode);

    const fontModified = bindings.modifiers['font'];

    if (fontModified) {
      el.style.fontSize = '40px';
    }

    const delayModifier = bindings.modifiers['delay'];

    let delay = 0

    if (delayModifier) {
      delay = 2000;
    }

    setTimeout(() => {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);
  }
}