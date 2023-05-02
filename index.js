
formEl.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting

    const h3El = document.querySelector('h3');
    const formEl = document.getElementById('form');
    const inputEl = document.getElementById('input');

    let my_array = [];
    let my_input = inputEl;

    for (i = 0; i < my_input.length; i++) {
        my_array.push(parseInt(my_input.charAt(i)));
    }
    for (i = 0; i < my_array.length; i++) {
        if (i % 2 == 0) {
            let doub = my_array[i] * 2;
            if (doub >= 10) {
                my_array[i] = 1;
                my_array[i + 1] = doub - 10;
            } else {
                my_array[i] = doub;
            }


        } else {
            my_array[i] = my_array[i];
        }

    }

    let total = 0;

    for (i = 0; i < my_array.length; i++) {
        total = total + my_array[i]
    }
    if (total % 10 != 0) {
        h3El.innerText = "INVALID";
    }
    else {
        h3El.innerText = "VALID";
    }
});



