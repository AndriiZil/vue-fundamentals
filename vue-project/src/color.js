export default {
  bind(el, bindings, vnode) {
    console.log(bindings, vnode);
    console.log('bind');
    el.style.color = 'blue';
  },
  inserted(el, bindings, vnode) {
    console.log(el, bindings, vnode);
    console.log('inserted');
  },
  update(el, bindings, vnode, oldVnode) {
    console.log(el, bindings, vnode, oldVnode);
    console.log('update');
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log(el, bindings, vnode, oldVnode);
    console.log('componentUpdated');
  },
  unbind() {
    console.log('unbind');
  }
}