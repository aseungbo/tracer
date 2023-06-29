import { capitalize, camelize, h, createVNode, Transition, mergeProps, computed, withDirectives, resolveDirective, ref, inject, watch, watchEffect, nextTick, effectScope, onScopeDispose, reactive, provide, readonly, toRaw, warn, toRef, Fragment, toHandlers, Teleport, vShow, unref, cloneVNode, withCtx, isRef, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { g as genericComponent, d as defineComponent, p as provideDefaults, a as propsFactory, I as IconValue, m as makeThemeProps, b as provideTheme, i as isComponentInstance, e as getCurrentInstance, f as IN_BROWSER, h as destructComputed, j as consoleError, k as convertToUnit, l as clamp, u as useToggleScope, n as useProxiedModel, o as useRtl, q as consoleWarn, r as useLocale, s as getCurrentInstanceName, E as EventProp, t as getUid, v as isOn, w as pick, x as wrapInArray, y as filterInputAttrs, z as callEvent, _ as _export_sfc, A as twColors } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import { u as useRender, m as makeDensityProps, a as makeRoundedProps, b as makeSizeProps, c as makeTagProps, d as makeVariantProps, e as useVariant, f as useDensity, g as useRounded, h as useSize, V as VImg, i as VIcon, j as genOverlays, k as VDefaultsProvider, R as Ripple, l as makeBorderProps, n as makeDimensionProps, o as makeElevationProps, p as makeLoaderProps, q as makeLocationProps, r as makePositionProps, s as makeRouterProps, t as useBorder, v as useDimension, w as useElevation, x as useLoader, y as useLocation, z as usePosition, A as useLink, L as LoaderSlot, B as parseAnchor, C as flipSide, D as flipAlign, E as flipCorner, F as getAxis, G as makeTransitionProps, H as useBackgroundColor, I as useRouter, M as MaybeTransition, J as useTextColor, K as VExpandXTransition, N as VSlideYTransition, O as Intersect, P as VBtn } from "./VBtn-f83d6339.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "klona";
import "@iconify/vue";
class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h2 = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h2
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined")
    return {
      finished: Promise.resolve()
    };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
function createSimpleFunctional(klass) {
  let tag = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div";
  let name = arguments.length > 2 ? arguments[2] : void 0;
  return genericComponent()({
    name: name ?? capitalize(camelize(klass.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: tag
      }
    },
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      return () => {
        var _a;
        return h(props.tag, {
          class: klass
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode)
      node = node.parentNode;
    if (node !== document)
      return null;
    return document;
  }
  const root = node.getRootNode();
  if (root !== document && root.getRootNode({
    composed: true
  }) !== document)
    return null;
  return root;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
function getScrollParent(el) {
  while (el) {
    if (hasScrollbar(el))
      return el;
    el = el.parentElement;
  }
  return document.scrollingElement;
}
function getScrollParents(el, stopAt) {
  const elements = [];
  if (stopAt && el && !stopAt.contains(el))
    return elements;
  while (el) {
    if (hasScrollbar(el))
      elements.push(el);
    if (el === stopAt)
      break;
    el = el.parentElement;
  }
  return elements;
}
function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE)
    return false;
  const style = window.getComputedStyle(el);
  return style.overflowY === "scroll" || style.overflowY === "auto" && el.scrollHeight > el.clientHeight;
}
function isFixedPosition(el) {
  while (el) {
    if (window.getComputedStyle(el).position === "fixed") {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: {
    target: Object
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = target.getBoundingClientRect();
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
const index_vue_vue_type_style_index_0_scoped_bf459df9_lang = "";
const VCard$1 = "";
const VCardActions = /* @__PURE__ */ defineComponent({
  name: "VCardActions",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": "v-card-actions"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VAvatar$1 = "";
const makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "v-avatar");
const VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value],
      "style": [colorStyles.value, sizeStyles.value]
    }, {
      default: () => {
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a = slots.default) == null ? void 0 : _a.call(slots), genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});
const VCardSubtitle = createSimpleFunctional("v-card-subtitle");
const VCardTitle = createSimpleFunctional("v-card-title");
const VCardItem = genericComponent()({
  name: "VCardItem",
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    prependAvatar: String,
    prependIcon: IconValue,
    subtitle: String,
    title: String,
    ...makeDensityProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title || slots.title);
      const hasSubtitle = !!(props.subtitle || slots.subtitle);
      return createVNode("div", {
        "class": "v-card-item"
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? hasPrependMedia && createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "icon": props.prependIcon,
        "image": props.prependAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.prependIcon,
            image: props.prependAvatar
          }
        }
      }, slots.prepend)]), createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots)) ?? props.title];
        }
      }), hasSubtitle && createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => {
          var _a2;
          return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots)) ?? props.subtitle];
        }
      }), (_a = slots.default) == null ? void 0 : _a.call(slots)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? hasAppendMedia && createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "icon": props.appendIcon,
        "image": props.appendAvatar
      }, null) : createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            icon: props.appendIcon,
            image: props.appendAvatar
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
const VCardText = createSimpleFunctional("v-card-text");
const VCard = genericComponent()({
  name: "VCard",
  directives: {
    Ripple
  },
  props: {
    appendAvatar: String,
    appendIcon: IconValue,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: IconValue,
    ripple: {
      type: Boolean,
      default: true
    },
    subtitle: String,
    text: String,
    title: String,
    ...makeThemeProps(),
    ...makeBorderProps(),
    ...makeDensityProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeLoaderProps(),
    ...makeLocationProps(),
    ...makePositionProps(),
    ...makeRoundedProps(),
    ...makeRouterProps(),
    ...makeTagProps(),
    ...makeVariantProps({
      variant: "elevated"
    })
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value));
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = !!(slots.title || props.title);
      const hasSubtitle = !!(slots.subtitle || props.subtitle);
      const hasHeader = hasTitle || hasSubtitle;
      const hasAppend = !!(slots.append || props.appendAvatar || props.appendIcon);
      const hasPrepend = !!(slots.prepend || props.prependAvatar || props.prependIcon);
      const hasImage = !!(slots.image || props.image);
      const hasCardItem = hasHeader || hasPrepend || hasAppend;
      const hasText = !!(slots.text || props.text);
      return withDirectives(createVNode(Tag, {
        "class": ["v-card", {
          "v-card--disabled": props.disabled,
          "v-card--flat": props.flat,
          "v-card--hover": props.hover && !(props.disabled || props.flat),
          "v-card--link": isClickable.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value],
        "href": link.href.value,
        "onClick": isClickable.value && link.navigate,
        "tabindex": props.disabled ? -1 : void 0
      }, {
        default: () => {
          var _a;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-card__image"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "cover": true,
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                cover: true,
                src: props.image
              }
            }
          }, slots.image)]), createVNode(LoaderSlot, {
            "name": "v-card",
            "active": !!props.loading,
            "color": typeof props.loading === "boolean" ? void 0 : props.loading
          }, {
            default: slots.loader
          }), hasCardItem && createVNode(VCardItem, {
            "key": "item",
            "prependAvatar": props.prependAvatar,
            "prependIcon": props.prependIcon,
            "title": props.title,
            "subtitle": props.subtitle,
            "appendAvatar": props.appendAvatar,
            "appendIcon": props.appendIcon
          }, {
            default: slots.item,
            prepend: slots.prepend,
            title: slots.title,
            subtitle: slots.subtitle,
            append: slots.append
          }), hasText && createVNode(VCardText, {
            "key": "text"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.text) == null ? void 0 : _a2.call(slots)) ?? props.text];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots), slots.actions && createVNode(VCardActions, null, {
            default: slots.actions
          }), genOverlays(isClickable.value, "v-card")];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});
