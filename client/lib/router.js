Router.route('home', {path: '/home'}); // Add this route
Router.route('solucoes_Inteligentes', function () {
  this.render('solucoesInteligentes');
});
Router.route('solucoes_Inteligentes/', function () {
  this.render('solucoesInteligentes');
});
// Primeiro se escolhe o nome que vai aparecer no link do site, depois o nome do template a ser usado
Router.route('exemplo', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('exemplo_postagem');
});
Router.route('/', function () {
  this.render('home');
});
Router.route('seguranca_para_empresas', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post1');
});

Router.route('seguranca_para_empresas/', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post1');
});
