$("#btnSend").click(function() {
            window.open('mailto:valentin.leon0@gmail.com?subject=' + document.getElementById("subject").value + '&body=' + document.getElementById("message").value + '');
});

// Envoi de mail avec Ajax
// $('#btnSend').click(function() {
//     $.ajax({
//         type: 'POST',
//         url: 'https://mandrillapp.com/api/1.0/messages/send.json',
//         data: {
//             'key': 'WPGvXk3CZAHrZ11V0c0-2A',
//             'message': {
//                 'from_email': $('.email'),
//                 'to': [{
//                     'email': $('.email').val(),
//                     'name': $('.name').val(),
//                     'type': 'to'
//                 }],
//                 // optional merge variables. must also be setup on the list management side of mandrill
//                 'merge_vars': [{
//                     'rcpt': $('.email').val(),
//                     'vars': [{
//                         'name': 'PILGRIM',
//                         "content": 'Scott'
//                     }, {
//                         'name': 'YEARS',
//                         'content': '25'
//                     }]
//                 }],
//                 'autotext': 'true',
//                 'subject': $('.subject').val(),
//                 'html': $('.message').val()
//             }
//         }
//     }).done(function(response) {
//         console.log(response); // if you're into that sorta thing
//     });
// });