const {By, Builder} = require('selenium-webdriver');
require('chromedriver');
let should = require('chai').should();

describe('Automation testing with Selenium and Js in w3schools page', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.w3schools.com/');

        // accept w3schools cookies
        await driver.findElement(By.id('accept-choices')).click();

        // select Js  tutorial
        await driver.findElement(By.id('navbtn_tutorials')).click();

        // select Js link
        await driver.findElement(By.xpath("//*[@href=\'/js/default.asp\']")).click();
    })
    it('should set the title of the page selected', async function () {
        let title = await driver.findElement(By.xpath("//h1")).getText();

        title.should.equal('JavaScript Tutorial');
    })
    it('should set the title of the paragraph of the fist div', async function () {
        const firstDiv = await driver.findElement(By.className('w3-panel w3-info intro'));
        const firstParagraphDiv = await firstDiv.findElement(By.xpath('.//p[1]')).getText();

        firstParagraphDiv.should.equal("JavaScript is the world's most popular programming language.");
    })
    it('should set the title of the hyperlink inside the fist div', async function () {
        const firstDiv = await driver.findElement(By.className('w3-panel w3-info intro'));
        const hyperlinkTitle = await firstDiv.findElement(By.xpath('.//a')).getText();

        hyperlinkTitle.should.equal('Start learning JavaScript now »');
    })
    after(function () {
        driver.quit();
    });
})