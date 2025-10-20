$(document).ready(function () {
    const doc = $(document);
    const doc_width = $(document).width();
    const nav__menu = $('.nav__menu');
    const nav__menu_items = $('.nav__menu-items');
    const header__menu_item3 = $('#header__menu-item3');
    const header__menu_open3 = $('.header__menu-open3');
    const arr_down = $('.arr_down');
    const arr_right = $('.arr_right');
    const nav__menu_item3 = $('.nav__menu_item3');
    const nav__menu_open3 = $('.nav__menu-open3');
    const header__menu_item5 = $('#header__menu-item5');
    const header__menu_open5 = $('.header__menu-open5');
    const menu_open5__menu_item3 = $('#menu-open5__menu-item3');
    const menu_open5__menu_open3 = $('.menu-open5__menu-open3');
    const menu_open5__menu_item2 = $('#menu-open5__menu-item2');
    //выпадающее меню nav
    $('#burger').click(function () {
        nav__menu.removeClass('close');
    })
    $('#close').click(() => {
        nav__menu.addClass('close');
    })

//меню комфортная среда в header
    header__menu_item3.click(function (e) {
          header__menu_open3.removeClass('close').addClass('flex')
        e.stopPropagation();
    })

    header__menu_open3.click(function (e) {
        header__menu_open3.addClass('close').removeClass('flex');
        e.stopPropagation(); //прерывает команду по цепочке к родителю
    })

   doc.click(function (e) {
        header__menu_open3.addClass('close').removeClass('flex');
       header__menu_open5.addClass('close').removeClass('flex');
       menu_open5__menu_open3.addClass('close').removeClass('flex');
        e.stopPropagation(); //прерывает команду по цепочке к родителю
    })

    //меню комфортная среда в nav
    nav__menu_item3.click(function (e) {
        nav__menu_open3.removeClass('close').addClass('flex');
        arr_down.removeClass('close').addClass('flex'); //замена стрелок
        arr_right.addClass('close').removeClass('flex');
        e.stopPropagation();
    })
    // закрытие меню и сброс к исходному состоянию
    nav__menu_items.click(function () {
        nav__menu_open3.addClass('close').removeClass('flex');
        nav__menu.addClass('close');
        arr_right.removeClass('close').addClass('flex');
        arr_down.addClass('close').removeClass('flex');
    })

    // Адаптив hover menu. Элементы скрываются из hover menu и добавляются в пункт Еще в зависимости от ширины окна
    if (doc_width < 1300) {
        $('#header__menu-item4').addClass('close');
        header__menu_item5.removeClass('close');
        $('#menu-open5__menu-item4').removeClass('close');
        if (doc_width < 1010) {
            header__menu_item3.addClass('close');
            menu_open5__menu_item3.removeClass('close');
            if (doc_width < 620) {
                $('#header__menu-item2').addClass('close');
                menu_open5__menu_item2.removeClass('close');
                if (doc_width < 490) {
                    $('.nav').removeClass('close').addClass('flex');
                    $('.header').removeClass('flex').addClass('close');
                }
            }
        }
    }

    //меню Еще в header
    header__menu_item5.click(function (e) {
        header__menu_open5.removeClass('close').addClass('flex');
        e.stopPropagation();
    })

    header__menu_open5.click(function (e) {
        header__menu_open5.addClass('close').removeClass('flex');
        menu_open5__menu_open3.addClass('close').removeClass('flex');
        e.stopPropagation(); //прерывает команду по цепочке к родителю
    })
    menu_open5__menu_item3.click(function (e) {
        menu_open5__menu_open3.removeClass('close').addClass('flex');
        e.stopPropagation(); //прерывает команду по цепочке к родителю
    })
})
