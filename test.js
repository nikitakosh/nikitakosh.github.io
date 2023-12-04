$(function() {
    var number_of_card = 15, card_html = '';
    for(var i=0; i<number_of_card; i++) {
        var extra_info = {
            created_by: 'Created by SureMetrics',
            last_access: `${i*7+2} days ago`,
            hit_count: `${i*112+2} times`
        }
        card_html += (sm_card_html(`Tab ${i+1}`, 'https://picsum.photos/400/300?image='+(i*13), extra_info));
    }

    $('#items').append(card_html);

    $('#sm_left_arrow, #sm_right_arrow').on('click', function() {
        var card_width = $('.sm_card').width() + 6,
            target_renderer = $(this).siblings('.sm_horizontal_list_renderer'),
            curr_translate = parseInt(target_renderer.attr('c_translate')),
            positive_negetive_multiplier = $(this).attr('id') == 'sm_left_arrow' ? 1 : -1,
            next_translate = curr_translate + card_width * positive_negetive_multiplier,
            no_of_cards = target_renderer.find('.sm_card').length,
            no_of_visible_cards = parseInt($(this).parent().width() / card_width);
        target_renderer.css('transform', `translateX(${next_translate}px)`).attr('c_translate', next_translate);
        if(next_translate >= 0) {
            target_renderer.siblings('#sm_left_arrow').hide();
            target_renderer.siblings('#sm_right_arrow').show();
        } else if(next_translate <= (no_of_cards - no_of_visible_cards) * -card_width) {
            target_renderer.siblings('#sm_left_arrow').show();
            target_renderer.siblings('#sm_right_arrow').hide();
        } else {
            target_renderer.siblings('#sm_left_arrow').show();
            target_renderer.siblings('#sm_right_arrow').show();
        }
    });
});
function sm_card_html(tab_name, image_url, extra_info) {
    var card_template =
        `<div class="sm_card card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${image_url}">
        </div>
        <div class="card-content">
          <span class="card-title grey-text text-darken-4">${tab_name}<i class="activator material-icons right">info</i></span>
          <span><i class="material-icons left tiny" style="margin-top: 3px;margin-right: 3px;">access_time</i>${extra_info.last_access}  &#8226 ${extra_info.hit_count}</span>
        <p style="font-size:12px;font-weight:500;">${extra_info.created_by}<p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${tab_name}<i class="material-icons right">close</i></span>
          <p>Here is some more information about the workbook</p>
        </div>
    </div>`;
    return card_template;
}