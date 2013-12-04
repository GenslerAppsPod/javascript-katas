/*
    A boilerplate for qunit tests.
    author: Marlon Evangelista
    
    Each test should be atomic and independent (the widget is destroyed before every test).
    
    Use mocks/stubs whenever possible.
    
    The setup and teardown methods are optional.
    Don't forget to add 2 to the assertionCount parameter due to the module setup/teardown checks.
    
    Common assertions:
        equal(test, expectedValue, 'description'); // equivalent to ==
        deepEqual(test, expectedValue, 'description'); // equivalent to ===
        ok(test, 'description'); // test evaluates to truthy
*/
(function (gensler, $) {

    module("Architool", {
        setup: function () {
            var fixture = $('#qunit-fixture');
            fixture.architool();
            equal($('.gensler-architool').length, 1, 'tool is present');
        },
        teardown: function () {
            var fixture = $('#qunit-fixture');
            fixture.architool('destroy');
            equal($('.gensler-architool').length, 0, 'tool is destroyed');
        }
    });

    var assertionCount = 2; // include the assertions from setup and teardown
    test("Check components", assertionCount, function () {
        // your assertions here
    });

    asyncTest("Test Ajax", assertionCount, function () {
        // You will need to invoke start() at some point, typically in your "done" function.
    });

})(this.gensler, jQuery);