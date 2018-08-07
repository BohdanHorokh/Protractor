describe("Tets matchers" , () => {

    var expected_text;

    beforeEach(() => {
        browser.get("http://juliemr.github.io/protractor-demo/");
        expected_text =  browser.getTitle();
    })

    it("Should match title", () => {
        expected_text.then((value) => {
            expect(value).toEqual("Super Calculator");
        })
    })

    it("Should not match title", () => {
        expected_text.then((value) => {
            expect(value).not.toEqual("!Super Calculator");
        })
    })

    it("Should match partial title", () => {
        expected_text.then((value) => {
            expect(value).toMatch("Calculator");
        })
    })

})