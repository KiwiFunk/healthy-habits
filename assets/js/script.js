// Card Contents

class CardContents{
    constructor(heading, mainText, extraText, image, imagealt, linkname, linkhref){
        this.heading = heading;
        this.mainText = mainText;
        this.extraText = extraText;
        this.image = image;
        this.imagealt = imagealt;
        this.linkname = linkname;
        this.linkhref = linkhref;
    }
}

//Creating an array of card contents

const cardContentsArray = [
    {
        heading: "Eat Healthy",
        mainText: `A balanced diet rich in nutrients not only fuels your body but also supports brain health, 
            improving mood, reducing anxiety, and boosting overall mental well-being.`,
        extraText: `Essential nutrients like omega-3 fatty acids, B vitamins, and antioxidants play crucial 
            roles in maintaining cognitive function, regulating neurotransmitters, and protecting against stress-related mental health issues.`,
        image: "assets/images/EatHealthy.webp",
        imagealt: "Mascot holding an apple",
        linkname: "Learn More",
        linkhref: "details.html?details=eathealthy"
    },
    {
        heading: "Manage Stress",
        mainText: `Effective stress management is vital for maintaining mental health and emotional balance, 
            as chronic stress can lead to anxiety, depression, and various physical health problems when left unchecked.`,
        extraText: `Learning to recognize stress triggers and developing healthy coping mechanisms, such as 
            exercise, meditation, or talking with friends, can significantly improve your quality of life and protect your long-term mental well-being.`,
        image: "assets/images/Stress.webp",
        imagealt: "Mascot looking stressed with a coffee cup",
        linkname: "Learn More",
        linkhref: "details.html?details=managestress"
    },
    {
        heading: "Learn New Things",
        mainText: `Learning new skills and hobbies keeps your mind active and engaged, promoting cognitive 
            flexibility and creating new neural connections that help maintain brain health and mental sharpness.`,
        extraText: `This mental stimulation not only enhances problem-solving abilities but also boosts 
            self-confidence and provides a sense of accomplishment, contributing to overall emotional well-being and life satisfaction.`,
        image: "assets/images/Learn.webp",
        imagealt: "Mascot playing guitar",
        linkname: "Learn More",
        linkhref: "details.html?details=newskills"
    },
    {
        heading: "Regular Exercise",
        mainText: `Regular exercise is great for mental health, releasing endorphins and other mood-enhancing chemicals 
            that naturally reduce stress, anxiety, and depression while improving overall emotional well-being.`,
        extraText: `Physical activity also promotes better sleep patterns, increases energy levels, and boosts self-esteem,
            creating a positive cycle that enhances both physical and mental health outcomes.`,
        image: "assets/images/Exercise.webp",
        imagealt: "Mascot Exercising",
        linkname: "Learn More",
        linkhref: "details.html?details=regularexercise"
    },
    {
        heading: "Spend Time Outdoors",
        mainText: `Spending time in nature has been scientifically proven to reduce stress levels, lower blood pressure, 
            and decrease anxiety by exposing us to natural environments that promote relaxation and mental restoration.`,
        extraText: `Additionally, being outdoors increases exposure to vitamin D from sunlight, boosts serotonin production,
            and helps establish a stronger connection with the natural world, leading to improved mood and emotional balance.`,
        image: "assets/images/Nature.webp",
        imagealt: "Mascot in nature with a bird on their paw",
        linkname: "Learn More",
        linkhref: "details.html?details=outdoors"
    },
    {
        heading: "Practice Mindfulness",
        mainText: `Mindfulness practice helps reduce stress and anxiety by training your mind to stay present in the moment, 
            rather than worrying about the future or dwelling on the past, promoting mental clarity and emotional balance.`,
        extraText: `Regular mindfulness meditation can strengthen your ability to manage difficult emotions, improve focus
            and concentration, and develop a greater sense of inner peace and self-awareness in daily life.`,
        image: "assets/images/Mindfullness.webp",
        imagealt: "Mascot meditating",
        linkname: "Learn More",
        linkhref: "details.html?details=mindfulness"
    },
    {
        heading: "Stay Hydrated",
        mainText: `Proper hydration is essential for optimal brain function and mental clarity, as even mild dehydration 
            can negatively impact mood, concentration, and cognitive performance throughout the day.`,
        extraText: `Maintaining adequate water intake helps regulate neurotransmitter function, reduces stress levels, and supports 
            the body's natural detoxification processes, all of which contribute to better mental health and emotional stability.`,
        image: "assets/images/Hydrated.webp",
        imagealt: "Mascot holding up a water bottle",
        linkname: "Learn More",
        linkhref: "details.html?details=hydration"
    },
    {
        heading: "Make Friends",
        mainText: `Building and maintaining real-life friendships through face-to-face interactions provides essential emotional support, 
            deeper connections, and stronger social bonds that are crucial for mental health and emotional well-being.`,
        extraText: `Regular social interactions stimulate the release of positive hormones like oxytocin and serotonin, while also providing a support network
            that helps buffer against stress, anxiety, and depression through shared experiences and mutual understanding.`,
        image: "assets/images/Friends.webp",
        imagealt: "Mascot embracing a friend",
        linkname: "Learn More",
        linkhref: "details.html?details=friendship"
    },
    {
        heading: "Get Enough Sleep",
        mainText: `Quality sleep is essential for mental well-being, as it allows your brain to process emotions, consolidate memories, 
            and restore vital neural connections that support psychological resilience and emotional stability.`,
        extraText: `Studies show that consistent, adequate sleep improves mood regulation, reduces stress levels, and enhances cognitive function, making it 
            a crucial factor in maintaining optimal mental health and emotional balance throughout life.`,
        image: "assets/images/Sleep.webp",
        imagealt: "Mascot sleeping on the ground",
        linkname: "Learn More",
        linkhref: "details.html?details=sleep"
    },
];

