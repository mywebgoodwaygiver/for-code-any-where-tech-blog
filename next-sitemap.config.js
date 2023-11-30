
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.goodwaygiver.site/',
    exclude: ['/apple-touch-icon.png','/favicon.ico', '/manifest.webmanifest', '/tags/*'],
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}