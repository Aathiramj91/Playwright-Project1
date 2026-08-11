import {test,expect} from "@playwright/test";
test.only('Dropdown',async ({page})  =>
{
await page.goto("https://selenium.qabible.in/")
//GetbyRole
const inputform = page.getByRole("link",{name:"Input Form"})
await inputform.click()
const selectinput = page.getByRole("link",{name:"Select Input"})
await selectinput.click()
const dropelement1 = page.locator('#single-input-field')
const parent1 = page.locator('.card-body').first()
const child1 = parent1.locator('#single-input-field')//parent to child locator chaining
await child1.selectOption('Yellow')//dropdown options
const color = await child1.inputValue()
console.log("Value selected in dropdwon", color)
//assertion
const selectedcolor1 = page.locator('#message-one')//located selected color
const colormessage = await selectedcolor1.textContent()//to fetch text
console.log(colormessage)
//assertion
expect (colormessage).toContain(color)
//expect (colormessage).toContain("Selected Color : "+color)

await page.pause()

})
