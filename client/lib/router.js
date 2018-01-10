Router.route('home', {path: '/'}); // Add this route
Router.route('solucoes_Inteligentes', function () {
  this.render('solucoesInteligentes');
});
Router.route('exemplo', function () {
  this.render('exemplo_postagem');
});
Router.route('testeddssdf', function () {
  this.render('teste');
});
