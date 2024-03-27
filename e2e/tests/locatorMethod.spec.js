import {test,expect} from "@playwright/test"

test.describe('Locator Method',async()=>{
  test('Locator Method', async ({ page,baseURL }) => {
    await page.goto(`${baseURL}`,{timeout:5000});
    await page.pause()
    var inputLocator = await page.locator('form [title="Search"]')
    await inputLocator.click()
    await inputLocator.fill("test")
    await inputLocator.clear()
    await inputLocator.count()
    await inputLocator.dblclick()
    await inputLocator.first().click()
    await inputLocator.last().click()
    await inputLocator.nth(2).click() // Started from 0
    await inputLocator.filter({
        hasText:'Search'
    }).click()
    await inputLocator.focus()
    await inputLocator.hover()
   

  });
  test.only('Locator Method2', async ({ page,baseURL }) => {
    await page.goto(`https://letcode.in/buttons`);
    await page.waitForTimeout(4000)
    var colorLocator = await page.locator('#color')
    await colorLocator.getAttribute('class')
    console.log(await colorLocator.innerHTML())
    console.log(await colorLocator.innerText())
    console.log(await page.locator('.card').nth(0).innerHTML())

    await colorLocator.isChecked()
    await colorLocator.isDisabled()
    await colorLocator.isEnabled()
    await colorLocator.isEditable()
    await colorLocator.isVisible()
    await colorLocator.isHidden()
    await colorLocator.locator().click()
    await colorLocator.press()
    await colorLocator.tap()
    await colorLocator.screenshot()
    await colorLocator.selectOption()
    await colorLocator.check()
    await colorLocator.uncheck()
    await colorLocator.textContent()
    await colorLocator.waitFor({state:'visible'})
    await colorLocator.waitFor({state:'attached'})
    await colorLocator.waitFor({state:'hidden'})


  })
  })



  