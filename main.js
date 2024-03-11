function createReactangle(length,breadth){
const rectangle={
    length,
    breadth,

    draw:function(){
        console.log("Drawing reactangle");
    },
    
    area:function(){
        console.log(`Area of Rectangle is: ${rectangle.length*rectangle.breadth}`);
    }
};
return rectangle;
}

let rectangle1=createReactangle(5,6);
console.log(rectangle1.length);
rectangle1.draw();
rectangle1.area();