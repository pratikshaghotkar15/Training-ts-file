export class SecondLargest
{
showsecondlargest(count:number,...a:number[])
{
var temp;
var i;
var j;

for(i=0;i<a.length;i++)
{
for(j=i+1;j<a.length;j++)
{
if(a[i]>a[j])
{
temp=a[i];
a[i]=a[j];
a[j]=temp;
}
}
}
console.log("second largest no "+a[count-2]);
}
}

export class Average
{
findAverage(a,b,c)
{
var d=3;
console.log("average is="+((a+b+c)/d));
}
}
