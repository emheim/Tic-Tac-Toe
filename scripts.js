$(document).ready(function() {

	
	
	var x = "X";
	var o = "O";
	var turnCount = 0;
	
	
	
	var gameBoard = document.getElementById("gameboard");
		
	//*Game play
	$('.gameboard').click(function() {
				
				
				
				
				if ($('#grid1').hasClass('x') && $('#grid2').hasClass('x') && $('#grid3').hasClass('x') || $('#grid1').hasClass('x') && $('#grid4').hasClass('x') && $('#grid7').hasClass('x') || $('#grid1').hasClass('x') && $('#grid5').hasClass('x') && $('#grid9').hasClass('x')
					|| $('#grid4').hasClass('x') && $('#grid5').hasClass('x') && $('#grid6').hasClass('x') || $('#grid7').hasClass('x') && $('#grid8').hasClass('x') && $('#grid9').hasClass('x') || $('#grid7').hasClass('x') && $('#grid5').hasClass('x') && $('#grid3').hasClass('x') 
					|| $('#grid2').hasClass('x') && $('#grid5').hasClass('x') && $('#grid8').hasClass('x') || $('#grid3').hasClass('x') && $('#grid6').hasClass('x') && $('#grid9').hasClass('x')) { 
					 alert("X Wins!");
					 $('.gameboard').removeClass('x');
					 $('.gameboard').removeClass('o');
					 $('.gameboard').text(" ");
					 turnCount = 0;
					}
				else if ($('#grid1').hasClass('o') && $('#grid2').hasClass('o') && $('#grid3').hasClass('o') || $('#grid1').hasClass('o') && $('#grid4').hasClass('o') && $('#grid7').hasClass('o') || $('#grid1').hasClass('o') && $('#grid5').hasClass('o') && $('#grid9').hasClass('o')
					|| $('#grid4').hasClass('o') && $('#grid5').hasClass('o') && $('#grid6').hasClass('o') || $('#grid7').hasClass('o') && $('#grid8').hasClass('o') && $('#grid9').hasClass('o') || $('#grid7').hasClass('o') && $('#grid5').hasClass('o') && $('#grid3').hasClass('o') 
					|| $('#grid2').hasClass('o') && $('#grid5').hasClass('o') && $('#grid8').hasClass('o') || $('#grid3').hasClass('o') && $('#grid6').hasClass('o') && $('#grid9').hasClass('o')) {
					alert("O Wins!");
					 $('.gameboard').removeClass('x');
					 $('.gameboard').removeClass('o');
					 $('.gameboard').text(" ");
					 turnCount = 0;
					}
				
				else if (turnCount == 9) {
					alert("Cat's game!");
					$('.gameboard').removeClass('x');
					$('.gameboard').removeClass('o');
					$('.gameboard').text(" ");
					turnCount = 0;
					} 
					
				else if ($(this).hasClass('x') || $(this).hasClass('o')) {
					alert("Umm, try again...")
				}
				
				else if (turnCount % 2 == 0) {
					$(this).addClass('x');
					$(this).text(x);
					checkWinner();
					turnCount++;
				} 
				else if (turnCount % 2 == 1) {
					$(this).addClass('o');
					$(this).text(o);
					checkWinner();
					turnCount++;
				}
				
	});
	
	//*Start new game button click
	$('#newgame').click(function() {
		$('.gameboard').removeClass('x');
		$('.gameboard').removeClass('o');
		$('.gameboard').text(" ");
		turnCount = 0;
	});

	
	
	
	function xTurn() {
		var that = this
		$(this).addClass('x');
		$(this).text(x);
		checkWinner();
		turnCount++
	}
	
	function oTurn() {
		var that = this
		$(this).addClass('o');
		$(this).text(o);
		checkWinner();
		turnCount++
	}
	
	function checkWinner() {
	if ($('#grid1').hasClass('x') && $('#grid2').hasClass('x') && $('#grid3').hasClass('x') || $('#grid1').hasClass('x') && $('#grid4').hasClass('x') && $('#grid7').hasClass('x') || $('#grid1').hasClass('x') && $('#grid5').hasClass('x') && $('#grid9').hasClass('x')
		|| $('#grid4').hasClass('x') && $('#grid5').hasClass('x') && $('#grid6').hasClass('x') || $('#grid7').hasClass('x') && $('#grid8').hasClass('x') && $('#grid9').hasClass('x') || $('#grid7').hasClass('x') && $('#grid5').hasClass('x') && $('#grid3').hasClass('x') 
		|| $('#grid2').hasClass('x') && $('#grid5').hasClass('x') && $('#grid8').hasClass('x') || $('#grid3').hasClass('x') && $('#grid6').hasClass('x') && $('#grid9').hasClass('x')) {
		
		 alert("X Wins!");
		 $('.gameboard').removeClass('x');
		 $('.gameboard').removeClass('o');
		 $('.gameboard').text(" ");
		 turnCount = 0;
		 
	} else if ($('#grid1').hasClass('o') && $('#grid2').hasClass('o') && $('#grid3').hasClass('o') || $('#grid1').hasClass('o') && $('#grid4').hasClass('o') && $('#grid7').hasClass('o') || $('#grid1').hasClass('o') && $('#grid5').hasClass('o') && $('#grid9').hasClass('o')
		|| $('#grid4').hasClass('o') && $('#grid5').hasClass('o') && $('#grid6').hasClass('o') || $('#grid7').hasClass('o') && $('#grid8').hasClass('o') && $('#grid9').hasClass('o') || $('#grid7').hasClass('o') && $('#grid5').hasClass('o') && $('#grid3').hasClass('o') 
		|| $('#grid2').hasClass('o') && $('#grid5').hasClass('o') && $('#grid8').hasClass('o') || $('#grid3').hasClass('o') && $('#grid6').hasClass('o') && $('#grid9').hasClass('o')) {
		
			alert("O Wins!");
		 $('.gameboard').removeClass('x');
		 $('.gameboard').removeClass('o');
		 $('.gameboard').text(" ");
		 turnCount = 0;
}

	
};
});
	
	
	


