$('.topPanelItem').click(function(){
    $(this).find('.dropDownMenu').slideToggle('fast')
})

$('.currency .dropDownMenu div').click(function(){
    $(this).parents('.topPanelItem').find('span').text($(this).text())
})
