document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const textbox = card.querySelector('.textbox');
            const isExpanded = textbox.classList.contains('expanded');

            // Collapse all other textboxes
            document.querySelectorAll('.textbox').forEach(tb => tb.classList.remove('expanded'));

            // Expand the clicked textbox if it was not already expanded
            if (!isExpanded) {
                textbox.classList.add('expanded');
            }
        });
    });

    // Collapse the textbox when clicking outside of a card
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.card')) {
            document.querySelectorAll('.textbox').forEach(tb => tb.classList.remove('expanded'));
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
            // Position the tooltip above the card
            const rect = card.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 25}px`;
            tooltip.style.display = 'block';
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