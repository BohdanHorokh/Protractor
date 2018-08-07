describe("Test Ahgular Site", function() {
    it("Test model element", function() {
        browser.get("https://angularjs.org");
        element(by.model("yourName")).sendKeys("Bohdan");
        element(by.binding("yourName")).getText().then(function(text) {
            console.log(text);
        });
    })
});