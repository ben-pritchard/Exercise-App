angular.module('crossfit.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
		getWorkouts: function() {
			// alert('it worked!');
			var parseWorkouts = function(response) {
				var tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = response.data;
				workouts = tmp.body.innerHTML;
				return workouts;
        // var items = $(tmp.body.children).find('.upcomingdinners li');
				//
        // var dinners = [];
        // for (var i = 0; i < items.length; i++) {
        //     var dinner = {
        //         Name: $(items[i]).children('a')[0].innerText,
        //         Date: $(items[i]).children('strong')[0].innerText
        //     };
        //     dinners.push(dinner);
        // }
				//
        // return dinners;
    	}

    return $http.get('http://www.crossfitmagnus.com/category/workout/')
			.then(function(response) {
				return parseWorkouts(response);
			});
		},
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };


});
