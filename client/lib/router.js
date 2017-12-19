Router.route('home', {path: '/'}); // Add this route
Router.route('solucoes_Inteligentes', function () {
  this.render('solucoesInteligentes');
});
