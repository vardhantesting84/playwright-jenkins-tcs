import {test} from '@playwright/test'

test('Enter Name',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("textarea#textarea").fill("Bangalore")

    await page.waitForTimeout(3000)

})