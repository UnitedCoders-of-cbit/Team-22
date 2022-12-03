import {StyleSheet,TouchableOpacity,View,Text} from 'react-native'
import { useState, useEffect } from 'react'

const formatNumber = number => `0${number}`.slice(-2)

const getRemaining = (time) => {
    const mins= Math.floor(time/60)
    const secs = time - mins*60
    return {mins: formatNumber(mins),secs: formatNumber(secs)}
}

const Status = props =>{
    const [remainingSecs, setRemainingSecs] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const {mins, secs} = getRemaining(remainingSecs)

    const toggle = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval =null
        if(isActive){
            interval=setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs+1)
            },1000)
        }else if(!isActive && remainingSecs!=0){
            clearInterval(interval)

        }
        return () => clearInterval(interval)
    },[isActive,remainingSecs])
    return(
        <View style={styles.main}>
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <Text style={styles.buttonText}>EXIT</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles=  StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        borderWidth:10,
        borderColor:'#66ccFF',
        width:200,
        height:200,
        borderRadius:200,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'

    },
    buttonText:{
        fontSize:45,
        color:'#66ccff'
    },
    timerText:{
        color:'#66ccff',
        fontSize:90,
        marrginBottom:20
    }
})

export default Status;