class Theme{
    constructor() {
        this.theme = document.querySelector(`.theme`);
    }

    toggleTheme() {
        this.theme.addEventListener(`click`, () => {
            document.body.classList.toggle(`dark`)
        })
    }
}


const theme = new Theme()
theme.toggleTheme()