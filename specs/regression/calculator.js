describe("Calculator Angular app" , () => {

    var expected_text;

    beforeEach(() => {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();
        expected_text =  element(by.binding("latest")).getText();
    })

    afterEach(() => {
        browser.sleep(1000);
    })

    it("Should add 3 and 3 and reault equal 6", () => {
        expected_text.then((value) => {
            expect(value).toBe("6");
        })
    })

    it("Should add 3 and 3 and reault not equal 5", () => {
        expected_text.then((value) => {
            expect(value).not.toBe("5");
        })
    })

    it("Should add 3 and 3", () => {
        expected_text.then((value) => {
            expect(value).toBe("12");
        })
    })

})