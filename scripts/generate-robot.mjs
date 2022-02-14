import { writeFileSync } from 'fs';

const crawlableRobotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://www.vannguyen-dev.com/sitemap.xml`;
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;
(function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in preview links
  const robotsTxt =
    process.env.VERCEL_ENV === 'production'
      ? crawlableRobotsTxt
      : uncrawlableRobotsTxt;
  writeFileSync('public/robots.txt', robotsTxt);
})();
