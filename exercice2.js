function testScope() {
    if (true) {
        var a ="var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a);
    console.log(b);
}
testScope();

