var profile = {
    'name': 'Bill Weidenborner',
    'welcomeMessage': '\"Greatest App Ever...\"',
    'interests': [
        'Creating', 'Innovating', 'Facilitating'
    ],
    'propic': 'TTimages/Me2.jpg'
}

profile.display = function() {

    var userName = HTMLheaderName.replace("%data%", profile.name);
    $("#header").prepend(userName);
};

    var formattedPic = HTMLbioPic.replace("%data%", profile.propic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", profile.welcomeMessage);
    $("#header").append(formattedMessage);

profile.display();

