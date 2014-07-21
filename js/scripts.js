var wiseBacronyms = function(phrase) {
  phrase = phrase.toLowerCase();
  var dictionary = {"a":"Accept differences",
                    "b":"Be kind",
                    "c":"Count your blessings",
                    "d":"Dream",
                    "e":"Express thanks",
                    "f":"Forgive",
                    "g":"Give freely",
                    "h":"Harm no one",
                    "i":"Imagine more",
                    "j":"Jettison anger",
                    "k":"Keep confidence",
                    "l":"Love truly",
                    "m":"Master something",
                    "n":"Nurture hope",
                    "o":"Open your mind",
                    "p":"Pack lightly",
                    "q":"Quell rumors",
                    "r":"Reciprocate",
                    "s":"Seek wisdom",
                    "t":"Touch hearts",
                    "u":"Understand",
                    "v":"Value truth",
                    "w":"Win graciously",
                    "x":"Xeriscape",
                    "y":"Yearn for peace",
                    "z":"Zealously support a worthy cause"
                    };
  var letters = phrase.split('');
  var result = [];

for (var index = 0; index < letters.length; index++) {
  result.push(dictionary[letters[index]]);
};

  return result.join(' ');
};

$(document).ready(function() {
  $('form#wise-bacronym').submit(function(event) {
    var phrase = $("input#wiseBacronyms").val();

    var result = wiseBacronyms(phrase);
    $(".bacronym").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
