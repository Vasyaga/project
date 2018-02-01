function WorkingSpace(x,y,width,height,color,id,mysvg) //
{
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    newElement.setAttribute('x',x);
    newElement.setAttribute('y',y);
    newElement.setAttribute('width',width);
    newElement.setAttribute('height',height);
    newElement.setAttribute('fill',color);
    newElement.setAttribute('id',id)
    mysvg.appendChild(newElement);
}

function Creator(){
    var mysvg=document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    mysvg.setAttribute('width','800');
    mysvg.setAttribute('height','800');
    mysvg.setAttribute('viewBox','0 0 800 800');
    maindiv.appendChild(mysvg);

    WorkingSpace(0,600,800,100,'green','space_1',mysvg);
    WorkingSpace(0,0,100,600,'black','space_2',mysvg);
    WorkingSpace(100,0,700,600,'red','space_3',mysvg);
}

Creator();
