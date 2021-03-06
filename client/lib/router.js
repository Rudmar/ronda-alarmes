Router.route('home', {path: '/home'}); // Add this route
Router.route('solucoes_inteligentes', function () {
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
Router.route('proteja_seu_imovel_enquanto_viaja', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post4');
});
Router.route('seguranca_para_residencia', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post5');
});
Router.route('cuidado_com_suas_postagens', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post6');
});
Router.route('seguranca_para_condominio', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post7');
});
Router.route('como_agir_durante_um_assalto', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post8');
});
Router.route('por_que_contratar_controle_de_acesso', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post9');
});
Router.route('como_evitar_falso_alarme', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('post10');
});
Router.route('postagens', function () {
  // Aqui vai o nome do template do site, nome dado no parametro <template name="exemplo_postagem">
  this.render('todos_posts');
});
