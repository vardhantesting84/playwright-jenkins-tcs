import {test} from '@playwright/test'

test('Enter Name',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("input#email").fill("sachin@gmail.com")

    await page.waitForTimeout(3000)

})