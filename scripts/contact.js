console.log("coucuo");
$('#btnSend').click(function(e) {
    var name = document.getElementById('last_name');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    var mail = document.getElementById('email');

    if (!subject.value || !message.value) {
        alertify.error('Attention des champs sont vides');
    } else {
        $.ajax({
            url: "https://formspree.io/valentin.leon0@gmail.com",
            method: "POST",
            data: $('#contactForm').serialize(),
            dataType: "json"
        });
        e.preventDefault();
        alertify.success('Message envoyé');
    }
});