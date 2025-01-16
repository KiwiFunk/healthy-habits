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
document.addEventListener('DOMContentLoaded', () => {
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
});


//Details Page Content

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

