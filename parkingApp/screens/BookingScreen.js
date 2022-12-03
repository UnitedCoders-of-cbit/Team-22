import {StyleSheet,TextInput,View,Text,Button} from 'react-native'
import { useState } from 'react'
import { open,close } from '../http/open'

const BookingScreen = props =>{
const formatNumber = number => `0${number}`.slice(-2)

    const [time,setTime]=useState({});
    const [clicked,setClicked] = useState(false)
    const start = () => {
        setTime(new Date());
        setClicked(true)
    }
    return(
        <View style={styles.main}>
            <View style={styles.buttonContainer}>
                    <Button title='START' onPress={start} style={styles.button}/>
            </View>
            <View style={styles.timeInCon}>
                <Text style={styles.text}>TIME IN</Text>
                <View style={styles.timeIn}>
                    <Text style={styles.text}>{clicked?formatNumber(time.getHours()) + ':' + formatNumber(time.getMinutes()): 'HH : MM'}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='OPEN' onPress={() => {open()}} style={styles.button}/>
                </View>
              { /* <View style={styles.buttonContainer}>
                    <Button title='CLOSE' onPress={() => {close()}} style={styles.button}/>
    </View>*/}
            </View>
            
        </View>
    )

}

const styles=  StyleSheet.create({
    timeIn:{
        flexDirection:'row',
        padding:10,
        margin:5
    },
    timeInCon:{
        padding:10,
        margin:5,
        alignItems:"center",
        justifyContent:'center'
    },
    main:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:20,
        padding:10,
        margin:5
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        margin:5,
        padding:5
    },
    buttonContainer:{
        padding:10,
        margin:10,
    },
})

export default BookingScreen;

/*
<TextInput placeholder='HH' style={styles.input}/><Text style={styles.text}> : </Text>
                    <TextInput placeholder='MM'style={styles.input}/>
*/