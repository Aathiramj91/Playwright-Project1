import{test, expect} from "@playwright/test"
test("Alert Handling",async({page})=>
{
 await page.goto("https://selenium.qabible.in/index.php")
 const alerts = page.locator("#alert-modal")
 await alerts.click()
 const JSaletrs = page.getByRole('link', { name: 'Javascript Alert' })
 await JSaletrs.click()

 //const clickalert = page.getByRole('button',{name: 'Click me!'}).last()
  //using xpath
const clickalert = page.locator("//button[@class ='btn btn-warning']")
 //await clickalert.click()
 //JS ALERTS
 page.on("dialog",async dialog=>
 {
    await page.waitForTimeout(5000)
   // await dialog.accept()//handling JS alert for accept
await dialog.dismiss()
 })
 await clickalert.click()
 //to fetch text - you pressed ok
 const okmessage = await page.locator('#confirm-demo').textContent()
 console.log("The message is: ",okmessage)
 //assertion
 expect(okmessage).toContain("Cancel")
 await page.pause()
})