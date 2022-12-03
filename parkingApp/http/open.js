import axios from 'axios'

export function open(data){
    
    axios.put(
        'https://parking-8b845-default-rtdb.firebaseio.com/open.json',
        {message:'open'}
    );
    
}
export function close(data){
    
    axios.put(
        'https://parking-8b845-default-rtdb.firebaseio.com/open.json',
        {message:'close'}
    );
    
}
export async function login(data,props){
    console.log('in')
    
    const response = await axios.get(
        'https://parking-8b845-default-rtdb.firebaseio.com/auth.json',
        
    ); 

    for (const key in response.data){
        console.log(response.data[key].data.phone)

        if(response.data[key].data.phone == data.phone && response.data[key].data.password==data.password){
            console.log('in')
            props.navigation.navigate('Main')
           
       }
    }

    

    
}
export function signup(data){
    
    axios.post(
        'https://parking-8b845-default-rtdb.firebaseio.com/auth.json',
        {data}
    );

    
}
