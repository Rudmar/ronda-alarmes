import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Template } from 'meteor/templating';

Template.email.events({
  'click #send-email-button': function (event, template) {
    event.preventDefault();
    var toAddr = template.find('#email').value;
    var name = template.find('#name').value;
    var subj = template.find('#phone').value;
    var body = template.find('#message').value + '\n\n' + 'Telefone do contato: ' + template.find('#phone').value;
    if (subj == '') {
      alert("O campo telefone não pode estar em branco");
      console.log("Campo de telefone em branco");
    }
    else {
      Meteor.call('sendEmail', 'comercial@rondaalarmes.com.br', toAddr, name, body);
    };
    template.find('#name').value = '';
    template.find('#email').value = '';
    template.find('#phone').value = '';
    template.find('#message').value = '';
  }
})
