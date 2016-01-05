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
//TODO: Make the picture display as more of a thumbnail
    var formattedPic = HTMLbioPic.replace("%data%", profile.propic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", profile.welcomeMessage);
    $("#header").append(formattedMessage);

profile.display();


var topTenTFBF = {
'tfbfLists': [{//TopFiveBottomFiveLists
  'name': 'Star Wars Characters - T5B5',
  'tFirst': 'Luke Skywalker',
  'tSecond': 'Darth Vader',
  'tThird': 'Chewbacca',
  'tFourth': 'Obi Wan Kenobi',
  'tFifth': 'It\'\ s a trap guy',
  'bFifth': 'Princess Leia',
  'bFourth': 'Jaba the Hut',
  'bThird': 'Darth Maul',
  'bSecond': 'Qui-Gon Jinn',
  'bFirst': 'Jar Jar Binks'
}, {
  'name': 'NFL NFC Teams 2015 - T5B5',
  'tFirst': 'Seahawks',
  'tSecond': 'Panthers',
  'tThird': 'Cardinals',
  'tFourth': 'Packers',
  'tFifth': 'Giants',
  'bFifth': 'Rams',
  'bFourth': 'Eagles',
  'bThird': '49ers',
  'bSecond': 'Falcons',
  'bFirst': 'Cowboys'
}, {

  'name': 'NFL AFC Teams 2015 - T5B5',
  'tFirst': 'Broncos',
  'tSecond': 'Patriots',
  'tThird': 'Steelers',
  'tFourth': 'Jets',
  'tFifth': 'Chiefs',
  'bFifth': 'Bears',
  'bFourth': 'Raiders',
  'bThird': 'Jaguars',
  'bSecond': 'Browns',
  'bFirst': 'Titans'
}, {
  'name': 'Baby Boy Names 2015 - T5B5',
  'tFirst': 'William',
  'tSecond': 'Nazar',
  'tThird': 'Juro',
  'tFourth': 'Jarodge',
  'tFifth': 'Nazir',
  'bFifth': 'Gurbanguly',
  'bFourth': 'George',
  'bThird': 'Brutus',
  'bSecond': 'Zander',
  'bFirst': 'Adolf'
}

]}

$("#workExperience").append(HTMLworkStart);