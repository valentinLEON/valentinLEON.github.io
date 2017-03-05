$('#btnSend').click(function(e) {
    var name = document.getElementById('last_name');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    var mail = document.getElementById('email');

    if (!subject.value || !message.value) {
        alertify.error('Attention des champs sont vides');
    } else {
        $.ajax({
            'type': "POST",
            'url': "https: //mandrillapp.com/api/1.0/messages/send.json",
            'data': {
                'key': "WPGvXk3CZAHrZ11V0c0",
                'message': {
                    'from_email': mail.value,
                    'to': [{
                        'email': 'valentin.leon0@gmail.com',
                        'type': 'to'
                    }],
                    'autotext': true,
                    'subject': subject.value,
                    'html': message.value
                }
            }
        }).done(function(response) {
            console.log(response);
        });
    }
});