describe("Banking suite", () => {
    
    beforeEach(() => {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking");
        browser.driver.manage().window().maximize();
    })
    
    it("Navigate to Banking Apps site", () => {
        let title = browser.getTitle();
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
    })

    it("Navigate to Banking Apps site", () => {
        let title = browser.getTitle();
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
    })

})