function getCheckerBoard(size){
	var res = "";
	for(var i = 0;i<size;i++){
		for(var j = 0;j<size;j++){
			if((i+j)%2)res+='#';
			else res+=' ';
		}
		res+='\n';
	}
	return res;
}
debug(getCheckerBoard(8));