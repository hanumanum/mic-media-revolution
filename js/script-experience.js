
initMenuAndTools()
setEqualHeightLrSections()
longReadMenuAndScroll()


$(function(){
    experienceMobile()
    initParalaxForLongRead()

    $("#button-back").click(function(){
        window.location.assign(INDEXPAGE)
    })
})
function experienceMobile(){
   var names = $(".lr-menu-item")
   var lrsection = $(".lr-section")
   for(var i = 0 ;i< names.length;i++){
       $("#lr-holder").append($(name[i]))
   }
}