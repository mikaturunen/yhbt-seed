Polymer({
    is: 'seed-element',
    properties: {
        fancy: Boolean,
        author: {
            type: Object,
            value: function () {
                return {
                    name: 'Dimitri Glazkov',
                    image: 'http://addyosmani.com/blog/wp-content/uploads/2013/04/unicorn.jpg',
                };
            }
        },
    },
    ready: function () {
    },
    attached: function () {
    },
    detached: function () {
    },
    sayHello: function (greeting) {
        var response = greeting || 'Hello World!';
        return 'seed-element says, ' + response;
    },
    fireLasers: function () {
        this.fire('seed-element-lasers', { sound: 'Pew pew!' });
    }
});
