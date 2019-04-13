var flag=0;
	function openForm(choice) {
		if(choice==1){
			if(flag==2){
				element.style.display='none';
			}
			element=document.getElementById("myForm");
			flag=1;
		}
		else if(choice==2){
			if(flag==1){
				element.style.display='none';
			}
			element=document.getElementById("myForm1");
			flag=2;
		}
    	var op = 0.1;  // initial opacity
    	element.style.display = 'block';
    	var timer = setInterval(function () {
        	if (op >= 1){
            	clearInterval(timer);
        	}
        	element.style.opacity = op;
        	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        	op += op * 0.1;
    	}, 10);
    	open=1;
    	for(i=0;i<7;++i){
    		circles[i].style.opacity=0.1;
    		circles[i].style.transition = "all .3s";
    	}

	}
	function closeForm() {
		var op = 1;  // initial opacity
    	var timer = setInterval(function () {
        	if (op <= 0.1){
            	clearInterval(timer);
            	element.style.display = 'none';
        	}
        	element.style.opacity = op;
        	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        	op -= op * 0.1;
    	}, 10);
    	for(i=0;i<7;i++){
			circles[i].style.opacity=0.8;
			circles[i].style.transition = "all .3s";
		}
		open=0;
	}
	