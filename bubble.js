
let element = document.querySelector(".sort-container");
let e = document.querySelectorAll(".box-element");
let delayInSeconds=1050;
// let val=0;
for (let i = 0; i < 10; i++) {
    let divelement = document.createElement("div");
    let val = Math.floor(Math.random() * 40 + 1);
    let height = `height:${val}rem`;
    divelement.setAttribute("style", height);
    divelement.setAttribute("no", i + 1);

    divelement.classList.add("box-element");
    element.appendChild(divelement);

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sortItem() {

    let allELement = document.querySelectorAll("[no]");

    for (let i = 0; i < allELement.length - 1; i++) {


        for (let k = 0; k < allELement.length - i-1; k++) {

            // allELement[k].classList.add("selector");
            let getHeight1 = allELement[k].getAttribute("style");
            getHeight1 = getHeight1.split(":");
            getHeight1 = getHeight1[1];
            getHeight1 = getHeight1.split("rem");
            getHeight1 = Number(getHeight1[0]);

            // allELement[k+1].classList.add("selector");
            let curr_element = allELement[k + 1].getAttribute("style");
            curr_element = curr_element.split(":");
            curr_element = curr_element[1];
            curr_element = curr_element.split("rem");
            curr_element = Number(curr_element[0]);


            if (getHeight1 > curr_element) {
                allELement[k].classList.add("selector-blue");
                allELement[k + 1].classList.add("selector-yellow");

                await sleep(delayInSeconds);
                let val1 = curr_element;
                let val2 = getHeight1;
                let height1 = `height:${val1}rem`;
                let height2 = `height:${val2}rem`;
                allELement[k].setAttribute("style", height1);
                allELement[k].classList.remove("selector-blue");
                allELement[k].classList.add("selector-yellow");

                allELement[k + 1].setAttribute("style", height2);
                allELement[k + 1].classList.remove("selector-yellow");
                allELement[k + 1].classList.add("selector-blue");
                await sleep(delayInSeconds);

                allELement[k].classList.remove("selector-yellow");
                allELement[k + 1].classList.remove("selector-blue");
                //control hover effect 
                //bubbleSort Completed
            }
            // await sleep(3000);

            else {
                // await sleep(3000);

                allELement[k].classList.add("selector-blue");
                allELement[k + 1].classList.add("selector-blue");
                await sleep(delayInSeconds);

                allELement[k].classList.remove("selector-blue");
                allELement[k + 1].classList.remove("selector-blue");
            }
        }

    }
}

function cons() {
    console.log("working");
}