const VDialog$1 = "";
const VOverlay$1 = "";
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  const runDelayFactory = (prop) => () => {
    return Promise.resolve(true);
  };
  return {
    runCloseDelay: runDelayFactory(),
    runOpenDelay: runDelayFactory()
  };
}
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeActivatorProps = propsFactory({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "v-overlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay();
  const availableEvents = {
    click: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      isActive.value = !isActive.value;
    },
    mouseenter: (e) => {
      var _a;
      if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents)
        return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    mouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    focus: (e) => {
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    blur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.click = availableEvents.click;
    }
    if (props.openOnHover) {
      events.mouseenter = availableEvents.mouseenter;
      events.mouseleave = availableEvents.mouseleave;
    }
    if (openOnFocus.value) {
      events.focus = availableEvents.focus;
      events.blur = availableEvents.blur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.mouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.mouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject(VMenuSymbol, null);
      events.click = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.mouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.mouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  const activatorRef = ref();
  watchEffect(() => {
    if (!activatorRef.value)
      return;
    nextTick(() => {
      const activator = activatorRef.value;
      activatorEl.value = isComponentInstance(activator) ? activator.$el : activator;
    });
  });
  const vm = getCurrentInstance("useActivator");
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    Object.entries(activatorEvents.value).forEach((_ref3) => {
      let [name, cb] = _ref3;
      el.addEventListener(name, cb);
    });
    Object.keys(_props).forEach((k) => {
      if (_props[k] == null) {
        el.removeAttribute(k);
      } else {
        el.setAttribute(k, _props[k]);
      }
    });
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    Object.entries(activatorEvents.value).forEach((_ref4) => {
      let [name, cb] = _ref4;
      el.removeEventListener(name, cb);
    });
    Object.keys(_props).forEach((k) => {
      el.removeAttribute(k);
    });
  }
  function getActivator() {
    var _a, _b;
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    let activator;
    if (selector) {
      if (selector === "parent") {
        let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
        while (el.hasAttribute("data-no-activator")) {
          el = el.parentNode;
        }
        activator = el;
      } else if (typeof selector === "string") {
        activator = document.querySelector(selector);
      } else if ("$el" in selector) {
        activator = selector.$el;
      } else {
        activator = selector;
      }
    }
    activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : null;
    return activatorEl.value;
  }
}
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = ref(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "v-overlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = isFixedPosition(data.activatorEl.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed"
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2)
        offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe)
      updateLocation();
  });
  watch([data.activatorEl, data.contentEl], (_ref, _ref2) => {
    let [newActivatorEl, newContentEl] = _ref;
    let [oldActivatorEl, oldContentEl] = _ref2;
    if (oldActivatorEl)
      observer.unobserve(oldActivatorEl);
    if (newActivatorEl)
      observer.observe(newActivatorEl);
    if (oldContentEl)
      observer.unobserve(oldContentEl);
    if (newContentEl)
      observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true);
    });
    if (!data.activatorEl.value || !data.contentEl.value)
      return;
    const targetBox = data.activatorEl.value.getBoundingClientRect();
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === document.documentElement ? 0 : rect.x,
        y: el === document.documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset)
          continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result)
      return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame)
      frame();
    if (frames.length)
      run();
    else
      clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "v-overlay-scroll-strategies");
