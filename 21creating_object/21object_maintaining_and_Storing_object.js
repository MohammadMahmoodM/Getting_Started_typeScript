function main() {
    var mountains = [
        {
            name: "K2",
            height: 500,
            country: "Pakistan",
        },
        {
            name: "mounteurust",
            height: 600,
            country: "Maldeep",
        }
    ];
    console.log(mountains);
    mountains.forEach(function (mountain) {
        console.log("".concat(mountain.name, "-").concat(mountain.height, "-").concat(mountain.country));
    });
}
main();
