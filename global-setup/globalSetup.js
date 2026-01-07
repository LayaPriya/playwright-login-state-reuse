 import { chromium, expect } from '@playwright/test';

 export default async ()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole("button").click()
    await expect(page).toHaveURL(/dashboard/)
    await context.storageState({path : 'auth.json'})

 }
    


    