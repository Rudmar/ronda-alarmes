sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: '/home', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 1.0 },
    // https://support.google.com/webmasters/answer/178636?hl=en
    { page: '/solucoes_Inteligentes', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 },
    { page: '/seguranca_para_empresas', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 },
    { page: '/principais_elementos_para_escolha_de_empresa_de_seguranca', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 },
  ];
});
