const sumAll = function(a,b) {
if(typeof(a)!=='number'||typeof(b)!=='number'||a<0||b<0)
    return("ERROR");
if(a>b)
{
    b=a+b;
    a=b-a;
    b=b-a;
}
    return(((b-a+1)/2)*(2*a+(b-a)));
};

// Do not edit below this line
module.exports = sumAll;
