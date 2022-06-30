import { NextApiRequest, NextApiResponse } from 'next';
import { getScreenshot } from './_lib/chromium';
import { getHtmlThumb } from './_lib/templates/storiesTemplate';

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  try {
    const query = req.query;

    const title = String(query.title);
    const image = String(query.image);

    const html = getHtmlThumb({ title, image });

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html');
      res.end(html);

      return;
    }

    const file = await getScreenshot(html, isDev, 'stories');

    res.statusCode = 200;

    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    );

    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    console.error(e);
  }
}
