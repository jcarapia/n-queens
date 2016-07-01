/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {



  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };


  var matrix = makeEmptyMatrix(n);
  //console.log(matrix)

  var solution = new Board(matrix); //fixme
  //console.log(solution)

  var rowMatrix = solution.rows();
  for(var i = 0; i < rowMatrix.length; i++){
    solution.togglePiece(i, i)
  }

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};








// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //var solutionCount = undefined; //fixme
  if(n ===1){
    return 1
  }

var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };
  

var solutionsArray1 = [];
var solutionsArray2 = [];
//========================================
  for(var i = 0;  i < n; i++){ // row counter
    for(var j = 0; j < n; j++){ // column counter 

      var emptyMatrix = makeEmptyMatrix(n);
      var gameBoard = new Board(emptyMatrix); //create an empty board of size n
      gameBoard.togglePiece(i,j)
      //console.log(gameBoard)
      for(var k = 0; k < n; k++){
        for(var m = 0; m < n; m++){
      
          var currentBoard = gameBoard.rows();
          if(currentBoard[k][m] === 0){ //if the position is empty
            gameBoard.togglePiece(k,m); // toggle to put a piece on
            if(gameBoard.hasAnyRowConflicts() || gameBoard.hasAnyColConflicts() ){ //if it finds any conflicts after toggling
              gameBoard.togglePiece(k,m);
            } 
          }
        }
      }
    solutionsArray1.push(gameBoard.rows());    
    };
  };
//==========================================
for(var i = n-1;  i >= 0; i--){ // row counter
    for(var j = 0; j <n; j++){ // column counter 

      var emptyMatrix = makeEmptyMatrix(n);
      var gameBoard = new Board(emptyMatrix); //create an empty board of size n
      gameBoard.togglePiece(i,j)
      //console.log(gameBoard)
      for(var k = n-1; k >= 0; k--){
        for(var m = 0; m < n ; m++){
      
          var currentBoard = gameBoard.rows();
          if(currentBoard[k][m] === 0){ //if the position is empty
            gameBoard.togglePiece(k,m); // toggle to put a piece on
            if(gameBoard.hasAnyRowConflicts() || gameBoard.hasAnyColConflicts() ){ //if it finds any conflicts after toggling
              gameBoard.togglePiece(k,m);
            } 
          }
        }
      }
    solutionsArray2.push(gameBoard.rows());    
    };
  };
//==========================================


function uniq(collection) {
    var results = collection.slice(); //create copy of array
    _.each(results, function(element){ // iterate through the array
        for(var i = _.indexOf(results, element)+1; i < results.length;i++){ //check each element at index higher than itself
          if(_.isEqual(results[i],element)){ //if a duplicate is found, remove it via splice()
            results.splice(i,1);
          }
        }
        
    })
    return results; // return the duplicate-free array
  
  };

  

//===================================================
// var noDupes1 = uniq(solutionsArray1)
// console.log(noDupes1);
// var noDupes2 = uniq(solutionsArray2);
// console.log(noDupes2);
var dupes3 = solutionsArray1.concat(solutionsArray2);
console.log(uniq(solutionsArray2))
var noDuplicates = uniq(dupes3)
var noDuplicates2 = uniq(noDuplicates)
//console.log(noDupes3)
var solutionCount = noDuplicates2.length;

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
  //
};



// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
