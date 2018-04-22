var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // var shuffledArray = [];
  // cardsArr.forEach(function(theCard, theIndex){
  //   var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
  //   shuffledArray.push(cardsArr[randomCardIndex]);
  //   cardsArr.splice(randomCardIndex, 1);
  // });
  // this.cards = shuffledArray; **** had problems displaying all the cards

  // using lodash very convenient shuffle method
  this.cards = _.shuffle(cardsArr);
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  $('#pairs_clicked').text(this.pairsClicked);

  if(firstCard === secondCard){
    $('.back').addClass('blocked');
    $('.just-clicked').addClass('permaBlocked');
    this.pairsGuessed++;
    // this.pairsGuessed += 1;
    // this.pairGuessed = this.pairGuessed + 1
    $('#pairs_guessed').text(this.pairsGuessed);
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');
    
  } else {
    $('.back').addClass('blocked');
    setTimeout(function(){
      $('.just-clicked').css("background", "#456783");
      $('.just-clicked').removeClass('just-clicked');
      $('.back').removeClass('blocked');
  }, 1000);
    
  }
  this.currentPair = [];
  this.finished();
  
}


MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed > 11){
    alert("Yay, you won!");
  }
};




