import {StyleSheet,View,Text, TextInput, Button} from 'react-native'
import { useState } from 'react'
import { login,signup } from '../http/open'

const AuthScreen = props =>{

    const [clicked,setClicked] = useState(false)
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const loginFun=() => {
        if(clicked){
            signup({'name':name,'phone':mobile,'password':password})
            props.navigation.navigate('Main')
        }else{
            login({'phone':mobile,'password':password},props)
            
        }
    }

    return(
        <View style={styles.main}>
            <View style={styles.card}>
                <Text style={styles.text}>Login</Text>
                {clicked?
                <View style={styles.mobile}>
                <Text>Name:-  </Text>
                <TextInput keyboardType='default' style={styles.input} onChangeText={(text) => setName(text)}/>
                </View>: null
                }

                <View style={styles.mobile}>
                    <Text>Mobile No.:- </Text>
                    <TextInput keyboardType='number-pad' style={styles.input} onChangeText={(text) => setMobile(text)}/>
                </View>

                <View style={styles.mobile}>
                    <Text>Password:- </Text>
                    <TextInput keyboardType='number-pad' style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
                </View>
                <View style={styles.button}>
                    <Button title={clicked ?  'SignUp':'Login'} onPress={loginFun}/>
                </View>
                <View style={styles.button}>
                    <Button title={clicked ?  'Switch To Login':'Switch To Sign up'} onPress={() => setClicked(!clicked)}/>
                </View>
            </View>

        </View>
    )
}

const styles=  StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2193b0'
    },
    card:{
        alignItems:'center',
        width:360,
        height:380,
        padding:10,
        margin:10,
        borderRadius:90,
    backgroundColor:'#6dd5ed',

    },
    mobile:{
        flexDirection:'row',
        padding:10,
        margin:10

    },
    text:{
        fontSize:30
    },
    input:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        margin:2,
        width:100
    },
    button:{
        padding:10,
        margin:5
    }
})

export default AuthScreen;