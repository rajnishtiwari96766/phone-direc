const{usestate,useeffect}=React
const counter=()=>{

    const[count,setcount]=usestate(0);
    const[name,setname]=usestate('Rajnish');

    useeffect(()=>{
        console.log('hello ${name} you have clicked ${count} number of times')
    });
}

return(
    <div>
        <p>
            Hello!!! ${name} you have clicked ${count} number of times
        </p>

        <button onClick={()=> setcount(count+1)}> click me!!!</button>

        <button onClick={()=> setname(name=== 'Rajnish' ? 'Tiwari' :'Rajnish')}>
            flip name
        </button>
    </div>
)
