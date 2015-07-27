export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'inject-session-into-abilities',
    initialize(container) {
      container.injection('ability', 'session', 'torii:session');
    }
};
