//Radio Button demo
import test from "@playwright/test";

test('Radio demo',async({page})=>
    {
       await page.goto("https://selenium.qabible.in/simple-form-demo.php")
       const radioLink =  page.locator("[href='radio-button-demo.php']")
      await radioLink.click()
      const radioButton = page.getByRole("radio",{name:"Male"} )//radio is role, male is visible text
      await radioButton.first().click()
    })