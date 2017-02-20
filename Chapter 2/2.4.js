function getCheckerBoard(width,height){
	var res = "";
	for(var i = 0;i<height;i++){
		for(var j = 0;j<width;j++){
			if((i+j)%2)res+='#';
			else res+=' ';
		}
		res+='\n';
	}
	return res;
}
debug(getCheckerBoard(20,20));