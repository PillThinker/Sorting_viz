//insertion Sort Code 
let element = document.querySelector(".insertion-sort");
let e = document.querySelectorAll(".box-element");
let delayInSeconds = 1050;
// let val=0;
for (let i = 0; i < 10; i++) {
    let divelement = document.createElement("div");
    let val = Math.floor(Math.random() * 20 + 1);
    let height = `height:${val}rem`;
    divelement.setAttribute("style", height);
    divelement.setAttribute("no", i + 1);

    divelement.classList.add("box-element");
    // divelement.classList.add("glow");
    element.appendChild(divelement);

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sortItem() {

    let allELement = document.querySelectorAll("[no]");
    for (let i = 1; i < allELement.length; i++) {
        let current_element = allELement[i].getAttribute("style");
        current_element = current_element.split(":");
        current_element = current_element[1];
        current_element = current_element.split("rem");
        current_element = Number(current_element[0]);
        let j = i - 1;
        let previous_element = allELement[j].getAttribute("style");
        previous_element = previous_element.split(":");
        previous_element = previous_element[1];
        previous_element = previous_element.split("rem");
        previous_element = Number(previous_element[0]);

        let val = current_element;
        let height_current_elements = `height:${val}rem`;
        while (j >= 0 && previous_element > current_element) {
            let val1 = current_element;
            let height_current_element = `height:${val1}rem`;
            let val2 = previous_element;

            let height_previous_element = `height:${val2}rem`;

            await sleep(1000);
            allELement[j + 1].setAttribute("style", height_previous_element);
            allELement[j+1].classList.remove("selector-blue");
            await sleep(1000);
            allELement[j].setAttribute("style", height_current_element);
            allELement[j].classList.add("selector-yellow");


            current_element = allELement[j].getAttribute("style");
            current_element = current_element.split(":");
            current_element = current_element[1];
            current_element = current_element.split("rem");
            current_element = Number(current_element[0]);
            if (j >= 1) {
                previous_element = allELement[j - 1].getAttribute("style");
                previous_element = previous_element.split(":");
                previous_element = previous_element[1];
                previous_element = previous_element.split("rem");
                previous_element = Number(previous_element[0]);
            }
            j = j - 1;
        }
        allELement[j + 1].setAttribute("style", height_current_elements);
        allELement[j+1].classList.add("selector-blue");
        await sleep(1000);

    }


}

function cons() {
    console.log("working");
}