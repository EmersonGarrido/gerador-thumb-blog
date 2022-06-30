import puppeteer, { Page } from 'puppeteer-core'
import { getOptions } from './chromeOptions'

let _page: Page | null

async function getPage(isDev: boolean): Promise<Page> {
  if (_page) {
    return _page
  }

  const options = await getOptions(isDev)
  const browser = await puppeteer.launch({
    ...options,
    ignoreDefaultArgs: ['--disable-extensions']
  })

  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(
  html: string,
  isDev: boolean,
  format: string,
): Promise<Buffer> {
  const page = await getPage(isDev)

  await page.setViewport({
    width: format === 'stories' ? 1080 : 1200,
    height: format === 'stories' ? 1920 : 628
  })

  await page.setContent(html)
  await page.evaluateHandle('document.fonts.ready');

  const file: any = await page.screenshot({ type: 'png' })

  return file
}
