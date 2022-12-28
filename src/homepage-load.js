import Sinigang from './img/sinigang.jpg';

const pageLoad = () => {

    const contentDiv = document.querySelector("#content");

    const titleH1 = document.createElement("h1");
    titleH1.textContent = "The Filipino restaurant";

    const paraDescription = document.createElement("p");
    paraDescription.textContent = "Traditional pinoy dishes !!";

    const imgBanner = new Image();
    imgBanner.src = Sinigang;

    //empty the content
    contentDiv.innerHTML = "";

    contentDiv.appendChild(titleH1);
    contentDiv.appendChild(paraDescription);
    contentDiv.appendChild(imgBanner);
}


export default pageLoad;