function closeScrollStrategy(data) {
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  var _a;
  const offsetParent = (_a = data.root.value) == null ? void 0 : _a.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.activatorEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _a, _b;
      const start = performance.now();
      (_b = (_a = data.updateLocation).value) == null ? void 0 : _b.call(_a, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(data.activatorEl.value ?? data.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el, onScroll) {
  const scrollElements = [document, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}
function useHydration() {
  return ref(false);
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const StackSymbol = Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = ref(+zIndex.value);
  useToggleScope(isActive, () => {
    var _a;
    const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = ref(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _a;
      const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER)
      return void 0;
    const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      warn(`Unable to locate target ${_target}`);
      return void 0;
    }
    let container = targetElement.querySelector(":scope > .v-overlay-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false)
    return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
    return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(document);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: true
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el, binding) {
    if (!el._clickOutside)
      return;
    handleShadow(el, (app) => {
      var _a;
      if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid]))
        return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [String, Boolean],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps()
}, "v-overlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled))
          model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v)
        isActive.value = false;
    });
    const root = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies();
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent)
        isActive.value = false;
      else
        animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    useRouter();
    useToggleScope(() => props.closeOnBack, () => {
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation)
        return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => {
      var _a;
      return createVNode(Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        props: mergeProps({
          ref: activatorRef
        }, toHandlers(activatorEvents.value), props.activatorProps)
      }), isMounted.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [hasContent.value && createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value],
          "style": [stackStyles.value, {
            top: convertToUnit(top.value)
          }],
          "ref": root
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim
        }, toHandlers(scrimEvents.value)), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": activatorEl.value,
          "onAfterLeave": () => {
            onAfterLeave();
            emit("afterLeave");
          }
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", mergeProps({
              "ref": contentEl,
              "class": ["v-overlay__content", props.contentClass],
              "style": [dimensionStyles.value, contentStyles.value]
            }, toHandlers(contentEvents.value), props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
              isActive
            })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
              handler: onClickOutside,
              closeConditional,
              include: () => [activatorEl.value]
            }]])];
          }
        })])]
      })]);
    });
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (!ref2.value)
          continue;
        const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0);
        if (descriptor2)
          return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs)
          continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2)
            queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
