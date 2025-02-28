(function(){
    const colorNoActive = "#475569"
    const colorActive = "#FFB3B3"
    const borderWidth = "4px"

    window.navigation.addEventListener("navigate", changeActive )

    const links = document.querySelectorAll(".link-clickable")
    for( const link of links ) {
        link.addEventListener('click', changeActive )
    }

    function changeActive() {
        let before = 0, after = 0;
        const pathname = location.pathname
        const navs = document.querySelectorAll('.id-nav-menu')

        for(let i = 0; i < navs.length; i++ ) {
            const items = navs[ i ].querySelectorAll('li')
            for( let index = 0; index < items.length; index++ ) {
                if( pathname === items[index].dataset.pathname ) {
                    after = index
                }
                if( items[index].style.borderBottomWidth === borderWidth ) {
                    before = index
                }
            }
            items[ before ].style.borderBottomWidth = ""
            items[ before ].style.color = colorNoActive
            items[ after  ].style.borderBottomWidth = borderWidth
            items[ after  ].style.color = colorActive
        }
    }

    changeActive()
})()