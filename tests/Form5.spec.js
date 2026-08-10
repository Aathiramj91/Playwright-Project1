import {test,expect} from "@playwright/test";//expect is for assertion

test('Locator demo',async({page})=>
    {
       await page.goto("https://selenium.qabible.in/form-submit.php")
       await page.getByPlaceholder('First name').fill("xyz")//loactor by placeholder
       const lastname = page.getByPlaceholder("Last name")
       await lastname.fill("MJ")
       await page.locator("input[type='text'][id='validationCustomUsername']").fill("aath")//when giving double locators at a time
       await page.locator('input.form-control#validationCustom03').fill("delhi")//when using short cuts of id and class
       const state = page.getByPlaceholder("State")
       await state.fill("Kerala")
       const zip =page.getByPlaceholder("Zip")
       await zip.fill("0rt78")
       const checkbox = page.locator(".form-check-input")
       await checkbox.click()
       const button = page.locator('button[type="submit"]')
       await button.click()
       const messgae = page.locator(".my-2")
      const messagecheck = await messgae.textContent()
      console.log(messagecheck)

      expect (messagecheck).toContain("submitted successfully!")
      //expect (messagecheck).toContain("not")
        const visibleText=await messgae.isVisible()//for isVisisble()- check locator
    //isvisible() returns either true/flase
        console.log(visibleText)

      //assertion -to check a value
      await expect (visibleText).toBeTruthy()//tobetruthy doesnt return a value

      //Tobe visible-locator
      await expect(messgae).toBeVisible()
      //await expect(messgae).not.toBeVisible()

       await page.pause()
    })