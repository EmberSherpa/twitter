export function initialize(container, application) {
  application.inject('service:user', 'store', 'service:store');
  application.inject('service:user', 'session', 'torii:session');
}

export default {
  name: 'inject-store-into-user-role-service',
  initialize: initialize
};
