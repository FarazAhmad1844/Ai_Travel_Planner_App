import { View, Text } from 'react-native'

export default function OptionCard({ option ,selectTraveler}) {
  
    return (
        <View 
            style={[{
                padding: 25,
                display: 'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                backgroundColor: 'lightgrey'
                ,borderRadius:15,
                marginTop:20,
                height:105
            },selectTraveler?.id==option?.id &&{borderWidth:3}]}>
            <View>
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20,
                        textAlign: 'left'
                    }}>{option.title}</Text>
                     <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        textAlign: 'left',
                        color:'grey'
                    }}>{option.desc}</Text>
            </View>
            <View>   
             <Text
                style={{
                     fontSize: 40,
                        textAlign: 'left'
                }}>{option.icon}</Text>
            </View>
         


        </View >
    )
}