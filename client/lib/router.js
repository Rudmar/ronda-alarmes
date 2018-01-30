Router.route('home', {path: '/home'}); // Add this route
Router.route('solucoes_Inteligentes', function () {
  this.render('solucoesInteligentes');
});
// Primeiro se escolhe o nome que vai aparecer no link do site, depois o nome do template a ser usado
Router.route('/', function () {
  this.render('home');
});
Router.route('seguranca_para_empresas', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post1');
});
Router.route('principais_elementos_para_escolha_de_empresa_de_seguranca', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post2');
});
Router.route('porque_contratar_uma_empresa_de_seguranca', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post3');
});
Router.route('postagens', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('todos_posts');
});
