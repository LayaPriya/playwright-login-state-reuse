 import { test, expect } from '@playwright/test';

    test('should reuse stored login state to open dashboard',async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await expect(page).toHaveURL(/dashboard/)
        
    })
