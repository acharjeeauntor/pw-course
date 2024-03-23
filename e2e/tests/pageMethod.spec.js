import {test,expect} from "@playwright/test"

test.describe('Login Module',async()=>{
  test('has title', async ({ page,baseURL }) => {
    await page.goto(`${baseURL}`,{timeout:5000});
    //await page.close() // close the page
    // var x = await page.content()
    // console.log(x)
    // var x = await page.context()
    // console.log(x)
    // page.dragAndDrop()
    // await page.frameLocator("#aswift_0").locator("#ads")
    // page.getByAltText()
    // page.goBack()
    // page.goForward()
    // var x = page.isClosed()
    // console.log(x)
    // page.locator()
    //await page.pause()
    // await page.reload()
    // await page.route()
    // await page.screenshot({fullPage:true})
    // await page.video()
    // await page.setDefaultTimeout()
    //await page.setViewportSize({height:900,width:700})
    // var x = await page.viewportSize()
    // console.log(x)
    // var x = await page.title()
    // console.log(x)
    // var x = await page.url()
    // console.log(x)
    page.waitForEvent("download")
    page.waitForLoadState("load")
    page.waitForLoadState("networkidle")
    page.waitForLoadState("domcontentloaded")
    page.waitForRequest()
    page.waitForResponse()
    page.waitForURL('**/letxpath')
    page.waitForSelector("a")





    await expect(page).toHaveTitle(/Google/,{timeout:10000});
  });
  })