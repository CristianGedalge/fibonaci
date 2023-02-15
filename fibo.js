function fibo(ele){
  var v =[];
  var anterior= -1;
  var actual=1
  for(var i=1;i<=ele;i++){
    var fibo=anterior +actual;
    anterior =actual;
    actual=fibo;
    v.push(fibo)
  }
  return v;
}
console.log(fibo(5));