const VDialog = genericComponent()({
  name: "VDialog",
  props: {
    fullscreen: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    ...makeVOverlayProps({
      origin: "center center",
      scrollStrategy: "block",
      transition: {
        component: VDialogTransition
      },
      zIndex: 2400
    })
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    watch(isActive, async (val) => {
      var _a, _b;
      await nextTick();
      if (val) {
        (_a = overlay.value.contentEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      } else {
        (_b = overlay.value.activatorEl) == null ? void 0 : _b.focus({
          preventScroll: true
        });
      }
    });
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "dialog",
      "aria-expanded": String(isActive.value)
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }]
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps.value,
        "role": "dialog"
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": true
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const FormKey = Symbol.for("vuetify:form");
const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function createForm(props) {
  const model = useProxiedModel(props, "modelValue");
  const isDisabled = computed(() => props.disabled);
  const isReadonly = computed(() => props.readonly);
  const isValidating = ref(false);
  const items = ref([]);
  const errors = ref([]);
  async function validate() {
    const results = [];
    let valid = true;
    errors.value = [];
    isValidating.value = true;
    for (const item of items.value) {
      const itemErrorMessages = await item.validate();
      if (itemErrorMessages.length > 0) {
        valid = false;
        results.push({
          id: item.id,
          errorMessages: itemErrorMessages
        });
      }
      if (!valid && props.fastFail)
        break;
    }
    errors.value = results;
    isValidating.value = false;
    return {
      valid,
      errors: errors.value
    };
  }
  function reset() {
    items.value.forEach((item) => item.reset());
    model.value = null;
  }
  function resetValidation() {
    items.value.forEach((item) => item.resetValidation());
    errors.value = [];
    model.value = null;
  }
  watch(items, () => {
    let valid = 0;
    let invalid = 0;
    const results = [];
    for (const item of items.value) {
      if (item.isValid === false) {
        invalid++;
        results.push({
          id: item.id,
          errorMessages: item.errorMessages
        });
      } else if (item.isValid === true)
        valid++;
    }
    errors.value = results;
    model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
  }, {
    deep: true
  });
  provide(FormKey, {
    register: (_ref) => {
      let {
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2
      } = _ref;
      if (items.value.some((item) => item.id === id)) {
        consoleWarn(`Duplicate input name "${id}"`);
      }
      items.value.push({
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (id) => {
      items.value = items.value.filter((item) => {
        return item.id !== id;
      });
    },
    update: (id, isValid, errorMessages) => {
      const found = items.value.find((item) => item.id === id);
      if (!found)
        return;
      found.isValid = isValid;
      found.errorMessages = errorMessages;
    },
    isDisabled,
    isReadonly,
    isValidating,
    items,
    validateOn: toRef(props, "validateOn")
  });
  return {
    errors,
    isDisabled,
    isReadonly,
    isValidating,
    items,
    validate,
    reset,
    resetValidation
  };
}
function useForm() {
  return inject(FormKey, null);
}
const VForm = genericComponent()({
  name: "VForm",
  props: {
    ...makeFormProps()
  },
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": "v-form",
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const VTextField$1 = "";
const VField$1 = "";
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}
const VLabel$1 = "";
const VLabel = genericComponent()({
  name: "VLabel",
  props: {
    text: String,
    clickable: Boolean,
    ...makeThemeProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": props.clickable
        }]
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: {
    floating: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": ["v-field-label", {
        "v-field-label--floating": props.floating
      }],
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const allowedVariants = ["underlined", "outlined", "filled", "solo", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  color: String,
  dirty: Boolean,
  disabled: Boolean,
  error: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeThemeProps(),
  ...makeLoaderProps()
}, "v-field");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const isActive = computed(() => props.dirty || props.active);
    const hasLabel = computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => {
      return isActive.value && isFocused.value && !props.error && !props.disabled ? props.color : void 0;
    }));
    watch(isActive, (val) => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = slots["prepend-inner"] || props.prependInnerIcon;
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label,
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value],
        "style": [backgroundColorStyles.value, textColorStyles.value],
        "onClick": onClick
      }, attrs), [createVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["solo", "filled"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      }), createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label]
      }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [slots.clear ? slots.clear() : createVNode(InputIcon, {
          "name": "clear"
        }, null)]), [[vShow, props.dirty]])]
      }), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), createVNode("div", {
        "class": ["v-field__outline", textColorClasses.value]
      }, [isOutlined && createVNode(Fragment, null, [createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && createVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })]), createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), ["plain", "underlined"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })])]);
    });
    return {
      controlRef
    };
  }
});
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter((k) => !isOn(k));
  return pick(attrs, keys);
}
const VInput$1 = "";
const VMessages$1 = "";
const VMessages = genericComponent()({
  name: "VMessages",
  props: {
    active: Boolean,
    color: String,
    messages: {
      type: [Array, String],
      default: () => []
    },
    ...makeTransitionProps({
      transition: {
        component: VSlideYTransition,
        leaveAbsolute: true,
        group: true
      }
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value],
      "style": textColorStyles.value,
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const makeValidationProps = propsFactory({
  disabled: Boolean,
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: Boolean,
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = ref(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const isDisabled = computed(() => !!(props.disabled || (form == null ? void 0 : form.isDisabled.value)));
  const isReadonly = computed(() => !!(props.readonly || (form == null ? void 0 : form.isReadonly.value)));
  const errorMessages = computed(() => {
    return props.errorMessages.length ? wrapInArray(props.errorMessages).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const isValid = computed(() => {
    if (props.error || errorMessages.value.length)
      return false;
    if (!props.rules.length)
      return true;
    return isPristine.value ? null : true;
  });
  const isValidating = ref(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = computed(() => props.name ?? unref(id));
  const validateOn = computed(() => props.validateOn || (form == null ? void 0 : form.validateOn.value) || "input");
  useToggleScope(() => validateOn.value === "input", () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val)
            validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value === "blur", () => {
    watch(() => props.focused, (val) => {
      if (!val)
        validate();
    });
  });
  watch(isValid, () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    resetValidation();
    model.value = null;
  }
  function resetValidation() {
    isPristine.value = true;
    internalErrorMessages.value = [];
  }
  async function validate() {
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true)
        continue;
      if (typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result);
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = false;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeDensityProps(),
  ...makeValidationProps()
}, "v-input");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = computed(() => {
      if (errorMessages.value.length > 0) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, densityClasses.value, validationClasses.value]
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "class": "v-input__details"
      }, [createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate
    };
  }
});
const VCounter$1 = "";
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: {
    active: Boolean,
    max: [Number, String],
    value: {
      type: [Number, String],
      default: 0
    },
    ...makeTransitionProps({
      transition: {
        component: VSlideYTransition
      }
    })
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": "v-counter"
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "v-text-field");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value ?? "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value);
    function onFocus() {
      var _a;
      if (inputRef.value !== document.activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value)
        return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = VInput.filterProps(props);
      const [fieldProps] = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-text-field--flush-details": ["plain", "underlined"].includes(props.variant)
        }]
      }, rootAttrs, inputProps, {
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": "textbox"
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [props.prefix]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [props.suffix])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const videoUrl = ref("https://www.youtube.com/watch?v=2YLs33C72zo");
    const getVideoId = (url) => {
      const videoId = url.split("v=")[1];
      return videoId;
    };
    const embedUrl = computed(() => {
      const videoId = getVideoId(videoUrl.value);
      return `https://www.youtube.com/embed/${videoId}`;
    });
    const currentText = ref("");
    ref("");
    const cardHeight = ref("");
    ref("");
    const email = ref("");
    const loading = ref(false);
    const dialog = ref(false);
    const formSparkUrl = ref("https://submit-form.com/UxEzXm6O");
    const handleSubmit = async () => {
      loading.value = true;
      await axios.post(formSparkUrl.value, { email: email.value }).then((response) => {
        setTimeout(() => {
          loading.value = false;
          dialog.value = true;
          email.value = "";
        }, 250);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf459df9><div class="d-flex flex-column flex-sm-row justify-center align-center" style="${ssrRenderStyle([{ "gap": "2.5rem" }, `min-height: ${unref(cardHeight)}`])}" data-v-bf459df9><div class="d-flex flex-column w-100 w-sm-50 align-center align-sm-start text-center px-8 mx-sm-16" style="${ssrRenderStyle({ "gap": "1rem", "max-width": "840px", "min-width": "375px" })}" data-v-bf459df9><div class="d-none d-sm-flex w-100 align-center" data-v-bf459df9><span class="text-sm-h2 font-weight-bold mt-8 mt-sm-16 text-center" style="${ssrRenderStyle([{ "min-height": "50px", "width": "25%", "min-width": "200px" }, `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue};`])}" data-v-bf459df9>${ssrInterpolate(unref(currentText))}</span><span class="text-sm-h2 font-weight-bold mt-8 mt-sm-16" style="${ssrRenderStyle({ "min-height": "50px", "width": "75%" })}" data-v-bf459df9>문서를 <span class="text-sm-h2 font-weight-bold mt-8 mt-sm-16" style="${ssrRenderStyle([{ "min-height": "50px" }, `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue};`])}" data-v-bf459df9>받기 위한 </span></span></div><div class="d-flex d-sm-none mt-16" data-v-bf459df9><span class="text-h5 font-weight-bold" style="${ssrRenderStyle([{ "min-width": "125px" }, `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue};`])}" data-v-bf459df9>${ssrInterpolate(unref(currentText))}</span><span class="text-h5 font-weight-bold" data-v-bf459df9>문서를 <span class="text-h5 font-weight-bold" style="${ssrRenderStyle(`color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue};`)}" data-v-bf459df9>받기 위한 </span></span></div><div class="d-flex align-center" data-v-bf459df9><p class="text-h5 text-sm-h2 font-weight-bold mt-0" data-v-bf459df9> 가장 <span class="text-h5 text-sm-h2 font-weight-bold mt-0 mt-sm-16" style="${ssrRenderStyle(`color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue};`)}" data-v-bf459df9>간편하고 빠른</span> 방법 </p></div><div class="d-flex flex-column my-16 align-center" style="${ssrRenderStyle({ "gap": "0.5rem" })}" data-v-bf459df9><p class="text-subtitle-2 text-sm-h5 font-weight-bold px-8" data-v-bf459df9> 트레이서를 통해 문서를 받기 위한 번거로움에서 벗어나세요. </p></div>`);
      _push(ssrRenderComponent(VForm, {
        class: "d-flex align-center w-75",
        style: { "gap": "1rem" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(loading)) {
              _push2(ssrRenderComponent(VTextField, {
                class: "w-50",
                style: { "width": "12rem" },
                label: "이메일",
                placeholder: "이메일",
                "single-line": "",
                "hide-details": "",
                clearable: "",
                color: "blue",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VBtn, {
              loading: unref(loading),
              onClick: handleSubmit,
              style: [`width: ${unref(loading) ? "100%" : "30%"}`, { "height": "3rem" }],
              variant: "flat",
              color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-subtitle-2 text-sm-subtitle-1 font-weight-bold" style="${ssrRenderStyle(`color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`)}" data-v-bf459df9${_scopeId2}> 사전예약 </span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "text-subtitle-2 text-sm-subtitle-1 font-weight-bold",
                      style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                    }, " 사전예약 ", 4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              !unref(loading) ? (openBlock(), createBlock(VTextField, {
                key: 0,
                class: "w-50",
                style: { "width": "12rem" },
                label: "이메일",
                placeholder: "이메일",
                "single-line": "",
                "hide-details": "",
                clearable: "",
                color: "blue",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
              createVNode(VBtn, {
                loading: unref(loading),
                onClick: handleSubmit,
                style: [`width: ${unref(loading) ? "100%" : "30%"}`, { "height": "3rem" }],
                variant: "flat",
                color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue
              }, {
                default: withCtx(() => [
                  createVNode("span", {
                    class: "text-subtitle-2 text-sm-subtitle-1 font-weight-bold",
                    style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                  }, " 사전예약 ", 4)
                ]),
                _: 1
              }, 8, ["loading", "style", "color"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        class: "w-sm-25",
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "align-center py-4",
              style: { "height": "20rem" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "7rem",
                          color: "green"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-check-circle-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-check-circle-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-subtitle-1 font-weight-bold text-center mt-2" data-v-bf459df9${_scopeId3}> 사전예약이 완료되었습니다. </p>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "7rem",
                            color: "green"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check-circle-outline")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "text-subtitle-1 font-weight-bold text-center mt-2" }, " 사전예약이 완료되었습니다. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          style: { "min-width": "5rem" },
                          variant: "flat",
                          color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue,
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-subtitle-1 font-weight-bold" style="${ssrRenderStyle(`color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`)}" data-v-bf459df9${_scopeId4}> 확인 </span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  class: "text-subtitle-1 font-weight-bold",
                                  style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                                }, " 확인 ", 4)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            style: { "min-width": "5rem" },
                            variant: "flat",
                            color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue,
                            onClick: ($event) => dialog.value = false
                          }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "text-subtitle-1 font-weight-bold",
                                style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                              }, " 확인 ", 4)
                            ]),
                            _: 1
                          }, 8, ["color", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "d-flex flex-column justify-center align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "7rem",
                          color: "green"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-check-circle-outline")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-subtitle-1 font-weight-bold text-center mt-2" }, " 사전예약이 완료되었습니다. ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          style: { "min-width": "5rem" },
                          variant: "flat",
                          color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue,
                          onClick: ($event) => dialog.value = false
                        }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "text-subtitle-1 font-weight-bold",
                              style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                            }, " 확인 ", 4)
                          ]),
                          _: 1
                        }, 8, ["color", "onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "align-center py-4",
                style: { "height": "20rem" }
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "7rem",
                        color: "green"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-check-circle-outline")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-subtitle-1 font-weight-bold text-center mt-2" }, " 사전예약이 완료되었습니다. ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        style: { "min-width": "5rem" },
                        variant: "flat",
                        color: ("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.blue,
                        onClick: ($event) => dialog.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "text-subtitle-1 font-weight-bold",
                            style: `color: ${("twColors" in _ctx ? _ctx.twColors : unref(twColors)).palette.white};`
                          }, " 확인 ", 4)
                        ]),
                        _: 1
                      }, 8, ["color", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex w-50 video-style" data-v-bf459df9><iframe class="w-100"${ssrRenderAttr("src", unref(embedUrl))} style="${ssrRenderStyle({ "width": "20rem" })}" frameborder="0" data-v-bf459df9></iframe></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf459df9"]]);
export {
  index as default
};
//# sourceMappingURL=index-5a4c0239.js.map
