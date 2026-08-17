

import{test, expect} from "@playwright/test"
test("Alert Handling",async({page})=>
{
 await page.goto("https://selenium.qabible.in/index.php")
 const alertmenu = page.locator("#alert-modal")
 await alertmenu.click()
 const bootstrap_var = page.getByRole('link',{name:'Bootstrap Modal'})
 await bootstrap_var.click()
 const launch_button = page.locator(".btn.btn-primary").first()
 await launch_button.click()
 //const savebutton = page.getByText("Save changes").first()
 //await savebutton.click()
 const modal = page.getByRole("document")
 await modal.click()
 const savechange_button =modal.getByText("Save changes").first()
 await savechange_button.click()

 const close_button = modal.locator(".btn.btn-secondary").first()
 await close_button.click()
 
 await page.pause()


})