let questListings = document.querySelectorAll('.questListing');
let filterButtons = document.querySelectorAll('.filter');

let questTitle = document.querySelector('#questTitle');
let questDesc = document.querySelector('#questDesc');

let questTitles = [
    'How Robin Became an Outlaw',
    'How Robin Met John',
    'How Robin Turned Butcher',
    'How John Entered the Service',
    'How the Sheriff Lost Servants',
    'How Robin Met Will',
    'How Robin Met Friar Tuck',
    'Who the Hell is Allan-a-Dale'
]

let questDescs = [
    '<p>Robin, in his vast wisdom, couldn\'t shoot a gun to save his life. He also couldn\'t shoot recreationally.</p><p>“Know you what you just did, stupid idiot?” the officer said. “You shot me in the foot. If I see your dumb ass around here again, you\'re going to prison.”</p>',
    '<p>“This fresh breeze stirs the blood, my guys,” he said, “and I\'ll be seeing what the gay world looks like in the direction of Casablanca. Just stay nearby, and I\'ll call you when you\'re needed.”</p><p>The fight waxed fast and furious. It was strength pitted against subtlety. The swift blows of the stranger went whistling around Robin\’s ducking head, while his own undercuts were fain to give the other an attack of indigestion.</p>',
    '<p>“Hey brother, how are you?” returned the butcher, civilly enough. “Doesn\'t matter where I\'m from. I am but a simple butcher, going to Lima to sell my flesh. It\'s Fair week, and my beef and mutton should fetch a good price.” and he laughed loudly at his jest.</p><p>“You don\'t look like you\'re from around here. So, where are you from?”</p>',
    '<p>The Sheriff noted John\'s queer figure and asked: “Who the hell is that?”</p><p>The shooting presently began, and the targets soon showed a fine reckoning. Last of all came the beggar\’s turn.</p><p>“By your leave,” he said loudly, “I’d shoot with anyone here, present at a mark of my own placing.” And he strode down the lists with a slender peeled sapling which he stuck upright in the ground. “There,” he said, “is a real good mark. Will anyone try it?”</p>',
    '<p>While the whole glade was filled with the savory smell of roasting venison and fat capons, Robin sat next to the Sheriff.</p><p>Several armed officers stepped forward, and they beat their opponents with such skill, that the Sheriff, who loved a good game as well as any, clapped his hands, forgetting where he was, and shouted, “Well done! I haven\'t seen anything like that in all of the Americas!”</p>',
    '<p>They heard someone coming up the road whistling gaily, as though he owned the whole world. And he wasn\'t a bad whistler either.</p><p>“If that isn\'t a gay bird!” Robin sang. “Let\'s lie low, and see what he\'s got for us.”</p>',
    '<p>“God\’s blessing on your heart!” he cried, clapping the burly fellow on the shoulder; “I would travel an hundred miles to find one who could match you!”</p><p>At this, Will laughed heartily. “There\'s a friar in Ottawa\’s Abbey--Tuck, I think--who can beat both of you,” he said.</p><p>Robin pricked up his ears at this comment. “Damn,” he said, “I\’ll be up all night until I meet this guy.”</p>',
    '<p>Robin let the singer pass, caroling on his way.</p><p>“It\'s not in me to disturb a light-hearted lover tonight,” he muttered, a memory of Marian coming back to him. “I hope she\'s good to him, and the wedding is a gay one!”</p><p>So Robin went back to his camp, where he told of the minstrel. “If any of you set on him after this,” he said, “bring him to me, \'cause I want to talk.”</p>'
]

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].onclick = function(event) {
        let currentlySelected = document.querySelector('.selectedIcon');
        questListings.forEach(function(element) {
            element.classList.add('hidden');
        });
        if (currentlySelected != filterButtons[i]) {
            if (currentlySelected != null) {
                currentlySelected.classList.remove('selectedIcon');
            }
            questListings.forEach(function(element) {
                //if element has same id as selected
                if (element.classList.contains(filterButtons[i].id))
                    element.classList.remove('hidden');
            });
            filterButtons[i].classList.add('selectedIcon');
            return;
        }
        questListings.forEach(function(element) {
            element.classList.remove('hidden');
        });
        currentlySelected.classList.remove('selectedIcon');
    }
}

questListings.forEach(function(element, index) {
    element.onclick = function(event) {
        document.getElementById('selected').removeAttribute('id');
        element.setAttribute('id', 'selected');
        questTitle.innerText = questTitles[index];
        questDesc.innerHTML = questDescs[index];
    }
})