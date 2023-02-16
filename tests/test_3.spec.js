const { test } = require('../lambdatest-setup');
const { expect } = require('@playwright/test');


test.describe('test 3', () => {
    test('Test Scenario 3', async ({ page }) => {

        await page.goto('https://www.lambdatest.com/selenium-playground');

        await page.locator('text = Input Form Submit').click();



        await page.locator('xpath = //*[@id="seleniumform"]/div[6]/button').click();

        //await page.pause();

        const mes = await page.evaluate(() => document.getElementById("name").validationMessage);
        var ker = 'Please fill out this field.'

        if (mes != ker) {
            ker = 'Fill out this field';
        }

        await expect(mes).toMatch(ker);

        await page.locator('id=name').fill('Uros');
        await page.locator('id=inputEmail4').fill('x2junior02@gmail.com');
        await page.locator('id=inputPassword4').fill('validpassword');
        await page.locator('id=company').fill('test');
        await page.locator('id=websitename').fill('test');
        await page.locator('//*[@id="seleniumform"]/div[3]/div[1]/select').selectOption({ label: 'United States' });
        await page.locator('id=inputCity').fill('test');
        await page.locator('id=inputAddress1').fill('test');
        await page.locator('id=inputAddress2').fill('test');
        await page.locator('id=inputState').fill('test');
        await page.locator('id=inputZip').fill('123');
        await page.locator('xpath = //*[@id="seleniumform"]/div[6]/button').click();

    })
})