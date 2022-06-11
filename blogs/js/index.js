for(var i=100;i<1000;i+=1){
    var ge=i%10;shi=parseInt(i/10)%10;bai=parseInt(i/100);
    var result=Math.pow(ge,3)+Math.pow(shi,3)+Math.pow(bai,3);
    if(result===i){
        console.log(i+"是水仙花数");
    }
}