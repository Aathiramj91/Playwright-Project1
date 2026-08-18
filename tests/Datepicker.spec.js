import{test,except} from "@playwright/test"

test("Date picker", async ({page})=>
{
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const enterdate = page.locator(".form-control.datepicker")
    await enterdate.click()
    const currentyearmonth = page.locator(".datepicker-days th.datepicker-switch")
    await currentyearmonth.click()

    const currentyear = page.locator(".datepicker-months th.datepicker-switch")
    await currentyear.click()

    const yearrange = page.locator(".datepicker-years th.datepicker-switch")
    const display_yearrange = await yearrange.textContent()
    
    console.log("The year range is:",display_yearrange)

    //Choosing date, month & year
    const selected_date = 25
    const selected_month = 9
    const selected_year =2045

    //while statement
    while(true)
    {
  
    const displayyearrange= await yearrange.textContent()
    
    //to split the displayyear as 2 strings - use split  method
    const splityear = displayyearrange.split("-")
    const startyear = splityear[0]//starting year
    const endyear = splityear[1]//end year
    console.log("Start year is :", startyear)
    console.log("End year is:", endyear)
    
    //condition to check year selected matches the year range displayed or not
    if(selected_year>=startyear && selected_year<=endyear)
    {
    break
    }
    //to check year selected is not in the range
     if(selected_year<startyear)
        {
            const previos_button = page.locator(".datepicker-years th.prev")
          await previos_button.click()
        }
        else
            {
                const next_button = page.locator(".datepicker-years th.next")
                await next_button.click()
            }}  
            //await page.getByText(selected_year.toString(),{exact:true}).first().click()//to convert number to string use toString()
           // await page.locator(".datepicker-years .year").nth(1).click()
            await page.locator(".datepicker-years .year",{hasText:selected_year.toString()}).click()
            gawait page.locator(".month").nth(selected_month-1).click()
            //await page.locator(".datepicker-days td.day", { hasText: "25" }).click();
            await page.locator(".datepicker-days td.day", { hasText: selected_date.toString()}).click();
            await page.pause()

})