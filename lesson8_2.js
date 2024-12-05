let st=""
let fr = new Object({})
fr.name = "cheery"
fr.calories = 110
fr.price = 4
fr.print = function () {
    st=""
    for (const key of  Object.keys(this))
    {
        if(typeof(this[key])!=='function')
            st+=(key+":"+this[key]+" ");
    }
    console.log(st);
}
const arr = [
{
    name: "apple", calories: 100, price: 50, print: function () 
    {
        st=""
        for (const key of  Object.keys(this))
        {
            if(typeof(this[key])!=='function')
                st+=(key+":"+this[key]+" ");
        }
        console.log(st);
    }
},
{
    name: "orange", calories: 80, price: 60, print: function ()
    {
        st=""
        for (const key of  Object.keys(this))
        {
            if(typeof(this[key])!=='function')
                st+=(key+":"+this[key]+" ");
        }
        console.log(st);
    }
},];
arr.push(fr)

for (const item of arr) {
    item.print();
}
arr[0].color="red"
console.log("==================7====================");
for (const item of arr) {
    if("color" in item)
    item.print();
}
console.log("=================8=====================");
st=""
for (item in arr[0]) {
    if(typeof(this[item])!=='function')
    {
        st+=item
        st+=":"
        st+=arr[0][item]
        st+=" "
    }
}
console.log("===================9===================");
console.log(st);
delete arr[1].price
arr[1].print()
function changePrice(){
    let p=document.getElementById("n1").value
    arr[0].price=p
    arr[0].print()
}
console.log("=================10=====================");
function deleteCalories(){
    let c=document.getElementById("c1").value
    let temp=arr.filter(x=>x.calories<=c)
    for (const item of temp) {
        item.print();
    }
}
console.log("==================11====================");
for (const item of arr) {
    Object.defineProperty(item,"ValidPrice",{
        set(value){
            if(value>=10&&value<=10000)
                item.price=value
        }
    })
}
arr[0].ValidPrice=3
arr[0].print()
console.log("=================targil2=====================");

function MessegeBox(colorWrite,grouncColor,img ,massage={title:"",center:""})
{
    this.colorWrite=colorWrite
    this.grouncColor=grouncColor
    this.img=img
    this.massage={...massage}
    this.render=function()
    {
        const d = document.createElement("div");
        document.body.append(d)
        const h = document.createElement("h1");
        h.textContent=this.massage.title
        d.append(h)
        const p1=document.createElement("p");
        p1.textContent=this.massage.center
        d.append(p1)
        d.style.backgroundColor=this.grouncColor
        d.style.color=this.colorWrite
        const i = document.createElement("img");
        i.src=this.img
        d.append(i)    
    }
}
const info=new MessegeBox("yellow","pink","בית המקדש (1).gif",{title:"h1",center:"info"});
const warning=new MessegeBox("yellow","pink","בית המקדש (1).gif",{title:"h1",center:"warning"});
const error=new MessegeBox("yellow","pink","בית המקדש (1).gif",{title:"h1",center:"error"});
const bigArr={info:info,warning:warning,error:error}
function saveDetails(e)
{
    e.preventDefault();
    let type=document.getElementById("u").value;
    bigArr[type].massage.title=document.getElementById("t").value
    bigArr[type].massage.center=document.getElementById("c").value
    bigArr[type].render()
}