// Zodiac Sign Data
var zodiacSigns = [
	{	
		sign: 'aries',
		signName: 'Aries',
		descriptionMale: "The Aries man is the most masculine male of the Zodiac, the manliest man. If you're Jane looking for Tarzan, you've found him. There is no one more romantic or more prepared to sweep you off your feet than an Aries male.",
		descriptionFemale: "Here is a woman who has it all, does it all, and wants it all. An Aries woman is a handful and a challenge. She will get the best out of you no matter what it takes. ",
		img: 'img/Aries.png'
	},
	{
		sign: 'taurus',
		signName: 'Taurus',
		descriptionMale: "The Taurus male is as reliable as the Rock of Gibraltar. He does not like change, so please don't rearrange the furniture. He wants to find it just where he left it. He wants to find you there, too. Taurus men can be very possessive, but the protection that goes along with it can make the relationship worthwhile.",
		descriptionFemale: "Taurus females are placid and sensuous. They are among the loveliest in the Zodiac, but you better have your act together when you come courting. Taurus women have a no-nonsense policy when it comes to personal entanglements.",
		img: 'img/Taurus.png'
	},
	{	
		sign: 'gemini',
		signName: 'Gemini',
		descriptionMale: "Every Gemini male has kissed the Blarney stone. You may find yourself charmed, even mesmerized by his quick wit, mercurial temperament, and trendy demeanor. Your Gemini man is up to date, street smart, savvy, and sophisticated.",
		descriptionFemale: "Gemini is the sign of doubling, whether it be double the trouble or double the fun. Or maybe it's the sign of half. Are you getting two for the price of one or someone who is only there half the time? No matter, a Gemini female is among the most desirable of the Zodiac. Marilyn Monroe was a Gemini icon.",
		img: 'img/Gemini.png'
	},
	{
		sign: 'cancer',
		signName: 'Cancer',
		descriptionMale: "Nurturing and comfort are so associated with women, that it is especially surprisingly and delightful to meet a Cancer man with these qualities. If you are looking for a mate to be in touch with your feelings, this is your guy. And to boot, Cancer men are known for their beguiling sense of humor.",
		descriptionFemale: "Crabs carry their shell on their back so they can hide in it and be safe. Cancer women can be shy and need reassurance. What they are most afraid of is rejection. What they have to offer is a motherly, caring, comforting aura that can personify the word woman.",
		img: 'img/Cancer.png'
	},
	{
		sign: 'leo',
		signName: 'Leo',
		descriptionMale: "It is pretty hard to feel down around a Leo man. His energy makes you want to stand tall, be your best, and do him proud. After all, a Leo man is the king of the Zodiac.",
		descriptionFemale: "The Leo woman is the queen of the Zodiac. She has royal prerogatives and a regal air. She is a ferocious protector and champion of the underdog who brings home the lion's share.",
		img: 'img/Leo.png'
	},
	{
		sign: 'virgo',
		signName: 'Virgo',
		descriptionMale: "Many of the most alluring movie stars are Virgo men. It is a very sexy sign. But this is also the sign of the flirt. Many Virgo males prefer to remain bachelors and enjoy the attention of a wide circle of female admirers. Think Keanu Reeves and Hugh Grant. ",
		descriptionFemale: "Virgo females, believe it or not, are one of the catches of the Zodiac. If you want to know what makes this modest lady so popular as a partner, you'll just have to take the time to get to know her. She'll win you over with her womanly ways.",
		img: 'img/Virgo.png'
	},
	{
		sign: 'libra',
		signName: 'Libra',
		descriptionMale: "The Libra man was born to form a partnership: business, social, or romantic. He lives to partner up. Be prepared for equal responsibility, and intelligent feedback is a must. The Libra man is looking for an intellectual connection even more than a physical one. ",
		descriptionFemale: "Libra women are natural leaders and great partners. They are able to experience another's viewpoint and anticipate his needs in a way that no other sign can. She is calm, cool, and collected, a good strategist, and an accurate sounding board. Life is a mirror and when you look in the eyes of this woman you will find an accurate reflection of your strengths and weaknesses.",
		img: 'img/Libra.png'
	},
	{
		sign: 'scorpio',
		signName: 'Scorpio',
		descriptionMale: "Scary, scary Scorpio man. At least he'd like you to think he is. These men are magnetic, compelling, and mysterious with a hint of danger. If you've ever been vibed out by one, you know what I'm talking about.",
		descriptionFemale: "Scorpio women have the reputation of being very sexual and powerful. They take love very seriously. Woe be unto those who betray their trust. For those who pass the infamous loyalty tests of these Scorpio females, there is a deep and abiding bond that transcends the ordinary.",
		img: 'img/Scorpio.png'
	},
	{
		sign: 'sagittarius',
		signName: 'Sagittarius',
		descriptionMale: "Somewhere between priest and clown, the Sagittarius man is always on the move with his heart on his sleeve. You might recognize him by his friendly gesture when he sees you across the room. Friendship and freedom are both indispensable for the male Sagittarius.",
		descriptionFemale: "Long, leggy, and athletic, Sagittarius women love their freedom and are open to all the possibilities of life. If you happen to come across a specimen in the wild, you may prefer to observe at a distance for a while before making a move. Taming these creatures takes patience, positive rewards, and the promise of even more open spaces to come.",
		img: 'img/Sagittarius.png'
	},
	{
		sign: 'capricorn',
		signName: 'Capricorn',
		descriptionMale: "Capricorn men can be fatherly and protective. If you are looking for someone to grow old with, he is a great bet. The goat will continue his affection through the years with eyes for no one but you.",
		descriptionFemale: "Capricorn women are ambitious and resourceful and thrive at home as well as in business. They have a serious and cautious nature and are not prone to emotional displays. They hide their gentle hearts under the guise of stern authority.",
		img: 'img/Capricorn.png'
	},
	{
		sign: 'aquarius',
		signName: 'Aquarius',
		descriptionMale: "Aquarius men are known for their fascinating aura and thrilling sex appeal. Clark Gable, Paul Newman, and John Travolta are good examples. Friendship is an important value for an Aquarian man, and he is usually looking to befriend a girl who shares his progressive views.",
		descriptionFemale: "Aquarius women are androgynous in nature with well-balanced male and female energy. Their highest value is friendship, not love. So don't get confused if you are deep in courtship and she's still referring to you as her best friend.",
		img: 'img/Aquarius.png'
	},
	{
		sign: 'pisces',
		signName: 'Pisces',
		descriptionMale: "Dreamy, poetic, and romantic, a Pisces man slips into your life, takes you by the hand, and shows you a beautiful world you never knew existed. This man really believes in soul mates and sensitivity and will make your dreams come true.",
		descriptionFemale: "Every movie star has a little bit of Pisces - glamour, fantasy, allure - everything that makes Hollywood what it is. Pisces women have a soulful quality that makes them very attractive to the opposite sex. They often act as muses for artists and inspire creative genius.",
		img: 'img/Pisces.png'
	}
]

