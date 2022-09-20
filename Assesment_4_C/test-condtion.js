function test(obtained, expected) {
    if (JSON.stringify(obtained) === JSON.stringify(expected)) {
        console.log(`Test passed`);
    }
    else {
        console.log(`Test failed: expected: ${expected} but received: ${obtained}`);
    }
}

module.exports = {
    test
}
