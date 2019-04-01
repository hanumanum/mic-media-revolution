// experienceMobile()
initMenuAndTools()
setEqualHeightLrSections()
longReadMenuAndScroll()


$(function () {
    
    initParalaxForLongRead()

    $("#button-back").click(function () {
        window.location.assign(INDEXPAGE)
    })
})
function experienceMobile() {
    // if (IS_MOBILE) {
        // $(".lr-image-holder").css("height", "175px;")
    // }
}