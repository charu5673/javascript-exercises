const removeFromArray = function() {
let a=arguments[0];
let n=arguments.length;
let m=a.length;
let i,j,flag=false;;
let b=[];
for(i=0;i<m;i++)
    {
        flag=false;
        for(j=1;j<n;j++)
            {
                if(a[i]===arguments[j])
                    flag=true;
            }
            if(!flag)
                b.push(a[i]);
    }
    return b;
};

// Do not edit below this line
module.exports = removeFromArray;
