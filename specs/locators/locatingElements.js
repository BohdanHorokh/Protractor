describe("Locator testing ", () => {

    xit("User regestration form by model, className and buttonText", () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("Description");
        element(by.buttonText("Login")).click();

        browser.sleep(2000)

        element(by.className("ng-scope")).getText().then((text) => {
            expect(text).toContain("Home");
        })
    })

    xit("User regestration form by binding and id", () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();


        browser.sleep(2000)
    })

    it("Fullfill a table ", () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();


        browser.sleep(2000)
    })

    it("print the first row data ", () => {
            element(by.repeater("result in memory").row(0)).getText().then((value) => {
                console.log(value);
            })

            browser.sleep(2000)    
    })

    it("print the first сщд data ", () => {
        element.all(by.repeater("result in memory").column("result.timestamp")).getText().then((value) => {
            console.log(value);
        })

        browser.sleep(2000)    
    })

    it("print the  table data ", () => {
        element.all(by.repeater("result in memory")).getText().then((value) => {
            console.log(value);
        })

        browser.sleep(2000)    
    })

    it("print the first table in line data ", () => {
        element.all(by.repeater("result in memory")).getText().then((value) => {
            for (var i=0; i<value.length; i++) {
                element(by.repeater("result in memory").row(i)).getText().then((text) => {
                    console.log(text)
                })
            }
        })

        browser.sleep(2000)    
    })
})
