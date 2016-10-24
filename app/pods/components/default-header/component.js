import Ember from 'ember';
import jQuery from 'jquery';

export default Ember.Component.extend({

  classNames: ['header-container'],

  didInsertElement: function () {
    var ele = this.$();
    var eleHeight = ele.outerHeight(true);

    this.$().affix({
      offset: {
        bottom: function () {
          return jQuery('footer').outerHeight(true);
        }
      }
    });

    jQuery('.header-shim').css('height', eleHeight + 'px');
  }

});
