/**
 * @fileoverview Closure Compiler externs for Facebook React.js 15.0.0
 * @see http://reactjs.org
 * @externs
 */

/**
 * @type {!Object}
 * @const
 * @suppress {const|duplicate}
 */
var React = {};

/**
 * @type {string}
 * @const
 */
React.version;

React.createClass = function(specification) {};
React.createFactory = function(reactClass) {};

/**
 * @param {*} componentClass
 * @return {boolean}
 * @deprecated
 */
React.isValidClass = function(componentClass) {};

/**
 * @param {?Object} object
 * @return {boolean} True if `object` is a valid component.
 */
React.isValidElement = function(object) {};

/**
 * @param {React.Component} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {React.Node}
 * @deprecated
 */
React.renderComponent = function(container, mountPoint, callback) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into the supplied `container`.
 *
 * @param {Function} constructor React component constructor.
 * @param {Object} props Initial props of the component instance.
 * @param {Element} container DOM element to render into.
 * @return {React.Node} Component instance rendered in `container`.
 */
React.constructAndRenderComponent = function(constructor, props, container) {};

/**
 * Constructs a component instance of `constructor` with `initialProps` and
 * renders it into a container node identified by supplied `id`.
 *
 * @param {Function} componentConstructor React component constructor
 * @param {Object} props Initial props of the component instance.
 * @param {string} id ID of the DOM element to render into.
 * @return {React.Node} Component instance rendered in the container node.
 */
React.constructAndRenderComponentByID = function(componentConstructor, props,
  id) {};

React.cloneElement = function(element, props) {};

/**
 * @interface
 */
React.ReactElement = function() {};

/**
 * @template P
 * @constructor
 * @param {P} props
 */
React.Component = function(props) {};

/**
 * @type {P}
 */
React.Component.prototype.props;

/**
 * @type {?}
 */
React.Component.prototype.state;

/**
 * @type {Object}
 */
React.Component.prototype.refs;

/**
 * @type {Object}
 */
React.Component.prototype.context;

/**
 * @type {Object}
 */
React.Component.prototype.defaultProps;

/**
 * @type {Object}
 * @protected
 */
React.Component.prototype.propTypes;

/**
 * @type {Object}
 * @protected
 */
React.Component.prototype.contextTypes;

/**
 * @type {Object}
 */
React.Component.prototype.mixins;

/**
 * @type {Object}
 */
React.Component.prototype.childContextTypes;

/**
 * @return {Object}
 */
React.Component.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
React.Component.prototype.getDefaultProps = function() {};

/**
 * @return {Object}
 */
React.Component.prototype.getChildContext = function() {};

/**
 * @param {React.Component} targetComponent
 * @return {React.Node}
 */
React.Component.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @param {Function=} callback
 */
React.Component.prototype.forceUpdate = function(callback) {};

/**
 * @return {boolean}
 */
