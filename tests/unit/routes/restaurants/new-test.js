import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | restaurants/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:restaurants/new');
    assert.ok(route);
  });
});
