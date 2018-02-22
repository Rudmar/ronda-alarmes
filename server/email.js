import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check'

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtps://postmaster%40sandboxeeea8a7a195a4d939c30060e7a008c39.mailgun.org:52d89d27d643185515c33ca258eaa9b6@smtp.mailgun.org:465'
});

Meteor.methods({
  sendEmail: function(to, from, subject, text) {
    check([from, subject, text], [String]);
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text,
    });
  }
});
