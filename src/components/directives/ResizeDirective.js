// import { ResizeObserver as Polyfill } from "@juggle/resize-observer";

// const ResizeObserver = window?.ResizeObserver ?? Polyfill;
const ResizeObserver = window.ResizeObserver;

const resizeHandler = function (entries) {
    for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
            listeners.forEach((fn) => {
                fn(entry);
            });
        }
    }
};

export default {
    inserted(el, binding) {
        const callback = binding.value;

        if (!el.__resizeListeners__) {
            el.__resizeListeners__ = [];
            el.__ro__ = new ResizeObserver(resizeHandler);
            el.__ro__.observe(el);
        }
        el.__resizeListeners__.push(callback);
    },

    unbind(el, binding) {
        const callback = binding.value;
        if (!el || !el.__resizeListeners__) return;
        el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(callback), 1);
        if (!el.__resizeListeners__.length) {
            el.__ro__.disconnect();
        }
    },
};
