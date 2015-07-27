export function initialize(container) {
  container.injection('service:current-user', 'session', 'torii:session');
}

export default {
  name: 'inject-session',
  initialize: initialize
};
