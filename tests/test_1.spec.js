const { test } = require('../lambdatest-setup');
const { expect } = require('@playwright/test');

test.describe('test 1', () => {
  test('Test Scenario 1', async ({ page }) => {
    var mes = 'Welcome to LambdaTest';

    await page.goto('https://www.lambdatest.com/selenium-playground');

    await page.locator('text=Simple Form Demo').click();

    await expect(page.url()).toContain('simple-form-demo');

    await page.locator('//*[@id="user-message"]').locator('nth=0').fill(mes);
    await page.locator('id=showInput').click();

    await page.locator('xpath = //*[@id="message"]').waitFor();
    var ker = await page.locator('xpath = //*[@id="message"]').innerHTML();

    await expect(ker).toMatch(mes);
  })
})