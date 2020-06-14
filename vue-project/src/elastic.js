export default {
  bind(el, bindings, vnode) {
    console.log(el, bindings, vnode);
    // el.style.color = bindings.value;
    const arg = bindings.arg;
    el.style[arg] = bindings.value;
  }
}