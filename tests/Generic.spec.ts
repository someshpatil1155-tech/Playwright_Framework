import { test, expect } from '@playwright/test';


test('Mouse Operations', async ({ page }) => {
  
  await page.goto('/');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click();
  await page.waitForTimeout(3000);
  await page.locator("a#showSubMenu").hover();
  await page.waitForTimeout(5000);
  await page.locator("//a[text()='New Vendor']").click();
  await page.waitForTimeout(5000);
  await page.locator("//a[text()='My Account']").click();
  await page.waitForTimeout(2000);
  await page.locator("//input[@name='Customise']").click();
  await page.dragAndDrop('#cl2', '#cl6');
  await page.waitForTimeout(6000);
  let x = await page.locator("#cl6").textContent();
    console.log(x);


 // await page.waitForTimeout(2000);
  //await page.locator("//th[text()='Vendor Information:']").isVisible();

  
  await page.close();
});
