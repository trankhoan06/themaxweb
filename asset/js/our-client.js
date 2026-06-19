// our-client.js
$(document).ready(function () {
    $('.home_clients_tab_item').click(function () {
        if ($(this).hasClass('active')) return;

        $('.home_clients_tab_item').removeClass('active');

        let tabId = $(this).attr('data-tabs');
        $('.home_clients_tab_item[data-tabs="' + tabId + '"]').addClass('active');

        $('.home_clients_content_item').hide();
        $('.home_clients_content_item[data-tabs="' + tabId + '"]').css('display', 'flex').hide().fadeIn(300);
    });
    const topTab = document.querySelector(".home_clients_tab:not(.bottom)");
    const bottomTab = document.querySelector(".home_clients_tab.bottom");

    if (topTab && bottomTab) {
        // Initially hide the bottom tab if the top tab is visible
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Top tab is visible, hide bottom tab
                    bottomTab.style.opacity = "0";
                    bottomTab.style.pointerEvents = "none";
                } else {
                    // Top tab is scrolled out of view, show bottom tab
                    bottomTab.style.opacity = "1";
                    bottomTab.style.pointerEvents = "auto";
                }
            });
        }, {
            // Trigger as soon as top tab is 100% out of view
            threshold: 0
        });

        observer.observe(topTab);
    }
});
