

function createNewDeck(){
    console.log("function called")
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    axios
    .get(url)
    .then(res =>{
        let deck_id = res.data.deck_id;
        $('.btn').click(function(){
            axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
                .then(res => {
                    let image = res.data.cards[0].images.png;
                    let angle = Math.random() * 90 - 45;
                    let randomX = Math.random() * 40 - 20;
                    let randomY = Math.random() * 40 - 20;
                    $('#cardTable').append(
                    $(`<img src=${image} alt="Playing card" height="150" width="100" 
                    style="transform: translate(${randomX}px, ${randomY}px) rotate(${angle}deg)"</>`))
                    
                    if (res.data.remaining === 49){
                        $('.btn').remove()
                    };        
                })
                .catch(err =>{
                    console.log(err)
                })
        
                    })
    })
}

createNewDeck()



