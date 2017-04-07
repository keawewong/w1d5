function sayHi() {
    return `Hi! :-)`;
}

function keaweSays(something) {
    console.log(`Keawe says, "${something()}"`);
}


module.exports = {
    greeting: function() {
        keaweSays(sayHi);
    }
}
