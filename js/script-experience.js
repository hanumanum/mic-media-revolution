// experienceMobile()
initMenuAndTools()
setEqualHeightLrSections()
longReadMenuAndScroll()



$(function () {
    experienceMobile()
    if (!IS_MOBILE) {
        initParalaxForLongRead()
    }



    $("#button-back").click(function () {
        window.location.assign(INDEXPAGE)
    })
})
function experienceMobile() {
    if (IS_MOBILE) {
        let menuItem = $(".lr-menu-item")
        let lrsectionleft = $(".lr-section-left")

        // for(var i = 0;i<4;i++){
        //     $(lrsectionleft).append(menuItem[i])
        // }
        for (var i = 0; i < 4; i++) {
            let menuActiveItem = menuItem[i];
            let activeSection = lrsectionleft[i];
            $(activeSection).append($(menuActiveItem))
        }

    }
}