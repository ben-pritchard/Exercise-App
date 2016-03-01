angular.module('crossfit.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var chats = [{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'img/max.png'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'img/adam.jpg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'img/perry.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'img/mike.png'
  // }];

	var chats = [
	    {
	        "date": "March 1st, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/MINDBODY-company-logo-125x125.png",
	        "workout": "A. 5 Push Press + 5 Push Jerk: 6-7 sets, tough weight B. Row 2000m for time C1. SLER: 3×10/arm C2. Hip Slide: 3×8 C3. Quad Stretch: 3×20 sec/side D. Stretch",
	        "image/_alt": "MINDBODY-company-logo"
	    },
	    {
	        "date": "February 29th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/leap-year-125x125.png",
	        "workout": "A. Double-unders: 5 min B. Back Squat: 6×6; rest 90-120 sec C. amrap in 15 min Block Run 25 unbroken kettlebell swing, 53/35 D. Stretch",
	        "image/_alt": "leap year"
	    },
	    {
	        "date": "February 26th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/16_1_Mainsite_2000-125x125.jpg",
	        "workout": "CrossFit Open 16.1 Complete as many rounds and reps as possible in 20 minutes of: 25-ft. overhead walking lunge 8 burpees 25-ft. overhead walking lunge 8 chest-to-bar pull-ups Men lunge 95 lb. Women lunge 65 lb.",
	        "image/_alt": "16_1_Mainsite_2000"
	    },
	    {
	        "date": "February 25th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/kb-windmill-125x125.jpg",
	        "workout": "A. Band Face Pull + Ext Rot: 3×15 B1. RDL: 5×6, same weight as last week B2. Push-up: 5×5 @ 3030 C1. Barbell Row: 4×6, same weight as last week C2. DB Lateral Lunge: 4×6/leg D1. KB Windmill: 3×5/side D2. DB Pullover: 3×8-10 E. Side Plank: 3×30 sec F. Stretch",
	        "image/_alt": "kb windmill"
	    },
	    {
	        "date": "February 24th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/klokov-hspu.gif",
	        "workout": "A. EMOM for 10 min: 1) 2 tap swing + 2 kipping toe-to-bar 2) 20 unbroken double-unders B. TnG Power Clean technique: 5×5, light/smooth C. amrap in 3 min: 5 power clean, 135/95lbs 5 ring dip -rest 1 min- amrap in 3 min: 5 squat clean, 155/105lbs 5 handstand push-up -rest 1 min- 5 deadlift, 185/135lbs 5 push-up D. Stretch",
	        "image/_alt": "klokov hspu"
	    },
	    {
	        "date": "February 23rd, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2015/09/Wallballs-125x125.jpg",
	        "workout": "A. 1 Shoulder Press + 3 Push Press + 5 Push Jerk: 6-8 sets, heavier than last week B. amrap in 10 min: 20 double-unders 20 wall ball, 20/14lbs 20 box jump, 24/20″ (step down) C1. SLER: 3×15/arm C2. Ab wheel: 3×10 D. Stretch",
	        "image/_alt": "Wallballs"
	    },
	    {
	        "date": "February 22nd, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/Rowing-C2-rower-125x125.jpg",
	        "workout": "A. Double-unders: 6 min B. Back Squat: 5×8; rest 60-90 sec; add weight C. For time: Row 500m 30 burpees Run 500m 30 burpees Airdyne – 50 cals 30 burpees D. Stretch",
	        "image/_alt": "Rowing-C2-rower"
	    },
	    {
	        "date": "February 19th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/hr-friday-9-125x125.jpg",
	        "workout": "A. Ring Skills: 6-8 min B. For time: Run 800m 21 thrusters, 95/65lbs 9 pull-ups Run 400m 15 thrusters 15 pull-ups Run 200m 9 thrusters 21 pull-ups C. Stretch",
	        "image/_alt": "hr friday 9"
	    },
	    {
	        "date": "February 18th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2014/10/yates-row-125x125.jpg",
	        "workout": "A. Band Face Pull + Ext Rot: 3×12 B1. RDL: 4×8 B2. Push-up: 4×6-8 @ 30X1 C1. Barbell Row: 3×8 C2. DB Lateral Lunge: 3×8/leg D. Turkish Get-ups: 5 min (NOT for speed/time/reps) E. Side Plank: 3×30 sec/sde",
	        "image/_alt": "yates row"
	    },
	    {
	        "date": "February 17th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/bar-facing-burpee.gif",
	        "workout": "A. Skills Practice EMOM for 10 min: 1) 3-5 pistol/leg 2) 3-5 tap swing on rings or 1-3 muscle-up B. TnG Power Snatch technique: 5×3, light/smooth C. amrap in 7 min: 3 tng power snatch, 75/53lbs 6 overhead squat 9 bar-facing burpee D. Stretch",
	        "image/_alt": "bar facing burpee"
	    },
	    {
	        "date": "February 16th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/crossfit-open-2016-dates-330x220-125x125.jpg",
	        "workout": "Well, it’s another year and it’s time for another go’round of the CrossFit Open. For those who don’t know, the Open is worldwide event for people to compete in five different CrossFit workouts over the course of five weeks. Those with the best scores in their specific region are then invited to Regionals and winners […]",
	        "image/_alt": "crossfit-open-2016-dates-330x220"
	    },
	    {
	        "date": "February 16th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/froning-pj.gif",
	        "workout": "A. 1 Shoulder Press + 2 Push Press + 3 Push Jerk: 5-6 sets, moderate weight B. For time: 10-9-8-7-6-5-4-3-2-1 kettlebell swing toe-to-bar C1. SLER: 3×10/arm C2. Ab wheel: 3×10 D. Stretch",
	        "image/_alt": "froning pj"
	    },
	    {
	        "date": "February 15th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2015/01/wheels3-125x125.jpg",
	        "workout": "A. Double-unders: 5 min B. Back Squat: 5×10; rest 60-90 sec b/t sets C. amrap in 15 min: Block Run 10 clean, 95/65lbs 15 box jump, 24/20″ D. Stretch",
	        "image/_alt": "wheels3"
	    },
	    {
	        "date": "February 12th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2015/03/barkley-turrible-125x125.png",
	        "workout": "A. Jerk: Find 1RM B. “El Terrible” With a 30 min running clock, complete as much as possible of the following: 10 HSPU 20 calories on Airdyne 30 ring row 40 goblet squats 50 burpees 60 walking lunge 70 wall ball 80 kettlebell swings 90 squats Row 1000m **Exercises can be done in any order. Partition reps however you see fit. Just don’t stop moving for the entire […]",
	        "image/_alt": "barkley turrible"
	    },
	    {
	        "date": "February 11th, 2016",
	        "image": "http://www.crossfitmagnus.com/wp-content/uploads/2016/02/barbell-jumping-jacks.gif",
	        "workout": "A. Deadlift: Find 1RM B. amrap in 8 min: 8 hang power clean, 95/65lbs 8 burpee **compare to Week 4 C. SLER: 3×10/arm D. Stretch",
	        "image/_alt": "barbell-jumping-jacks"
	    }
	];

  return {
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
