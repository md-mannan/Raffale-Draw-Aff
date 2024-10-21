window.onload = function () {
    const inp = document.getElementById("inp");
    const nameList = document.getElementById("name-list");
    const display = document.getElementById("display");
    const giveATry = document.getElementById("give-a-try");
    const firstPosition = document.getElementById("first-position");
    const secondPosition = document.getElementById("second-position");
    const thirdPosition = document.getElementById("third-position");


    const participentNames = []
    // TODO:Extract Text From textarea and Store it to an array
    // TODO:Render the name Extracted from textArea
    // TODO: Shuffle the name array for better Results
    // TODO: Pick A Random Winer,Remove Him/Her from the Name array
    // TODO: Display the winer Name


    inp.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            let newNames = event.target.value.split(", ");
            if (newNames[0] !== '') {
                newNames.forEach(name => {
                    participentNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = '';
                })
            }

        }
    })




    function createListItem(name) {
        let li = document.createElement("li");
        li.className = 'list-group-item';
        li.innerHTML = name;
        return li;
    }

    function shuffle(arr) {
        let shuffledArr = [...arr];

        // Fisher-Yates (aka Knuth) Shuffle Algorithm
        for (let i = shuffledArr.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            let temp = shuffledArr[rand];
            shuffledArr[rand] = shuffledArr[i]
            shuffledArr[i] = temp;
        }
        return shuffledArr;
    }




    giveATry.addEventListener('click', function () {
        if (participentNames.length === 0) {
            alert("There is no Entry.")

        } else {
            let shuffledNames = shuffle(participentNames);
            for (let i = 1; i < shuffledNames.length; i++) {
                (function (i, count) {

                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffledNames.length));
                        display.innerHTML = shuffledNames[rand]

                        if (count === shuffledNames.length - 1) {
                            if (!firstPosition.innerHTML) {
                                firstPosition.innerHTML = shuffledNames[rand];
                                let ind = participentNames.indexOf(shuffledNames[rand]);
                                participentNames.splice(ind, 1);
                            } else if (!secondPosition.innerHTML) {
                                secondPosition.innerHTML = shuffledNames[rand];
                                let ind = participentNames.indexOf(shuffledNames[rand]);
                                participentNames.splice(ind, 1);
                            } else if (!thirdPosition.innerHTML) {
                                thirdPosition.innerHTML = shuffledNames[rand];
                                let ind = participentNames.indexOf(shuffledNames[rand]);
                                participentNames.splice(ind, 1);
                            } else {
                                alert("Raffle Draw Already Compleated")
                            }
                        }

                    }, i)
                })(i * 100, i)
            }


        }
    })



}