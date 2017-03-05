$('#btnSend').click(function() {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'WPGvXk3CZAHrZ11V0c0-2A',
            'message': {
                'from_email': 'valentin.leon0@gmail.com',
                'to': [{
                    'email': $('.email').val(),
                    'name': $('.name').val(),
                    'type': 'to'
                }],
                // optional merge variables. must also be setup on the list management side of mandrill
                'merge_vars': [{
                    'rcpt': $('.email').val(),
                    'vars': [{
                        'name': 'COOLFRIEND',
                        "content": 'Mike'
                    }, {
                        'name': 'YEARS',
                        'content': '27'
                    }]
                }],
                'autotext': 'true',
                'subject': 'EMAIL_SUBJECT_GOES_HERE',
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
});