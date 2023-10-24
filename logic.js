const avglifespan= 4732;
function calculate(dateOfBirth)
{
    let currentDate= new Date();
    let diff= currentDate.getTime() - dateOfBirth.getTime();
    let weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    let weeksleft =avglifespan-weeks;
    
    const e2=document.createElement("h3");
    const e3=document.getElementById("result");
    
    if(weeksleft>0)
    {
        e2.innerText="You have spent "+weeks+" weeks of your life and have approximately "+weeksleft+" weeks left to live.";
        e3.appendChild(e2);
    }
    else
    {
        e2.innerText="You have spent "+weeks+" weeks of your life and have exceeded the average lifespan. Every day is a bonus!";
        e3.appendChild(e2);
    }
    
}

function getdate()
{
    
    const e1= document.getElementById("datee");
    const dateOfBirth= new Date(e1.value);
    render();
    calculate(dateOfBirth);
}

function render()
{
    document.getElementById("result").innerHTML=" ";
}

//animation 
const observer = new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        console.log(entry);
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElemnts1= document.querySelectorAll('.hidden');
hiddenElemnts1.forEach((el)=> observer.observe(el));