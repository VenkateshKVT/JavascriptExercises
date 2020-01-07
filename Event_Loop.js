function main() {
    console.log("I am A!");
    setTimeout(function exec() {
        console.log("I am E!");
    }, 1000);
    blockFn(3);
    console.log("I am D!");
}

function blockFn(timer) {
    let x = Date.now();
    console.log("I am B!");
    while((Date.now() - x) < 3000) {
        continue;
    }
    console.log("I am C!");
}

main();