//imported test function from playwright
import test from "@playwright/test";

test.skip('First Test',async({browser})=>//Title,async function//only runs 
//that specific test only 
//skip -it skips the mentioned test
{

    //browser is a fixture which is inbuilt
    const context = await browser.newContext()//new tab
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
    
})
