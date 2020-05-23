const main = () => {
    const headTitleElement = document.querySelector("Title");
    const titleElement = document.querySelector("#title");
    const pageIndicatorElement = document.querySelector("#page-indicator");
    const mangaImgElement = document.querySelector("#manga-img");
    const prevElement = document.querySelector("#prev");
    const nextElement = document.querySelector("#next");
    const prevBtnElement = document.querySelector("#prev-btn");
    const nextBtnElement = document.querySelector("#next-btn");

    headTitleElement.innerHTML = manga.title;
    titleElement.innerHTML = manga.title;

    const previous = () => {
        if(manga.currentPage > 1) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            manga.currentPage -= 1;
            currentPage(manga.currentPage);
        }
    }

    const next = () => {
        if(manga.currentPage < manga.totalPage) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            manga.currentPage += 1;
            currentPage(manga.currentPage);
        }
    }

    const jump = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        const selectedElement = document.querySelector("#page-indicator");
        manga.currentPage = Number(selectedElement.value);
        currentPage(manga.currentPage);
    }
    
    const currentPage = (page) => {

        mangaImgElement.setAttribute("src", `assets/source/${page}.${manga.type}`)
        mangaImgElement.setAttribute("alt", `${page}.jpg`)

        pageIndicatorElement.innerHTML = "";
        for(let i = 1; i <= manga.totalPage;i++) {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", i);
            if(i === manga.currentPage) {
                optionElement.setAttribute("selected", "");
            }
            optionElement.innerHTML = i;
            pageIndicatorElement.appendChild(optionElement);
        }

        prevElement.addEventListener("click", previous);
        prevBtnElement.addEventListener("click", previous);
        nextElement.addEventListener("click", next);
        nextBtnElement.addEventListener("click", next);

        pageIndicatorElement.addEventListener("change", jump);
    }

    currentPage(manga.currentPage);
}

document.addEventListener("DOMContentLoaded", main);