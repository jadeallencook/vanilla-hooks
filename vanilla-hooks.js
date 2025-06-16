window.VanillaHooks = {
  states: [],
  State: class {
    constructor(intialValue) {
      this.value = intialValue;
      const { length: index } = window.VanillaHooks.states;
      this.id = `vanilla-state-${index}`;
      window.VanillaHooks.states.push(new Event(this.id));
      this.event = window.VanillaHooks.states[index];
    }
    set(value) {
      this.value = value;
    }
    toString() {
      return String(this.value);
    }
    map(callback) {
      this.value.map(callback);
    }
    valueOf() {
      return this.value;
    }
  },
  useState: (intialValue) => {
    let state = new VanillaHooks.State(intialValue);
    const setState = (parameter) => {
      const isFunction = typeof parameter === "function";
      const value = isFunction ? parameter(state.value) : parameter;
      state.set(value);
      dispatchEvent(state.event);
    };
    return [state, setState];
  },
  useEffect: (callback, dependencies) => {
    callback();
    if (dependencies.length) {
      dependencies.forEach((state) => addEventListener(state.id, callback));
    }
  },
};
