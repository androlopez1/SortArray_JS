
var array = [
    {
        "name": "Andres",
        "age": "27",
    }, {
        "name": "Oscar",
        "age": "25",
    }, {
        "name": "Mario",
        "age": "30",
    }
];

array.sort(function(a, b) {
    return parseFloat(a.age) - parseFloat(b.age);
});