$(document).ready(function () {
    // Initialize home clients tabs
    let activeTab = $('.home_clients_tab_item.active').attr('data-tabs');
    $('.home_clients_content_item').hide();
    $('.home_clients_content_item[data-tabs="' + activeTab + '"]').css('display', 'flex');

    // Handle tab clicks
    $('.home_clients_tab_item').click(function () {
        if ($(this).hasClass('active')) return;

        $('.home_clients_tab_item').removeClass('active');
        $(this).addClass('active');

        let tabId = $(this).attr('data-tabs');

        $('.home_clients_content_item').hide();
        $('.home_clients_content_item[data-tabs="' + tabId + '"]').css('display', 'flex').hide().fadeIn(300);
    });
});
