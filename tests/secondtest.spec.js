import test from "@playwright/test";

test('Amazon Page',async({browser})=>
{

    //fixture
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
    
})