React.Component.prototype.isMounted = function() {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
React.Component.prototype.setState = function(nextState, callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
React.Component.prototype.replaceState = function(nextState, callback) {};

/**
 * @protected
 */
React.Component.prototype.componentWillMount = function() {};

/**
 * @param {Element} element
 * @protected
 */
React.Component.prototype.componentDidMount = function(element) {};

/**
 * @param {Object} nextProps
 * @protected
 */
React.Component.prototype.componentWillReceiveProps = function(
  nextProps) {};

/**
 * @param {P} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
React.Component.prototype.shouldComponentUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
React.Component.prototype.componentWillUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @param {Element} rootNode
 * @protected
 */
React.Component.prototype.componentDidUpdate = function(
  prevProps, prevState, rootNode) {};

/**
 * @protected
 */
React.Component.prototype.componentWillUnmount = function() {};

/**
 * @param {Object} error
 * @param {Object} errorInfo
 * @protected
 */
React.Component.prototype.componentDidCatch = function(error, errorInfo) {};

/**
 * @protected
 */
React.Component.prototype.getDerivedStateFromProps = function() {};

/**
 * @param {Object} error
 * @protected
 */
React.Component.getDerivedStateFromError = function(error) {};

/**
 * @protected
 */
React.Component.prototype.getSnapshotBeforeUpdate = function() {};

/**
 * @return {React.Node}
 * @protected
 */
React.Component.prototype.render = function() {};

/**
 * @extends {React.Component}
 * @constructor
 */
React.PureComponent = function(props) {};

/**
 * @type {boolean}
 */
React.PureComponent.prototype.isPureReactComponent;

/**
 * Interface to preserve React attributes for advanced compilation.
 * @interface
 */
React.ReactAttribute = function() {};

/**
 * @type {Object}
 */
React.ReactAttribute.dangerouslySetInnerHTML;

/**
 * @type {string}
 */
React.ReactAttribute.__html;

/**
 * @type {string}
 */
React.ReactAttribute.key;

/**
 * @type {string}
 */
React.ReactAttribute.ref;

// Attributes not defined in default Closure Compiler DOM externs.
// http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
// It happens because React favors camelCasing over allinlowercase.
// How to update list:
//   1) Open http://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes
//   2) Github Search in google/closure-compiler for attribute.

/**
 * @type {boolean}
 */
React.ReactAttribute.allowFullScreen;

/**
 * @type {string}
 */
React.ReactAttribute.autoCapitalize;

/**
 * @type {boolean}
 */
React.ReactAttribute.autoComplete;

/**
 * @type {boolean}
 */
React.ReactAttribute.autoFocus;

/**
 * @type {boolean}
 */
React.ReactAttribute.autoPlay;

/** @type {string} */
React.ReactAttribute.charSet;

/**
 * @type {boolean}
 */
React.ReactAttribute.noValidate;

/**
 * @type {boolean}
 */
React.ReactAttribute.spellCheck;


// http://facebook.github.io/react/docs/events.html

/**
 * @type {Function}
 */
React.ReactAttribute.onCopy;

/**
 * @type {Function}
 */
React.ReactAttribute.onCut;

/**
 * @type {Function}
 */
React.ReactAttribute.onPaste;

/**
 * @type {Function}
 */
React.ReactAttribute.onCompositionEnd;

/**
 * @type {Function}
 */
React.ReactAttribute.onCompositionStart;

/**
 * @type {Function}
 */
React.ReactAttribute.onCompositionUpdate;

/**
 * @type {Function}
 */
React.ReactAttribute.onKeyDown;

/**
 * @type {Function}
 */
React.ReactAttribute.onKeyPress;

/**
 * @type {Function}
 */
React.ReactAttribute.onKeyUp;

/**
 * @type {Function}
 */
React.ReactAttribute.onFocus;

/**
 * @type {Function}
 */
React.ReactAttribute.onBlur;

/**
 * @type {Function}
 */
React.ReactAttribute.onChange;

/**
 * @type {Function}
 */
React.ReactAttribute.onInput;

/**
 * @type {Function}
 */
React.ReactAttribute.onInvalid;

/**
 * @type {Function}
 */
React.ReactAttribute.onSubmit;

/**
 * @type {Function}
 */
React.ReactAttribute.onClick;

/**
 * @type {Function}
 */
React.ReactAttribute.onAuxClick;

/**
 * @type {Function}
 */
React.ReactAttribute.onContextMenu;

/**
 * @type {Function}
 */
React.ReactAttribute.onDoubleClick;

/**
 * @type {Function}
 */
React.ReactAttribute.onDrag;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragEnd;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragEnter;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragExit;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragLeave;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragOver;

/**
 * @type {Function}
 */
React.ReactAttribute.onDragStart;

/**
 * @type {Function}
 */
React.ReactAttribute.onDrop;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseDown;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseEnter;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseLeave;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseMove;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseOut;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseOver;

/**
 * @type {Function}
 */
React.ReactAttribute.onMouseUp;

/**
 * @type {Function}
 */
React.ReactAttribute.onSelect;

/**
 * @type {Function}
 */
React.ReactAttribute.onTouchCancel;

/**
 * @type {Function}
 */
React.ReactAttribute.onTouchEnd;

/**
 * @type {Function}
 */
React.ReactAttribute.onTouchMove;

/**
 * @type {Function}
 */
React.ReactAttribute.onTouchStart;

/**
 * @type {Function}
 */
React.ReactAttribute.onScroll;

/**
 * @type {Function}
 */
React.ReactAttribute.onWheel;

/**
 * @type {Function}
 */
React.ReactAttribute.onAbort;
React.ReactAttribute.onCanPlay;
React.ReactAttribute.onCanPlayThrough;
React.ReactAttribute.onDurationChange;
React.ReactAttribute.onEmptied;
React.ReactAttribute.onEncrypted;
React.ReactAttribute.onEnded;
React.ReactAttribute.onError;
React.ReactAttribute.onLoadedData;
React.ReactAttribute.onLoadedMetadata;
React.ReactAttribute.onLoadStart;
React.ReactAttribute.onPause;
React.ReactAttribute.onPlay;
React.ReactAttribute.onPlaying;
React.ReactAttribute.onProgress;
React.ReactAttribute.onRateChange;
React.ReactAttribute.onSeeked;
React.ReactAttribute.onSeeking;
React.ReactAttribute.onStalled;
React.ReactAttribute.onSuspend;
React.ReactAttribute.onTimeUpdate;
React.ReactAttribute.onVolumeChange;
React.ReactAttribute.onWaiting;
React.ReactAttribute.onAnimationStart;
React.ReactAttribute.onAnimationEnd;
React.ReactAttribute.onAnimationIteration;
React.ReactAttribute.onTransitionEnd;
React.ReactAttribute.onToggle;

// not a real attribute, but used for selenium testing
React.ReactAttribute.tid;

// svg attributes
React.ReactAttribute.alignmentBaseline;
React.ReactAttribute.cx;
React.ReactAttribute.cy;
React.ReactAttribute.strokeLinecap;
React.ReactAttribute.strokeWidth;
React.ReactAttribute.fillOpacity;
React.ReactAttribute.fillRule;
React.ReactAttribute.strokeWidth;
React.ReactAttribute.tableValues;
React.ReactAttribute.textAnchor;
React.ReactAttribute.viewBox;
React.ReactAttribute.xmlns;
React.ReactAttribute.xmlnsXlink;
React.ReactAttribute.x1;
React.ReactAttribute.x2;
React.ReactAttribute.y1;
React.ReactAttribute.y2;

/**
 * @interface
 */
React.SyntheticEvent = function() {};

/**
 * @return {boolean}
 */
React.SyntheticEvent.prototype.persist = function() {};

/**
 * @type {?}
 */
React.SyntheticEvent.prototype.nativeEvent;

/**
 * @type {Function}
 */
React.SyntheticEvent.prototype.preventDefault;

/**
 * @type {Function}
 */
React.SyntheticEvent.prototype.stopPropagation;

/**
 * @type {?}
 */
React.SyntheticEvent.prototype.target;

/**
 * @type {Object}
 * @const
 */
React.DOM = {};

/**
 * A React element (ie. <MyComponent />).
 * @interface
 */
React.Element;

/**
 * Anything that can be rendered: numbers, strings, elements or an array
 * (or fragment) containing these types.
 *
 * @typedef {
 *   null|boolean|number|string|React.Element|Array<React.Node>
 * }
 */
React.Node;

/**
 * @template P
 * @param {React.Component|function(P)|string} type
 * @param {P} props
 * @param {...(React.Node|undefined|function(?))} children
 * @return {React.Element}
 */
React.createElement = function(type, props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.area = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.article = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.aside = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.base = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.bdi = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.bdo = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.big = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.blockquote = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.canvas = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.caption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.cite = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.clipPath = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.data = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.datalist = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.defs = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.del = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.details = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.dfn = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.dialog = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.ellipse = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.figcaption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.figure = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.head = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.html = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.image = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.input = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.ins = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.kbd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.keygen = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.linearGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.link = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.main = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.map = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.mark = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.mask = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.menu = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.menuitem = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.meta = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.meter = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.noscript = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.output = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.pattern = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.picture = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.polygon = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.progress = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.q = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.radialGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.rp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.rt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.ruby = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.s = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.samp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.script = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.stop = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.style = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.summary = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.sup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.text = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.track = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.tspan = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.var = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.Node} children
 * @return {React.Node}
 * @protected
 */
React.DOM.wbr = function(props, children) {};

/**
 * @typedef {function(boolean, boolean, Object, string, string, string): boolean} React.ChainableTypeChecker
 */
React.ChainableTypeChecker;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.weak;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.weak.isRequired;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.isRequired;

/**
 * @type {React.ChainableTypeChecker}
 */
React.ChainableTypeChecker.isRequired.weak;

/**
 * @type {Object}
 */
React.PropTypes = {
  /** @type {React.ChainableTypeChecker} */
  any: function() {},
  /** @type {React.ChainableTypeChecker} */
  array: function() {},
  /**
   * @param {React.ChainableTypeChecker} typeChecker
   * @return {React.ChainableTypeChecker}
   */
  arrayOf: function(typeChecker) {},
  /** @type {React.ChainableTypeChecker} */
  bool: function() {},
  /** @type {React.ChainableTypeChecker} */
  component: function() {},
  /** @type {React.ChainableTypeChecker} */
  element: function() {},
  /** @type {React.ChainableTypeChecker} */
  func: function() {},
  /**
   * @param {function (new:Object, ...*): ?} expectedClass
   * @return {React.ChainableTypeChecker}
   */
  instanceOf: function(expectedClass) {},
  /** @type {React.ChainableTypeChecker} */
  node: function() {},
  /** @type {React.ChainableTypeChecker} */
  number: function() {},
  /** @type {React.ChainableTypeChecker} */
  object: function() {},
  /**
   * @param {React.ChainableTypeChecker} typeChecker
   * @return {React.ChainableTypeChecker}
   */
  objectOf: function(typeChecker) {},
  /**
   * @param {Array.<*>} expectedValues
   * @return {React.ChainableTypeChecker}
   */
  oneOf: function(expectedValues) {},
  /**
   * @param {Array.<React.ChainableTypeChecker>} typeCheckers
   * @return {React.ChainableTypeChecker}
   */
  oneOfType: function(typeCheckers) {},
  /** @type {React.ChainableTypeChecker} */
  renderable: function() {},
  /** @type {React.ChainableTypeChecker} */
  /**
   * @param {Object.<React.ChainableTypeChecker>} shapeTypes
   * @return {React.ChainableTypeChecker}
   */
  shape: function(shapeTypes) {},
  /** @type {React.ChainableTypeChecker} */
  string: function() {}
};

/**
 * @type {Object}
 */
React.Children;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 * @return {Object|undefined} Object containing the ordered map of results.
 */
React.Children.map;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 */
React.Children.forEach;

/**
 * @param {Object} children Children tree container.
 * @return {Object|undefined}
 */
React.Children.only;

/**
 * @param {Object} children Children tree container.
 * @return {Array.<Object>} Flat array of children.
 */
React.Children.toArray;

/**
 * React event system creates plugins and event properties dynamically.
 * These externs are needed when consuming React as a JavaScript module
 * in light of new ClojureScript compiler additions (as of version 1.9.456).
 * See the following link for an example.
 * https://github.com/facebook/react/blob/c7129c/src/renderers/dom/shared/eventPlugins/SimpleEventPlugin.js#L43
 */
var ResponderEventPlugin;
var SimpleEventPlugin;
var TapEventPlugin;
var EnterLeaveEventPlugin;
var ChangeEventPlugin;
var SelectEventPlugin;
var BeforeInputEventPlugin;

var bubbled;
var captured;
var topAbort;
var topAnimationEnd;
var topAnimationIteration;
var topAnimationStart;
var topBlur;
var topCancel;
var topCanPlay;
var topCanPlayThrough;
var topClick;
var topClose;
var topContextMenu;
var topCopy;
var topCut;
var topDoubleClick;
var topDrag;
var topDragEnd;
var topDragEnter;
var topDragExit;
var topDragLeave;
var topDragOver;
var topDragStart;
var topDrop;
var topDurationChange;
var topEmptied;
var topEncrypted;
var topEnded;
var topError;
var topFocus;
var topInput;
var topInvalid;
var topKeyDown;
var topKeyPress;
var topKeyUp;
var topLoad;
var topLoadedData;
var topLoadedMetadata;
var topLoadStart;
var topMouseDown;
var topMouseMove;
var topMouseOut;
var topMouseOver;
var topMouseUp;
var topPaste;
var topPause;
var topPlay;
var topPlaying;
var topProgress;
var topRateChange;
var topReset;
var topScroll;
var topSeeked;
var topSeeking;
var topStalled;
var topSubmit;
var topSuspend;
var topTimeUpdate;
var topTouchCancel;
var topTouchEnd;
var topTouchMove;
var topTouchStart;
var topTransitionEnd;
var topVolumeChange;
var topWaiting;
var topWheel;

React.Fragment = function() {};

/* 16.3.0 new API */
/**
 * @param {Object} opt_defaults
 */
React.createContext = function(defaults) {};

React.Context = function() {};
React.Context.prototype.Provider = function() {};
React.Context.prototype.Consumer = function() {};

React.createRef = function() {};
React.forwardRef = function(fn) {};

React.StrictMode = function () {};

// https://github.com/facebook/react/blob/master/packages/shared/isTextInputElement.js#L13-L29
// Closure will rename these properties during optimization
// But these are used dynamically to check against element props so they must not be renamed.
var isTextInputElement = {};
isTextInputElement.supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};

// 16.6 new api

React.Suspense = function() {};
React.Suspense.prototype.maxDuration;
/**
 * @template p
 * @param {function(p): React.Element} component
 */
React.memo = function(component) {};
React.lazy = function() {};
React.unstable_ConcurrentMode = function() {};
React.unstable_Profiler = function() {};

// 16.8 Hooks

React.useState = function(state) {};
/**
 * @param {Function} fn
 * @param {Array=} arr
 */
React.useEffect = function(fn, arr) {};
React.useContext = function(context) {};
/**
 * @param {Function}reducer
 * @param {Object} initialArgs
 * @param {Function=} init
 */
React.useReducer = function(reducer, initialArgs, init) {};
/**
 * @template {!Function} T
 * @param {T} fn
 * @param {!Array} deps
 * @return {T}
 */
React.useCallback = function(fn, deps) {};
React.useMemo = function(fn, deps) {};
/** @param {?=} initialValue */
React.useRef = function(initialValue) {};
React.useImperativeHandle = function() {};
React.useLayoutEffect = function() {};
React.useDebugValue = function() {};

// 16.8, for some reason renaming unstable Scheduler function calls don't work
// with Closure node module processing.
// unstable_now caused problems with Reagent tests.
// These aren't neede for foreign-libs use, just :npm-deps!

var Scheduler = {
  unstable_ImmediatePriority: function() {},
  unstable_UserBlockingPriority: function() {},
  unstable_NormalPriority: function() {},
  unstable_IdlePriority: function() {},
  unstable_LowPriority: function() {},
  unstable_runWithPriority: function() {},
  unstable_next: function() {},
  unstable_scheduleCallback: function() {},
  unstable_cancelCallback: function() {},
  unstable_wrapCallback: function() {},
  unstable_getCurrentPriorityLevel: function() {},
  unstable_shouldYield: function() {},
  unstable_continueExecution: function() {},
  unstable_pauseExecution: function() {},
  unstable_getFirstCallbackNode: function() {},
  unstable_now: function() {}
};
