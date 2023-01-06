class Fruits_veg
{
taste:string;
color:string;
type:string;

constructor(t:string,c:string,type:string)
{
this.taste=t;
this.color=c;
this.type=type;
}
}

class Fruit extends Fruits_veg
{
price:number;
fname:string;

constructor(fn:string,p:number,t:string,c:string,ty:string)

{
super(t,c,ty);
this.price=p;
this.fname=fn;

}

display()
{
console.log("fruit name="+this.fname);
console.log("fruit taste="+this.taste);
console.log("fruit color="+this.color);
console.log("fruit type="+this.type);
console.log("fruit price="+this.price);

}
}
var obj=new Fruit("apple",100,"sweet","red","fruit");
obj.display();





