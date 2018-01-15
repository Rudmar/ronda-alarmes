sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: '/home', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 1.0 },
    // https://support.google.com/webmasters/answer/178636?hl=en
    { page: '/solucoes_Inteligentes', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 },
  ];
});