// get results
function signResults() {

	var userData = document.getElementById('userData'),
		userSign = userData.elements["userSign"].value.toLowerCase(),
		userGender = userData.elements['gender'].value,
		userReset = document.getElementById('resetPage')

	// check to make sure the user input matchs a given zodiac sign
	if( userSign != zodiacSigns[0].sign && userSign != zodiacSigns[1].sign && userSign != zodiacSigns[2].sign && userSign != zodiacSigns[3].sign && userSign != zodiacSigns[4].sign && userSign != zodiacSigns[5].sign && userSign != zodiacSigns[6].sign && userSign != zodiacSigns[7].sign && userSign != zodiacSigns[8].sign && userSign != zodiacSigns[9].sign && userSign != zodiacSigns[10].sign && userSign != zodiacSigns[11].sign ) {
		alert("This didn't match any of our Zodiac Signs, please try again")
		return
	}

	// console user sign and gender
	console.log("Sign: " + userSign + ", Gender: " + userGender)

	// loop through zodiac objects
	for( var i = 0; i < zodiacSigns.length; i++) {
		if(userSign == zodiacSigns[i].sign) {
			// sign name
			document.getElementById("signName").textContent = zodiacSigns[i].signName + " - " + userGender
			// image
			document.getElementById('signImg').src = zodiacSigns[i].img
			if (userGender == 'Male') {
				// Male description
	 			document.getElementById("signInfo").textContent = zodiacSigns[i].descriptionMale 
			} else {
				// Female description
	 			document.getElementById("signInfo").textContent = zodiacSigns[i].descriptionFemale
			}
		}
	}
	
	// hide form from user
	userData.style.display = 'none'
	// show reset button
	userReset.style.display = 'inline-block'

}
function stopEnterKey (e) {
	var e = (e) ? e : ((event) ? event : null)
	var node = (e.target) ? e.target : ((e.srcElement) ? e.srcElement : null)
	if(e.keyCode == 13 && node.type=="text") { return false }
}
document.onkeypress = stopEnterKey





