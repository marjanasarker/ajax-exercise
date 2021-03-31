"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (response) => {
        $('#fortune-text').text(response);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get('/weather.json', (response) => {
        alert(`The weather forecast is ${response.forecast}`);
    })
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formInputs = {
        'qty' : $('#qty-field').val(),
        'melon_type' : $('#melon-type-field').val()
    };

    $.post('/order-melons.json', formInputs, (response) => {
        console.log(response);
        if (response.code === 'ERROR'){
            $('#order-status').html(response.msg);
            $('#order-status').addClass('order-error');
        }
        else{
            $('#order-status').html(response.msg);
            $('#order-status').removeClass('order-error');
         
        }
    });

}

$("#order-form").on('submit', orderMelons);


//$('order-form').addClass('.order-error')

//if response.code is ERROR, do above^^
//else, do normal




