import {View,StyleSheet} from 'react-native'

export const SpliteLine = () => {
    return (
        <View style={styles.style}>
            <View  />
        </View>
    )
}

const styles = StyleSheet.create({
    style:{
        width:'100%',
        height:2,
        backgroundColor:'#B6B6B4',
        marginTop:5,
        opacity:0.5
    }
})