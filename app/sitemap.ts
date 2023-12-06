import { MetadataRoute } from 'next'
import { getPostsMeta } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPosts = await getPostsMeta()

    const home = {
        url: 'https://www.goodwaygiver.site/',
        lastModified: new Date().toString(),
    }

    if (!allPosts) return [home]

    const posts = allPosts.map(post => ({
        url: `https://www.davegray.codes/posts/${post.id}`,
        lastModified: post.modified,
    }))

    // Date of most recent post
    home.lastModified = allPosts[0].date

    return [home, ...posts]
}