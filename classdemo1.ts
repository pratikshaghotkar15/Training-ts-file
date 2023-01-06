class test{
fname:string;
lname:string;
rollno:number;

constructor(fn:string,ln:string,no:number)
{
this.fname=fn;
this.lname=ln;
this.rollno=no;
}

show():void{
console.log("name="+this.fname+this.lname);
console.log("rollno="+this.rollno);
}

}
var obj=new test("anil","kumar",1234);
obj.show();
