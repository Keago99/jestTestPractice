const capitalize = require('./capitalize');

test ('capitalize a string', () => {
    expect (capitalize("hello").toBe("Hello"));
});

