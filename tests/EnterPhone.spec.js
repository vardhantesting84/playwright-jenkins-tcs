import {test} from '@playwright/test'

test('Enter Name',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("input#phone").fill("9876543210")

    await page.waitForTimeout(3000)

})