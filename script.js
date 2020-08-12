    // Random Pin Generator

    let formGenerate = document.getElementById('generateForm');

    document.getElementById('generatePin').addEventListener('click', function() {
        
        let generateFrom = parseInt(formGenerate.value);
        let randomNumber = Math.round(Math.random() * 9000 + 1000);
        formGenerate.value = randomNumber;

    })

    // Number Keys & Buttons functionalities

    const calculateForm = document.getElementById('calculateForm');
    const calculateNumber = document.getElementsByClassName('number');
    let inputValue = '';
    for (item of calculateNumber) {
        item.addEventListener('click', (e) => {
            let numberText = e.target.innerText;
            console.log('click')
            if (numberText == 'C') {
                inputValue = '';
                calculateForm.value = inputValue;
            } else if (numberText == 'DEL') {
                numberText = calculateForm.value.slice(0, -1);
                inputValue = numberText;
                calculateForm.value = inputValue;
            } else {
                inputValue += numberText;
                calculateForm.value = inputValue;
            }
        })

    }


    // Submit Button

    let submit = document.getElementById('submitButton').addEventListener('click', function() {
        console.log('yes')


    //  Pin Matched & Unmatched Functionalities

        if (formGenerate.value === calculateForm.value) {
            document.getElementById('pinMatched').style.display = "block";
            document.getElementById('pinNotMatched').style.display = "none";
        } else if (formGenerate.value != calculateForm.value) {
            document.getElementById('pinNotMatched').style.display = "block";
            document.getElementById('pinMatched').style.display = "none";
            var tryAgain = document.getElementById('tryAgain').innerText--;
            if (tryAgain == 1) {
                document.getElementById('submitButton').style.display = "none"
                alert('please waite 30 second');

            }

        }
    });