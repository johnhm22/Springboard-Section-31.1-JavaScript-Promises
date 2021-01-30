//Section 31.1 Asynchronous code in JavaScript

//Part 1 Number Facts

//Question 1
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

// let url = "http://numbersapi.com/22/trivia?json"
// let myFaveNum = axios.get(url);
// console.log(myFaveNum);

//Question 2
// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page
// let baseURL = "http://numbersapi.com";

// axios
//     .get(`${baseURL}/12/trivia?json`)
//     .then(res => {
//         console.log('Starting')
//         console.log(res)
//         return axios.get(`${baseURL}/13/math?json`)
//     })
//     .then(res => {
//         console.log(res)
//         return axios.get(`${baseURL}/19/year?json`)
//     })
//     .then(res => {
//         console.log(res)
//         console.log('Finished')
//     })


// Question 3
// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
// (Note: You’ll need to make multiple requests for this.)

// let url = "http://numbersapi.com/22/trivia?json"
// axios
//     .get(url)
//     .then(res => {
//         $('#f1').text(res.data.text)
//         return axios.get(url)
//     })
//     .then(res => {
//         $('#f2').text(res.data.text)
//         return axios.get(url)
//     })
//     .then(res => {
//         $('#f3').text(res.data.text)
//         return axios.get(url)
//     })
//     .then(res => {
//         $('#f4').text(res.data.text)
//     })

// Part 2
// Question 1
// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

// let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
// axios
//     .get(url)
//     .then(res => {
//         console.log(res.data.cards[0].suit)
//         console.log(res.data.cards[0].value)
//     })


//Question 2
// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

axios
    .get(url)
    .then(res => {
        let deck_id = res.data.deck_id
        console.log(deck_id)
        axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
            .then(res => {
                console.log(res.data.cards[0].suit);
                console.log(res.data.cards[0].value);
            })
        axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
            .then(res => {
                console.log(res.data.cards[0].suit);
                console.log(res.data.cards[0].value);
            })
    })





