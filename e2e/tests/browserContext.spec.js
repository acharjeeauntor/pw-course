import {test,expect,firefox} from "@playwright/test"

test.describe('Login Module',async()=>{
    test('has title2', async ({baseURL,browser }) => {
        //const context = (await browser.newContext()).clearCookies()
        const context = await browser.newContext()
        const page = await context.newPage()



      await page.goto(`${baseURL}`,{timeout:5000});
      await expect(page).toHaveTitle(/Google/,{timeout:10000});

      await context.close()
    });

    test('has title22', async ({baseURL }) => {
        const browser = await firefox.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

      await page.goto(`${baseURL}`,{timeout:5000});
      await expect(page).toHaveTitle(/Google/,{timeout:10000});

      await context.close()
    });
  })