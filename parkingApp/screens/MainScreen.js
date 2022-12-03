import {StyleSheet,View,Text,Button} from 'react-native'

const MainScreen = props =>{

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.text}>Welcome To </Text>
                <Text style={styles.text}>ParkIT</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer}>
                    <Button title='BOOK A SLOT' onPress={() => {props.navigation.navigate('Booking')}} style={styles.button}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='PARK NOW'  onPress={() => {props.navigation.navigate('Booking')}} style={styles.button}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='STATUS'  onPress={() => {props.navigation.navigate('Status')}} style={styles.button}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='USE FASTAG'  onPress={() => {props.navigation.navigate('Status')}} style={styles.button}/>
                </View>
            </View>
        </View>


    )

}

const styles=  StyleSheet.create({
    main:{
        flex:1
    },
    header:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        margin:10

    },
    text:{
        color:'#66ccff',
        fontSize:40
    },
    buttonContainer:{
        flex:1,
        padding:10,
        margin:10
    },
    button:{

    }
})

export default MainScreen;