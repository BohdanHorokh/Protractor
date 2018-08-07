describe("Banking suite", () => {
    
    beforeEach(() => {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking");
        browser.driver.manage().window().maximize();
    })
    
    it("Navigate to Banking Apps site", () => {
        let title = browser.getTitle();
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
    })

    // it("", () => {})
    it("Validate Customer login", () => {
        element(by.buttonText("Customer Login")).click();
        // browser.sleep(3000);
        element.all(by.css("#userSelect option")).then((items) => {
            items.forEach(item => item.getText().then(function(text) {
                console.log(text)
            }));
            items.forEach(item => item.getAttribute("value").then(function(text) {
                console.log(text)
            }))
        })
        // element(by.model("custId")).element(by.css("[value='2']")).click();
        element(by.model("custId")).$("[value='2']").click();
        element(by.buttonText("Login")).click();
        expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
        browser.sleep(3000);
    })
})