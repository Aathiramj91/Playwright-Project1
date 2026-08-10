import {test,expect} from "@playwright/test";//expect is for assertion

test('Locator demo',async({page})=>
    {
       await page.goto("https://selenium.qabible.in/")
       //css -when taking any attribute= value
       //await page.locator("[href='simple-form-demo.php']").click()
       //if class attribute
       await page.locator(".nav-link").nth(1).click()
//using id as attribute
       await page.locator("#single-input-field").fill("Hi all")
      // await page.pause()//to pause test

})

test("checkbox",async({page}) =>
{
await page.goto("https://selenium.qabible.in/")
await page.locator(".nav-link").nth(1).click()
await page.locator("//a[@href='check-box-demo.php']").click()//xpath
const checkbox=await page.locator('.form-check-label').first()
await checkbox.check()
const ischeck = await checkbox.isChecked()
console.log(ischeck)
await expect(checkbox).toBeChecked()//assertion
await checkbox.uncheck()
//await expect(checkbox).toBeChecked()
await page.pause()//to pause test
})