//Mobile Content

let currentIndex = 0;

function updateMainContent(index) {
    const content = cardContentsArray[index];
    if (content) {
        document.querySelector('#mobile-content .image-container img').src = content.image;
        document.querySelector('#mobile-content .image-container img').alt = content.imagealt;
        document.querySelector('#mobile-content h2').textContent = content.heading;
        document.querySelector('#mobile-content .main-text').textContent = content.mainText;
        document.querySelector('#mobile-content .extra-text').textContent = content.extraText;
        document.getElementById("buttonlink").innerHTML = content.linkname;
        document.getElementById("buttonlink").href = content.linkhref;
    }
}

// Call the function on page load with the first card content
document.addEventListener('DOMContentLoaded', () => {
    updateMainContent(currentIndex); // Update with the first card content

    // Add event listeners to navigation arrows
    document.querySelector('.navleft').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cardContentsArray.length) % cardContentsArray.length;
        updateMainContent(currentIndex);
    });

    document.querySelector('.navright').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cardContentsArray.length;
        updateMainContent(currentIndex);
    });
});

//Desktop Content

//Function to dynamically create a card
function createCard(content) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${content.image}" alt="${content.imagealt}">
        <div class="textbox">
            <h3>${content.heading}</h3>
            <p class="main-text">${content.mainText}</p>
            <p class="extra-text">${content.extraText}</p>
            <a class="linkbutton" href="${content.linkhref}" aria-label="Learn more">${content.linkname}</a>
        </div>
    `;
    return card;
}

//Loop through the cardContentsArray and create a card for each index

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-content');

    cardContentsArray.forEach(content => {
        const card = createCard(content);
        cardContainer.appendChild(card);
    });

    // Initialize tooltips
    initializeTooltips();
});


//CARD FUNCTIONS

//Card expansion on click
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const textbox = card.querySelector('.textbox');
            const isExpanded = textbox.classList.contains('expanded');

            // Collapse all other textboxes
            document.querySelectorAll('.textbox').forEach(tb => tb.classList.remove('expanded'));
            document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));    //For wiggle Anim

            // Expand the clicked textbox if it was not already expanded
            if (!isExpanded) {
                textbox.classList.add('expanded');
                card.classList.add('expanded');    //For wiggle Anim
            }
        });
    });

    // Collapse the textbox when clicking outside of a card
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.card')) {
            document.querySelectorAll('.textbox').forEach(tb => tb.classList.remove('expanded'));
            document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));    //For wiggle Anim
        }
    });
});


//Creating tooltip on initial hover
function initializeTooltips() {
    const cards = document.querySelectorAll('.card');
    let hasClickedCard = false;

    cards.forEach(card => {
        // Create and append the tooltip to the body
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = 'Click Me!';
        document.body.appendChild(tooltip);

        card.addEventListener('mouseenter', () => {
            if (!hasClickedCard) {
                // Position the tooltip above the card
                const rect = card.getBoundingClientRect();
                tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
                tooltip.style.top = `${rect.top - 25 + window.scrollY}px`;
                tooltip.style.display = 'block';
            }
        });

        card.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        card.addEventListener('click', () => {
            // Hide all tooltips after the first click
            if (!hasClickedCard) {
                hasClickedCard = true;
                document.querySelectorAll('.tooltip').forEach(tp => tp.style.display = 'none');
            }
        });
    });
}


//DETAILS PAGE

//Collect query param
function getQueryParameter(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');

        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

//Capture the 'details' query parameter
var details = getQueryParameter('details');

if (details) {
    switch (details.toLowerCase()) {
        case 'eathealthy':
            showContentBox('EatHealthy');
            break;
        case 'managestress':
            showContentBox('ManageStress');
            break;
        case 'newskills':
            showContentBox('NewSkills');
            break;
        case 'regularexercise':
            showContentBox('RegularExercise');
            break;
        case 'outdoors':
            showContentBox('Outdoors');
            break;
        case 'mindfulness':
            showContentBox('Mindfulness');
            break;
        case 'hydration':
            showContentBox('Hydration');
            break;
        case 'friendship':
            showContentBox('Friendship');
            break;
        case 'sleep':
            showContentBox('Sleep');
            break;
        default:
            break;
    }
}

// Function to show the correct content box
function showContentBox(id) {
    const contentBox = document.getElementById(id);
    if (contentBox) {
        contentBox.style.display = 'flex';
    }
}

//navarrows functionality 

 // Add event listeners to navigation arrows
 const navLeft = document.getElementById('navleft');
 const navRight = document.getElementById('navright');

 //Create an array of content ID's
 const contentIds = [
     'EatHealthy',
     'ManageStress',
     'NewSkills',
     'RegularExercise',
     'Outdoors',
     'Mindfulness',
     'Hydration',
     'Friendship',
     'Sleep'
 ];

 if (details) {
     let currentIndex = contentIds.findIndex(id => id.toLowerCase() === details.toLowerCase());
     if (currentIndex === -1) currentIndex = 0;

     navLeft.addEventListener('click', () => {
         currentIndex = (currentIndex - 1 + contentIds.length) % contentIds.length;
         window.location.search = `?details=${contentIds[currentIndex]}`;
     });

     navRight.addEventListener('click', () => {
         currentIndex = (currentIndex + 1) % contentIds.length;
         window.location.search = `?details=${contentIds[currentIndex]}`;
     });
 }

//High Contrast Mode

document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrast-toggle');
    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        document.querySelectorAll('.textbox').forEach(textbox => {
            textbox.classList.toggle('high-contrast');
        });
    });
});