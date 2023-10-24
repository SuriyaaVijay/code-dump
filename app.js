function test()
{
    const e1 = document.createElement('h1');
    e1.innerText="test";
    e1.setAttribute('id','head')
    document.body.appendChild(e1);
}

test();