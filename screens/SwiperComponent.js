// import React from 'react';

// import { View, Text, StyleSheet, Image, Button, Dimensions, StatusBar } from 'react-native';
// import Swiper from 'react-native-swiper';

// const height = Dimensions.get('window').height
// const width = Dimensions.get('window').width

// const SwiperComponent = ({ navigation }) => {
//   return (
//     <Swiper style={styles.wrapper} showsButtons={true} loop={false} paginationStyle={styles.pagination}>
//       <View style={styles.slide}>
//         <Image source={require('../assets/onboarding1.png')} style={styles.image} />
//         <Text style={styles.title}>Create Your time table</Text>
//         <Text style={styles.subtitle}>Discover more</Text>
//       </View>
//       <View style={styles.slide}>
//         <Image source={require('../assets/onboarding2.png')} style={styles.image} />
//         <Text style={styles.title2}>Get Started</Text>
//         <Button title="Get Started" onPress={() => navigation.navigate('RegisterScreen')} />
//       </View>
//     </Swiper>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {flex:1},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   title2: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#888',
//   },
//   pagination: {
//     bottom: 20,
//   },
// });

// export default SwiperComponent;


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const { height, width } = Dimensions.get("window");
const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'black'}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'black'}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'black'}}>Done</Text>
    </TouchableOpacity>
);

const SwiperComponent = ({navigation}) => {
    return (
        
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.navigate("RegisterScreen")}
        onDone={() => navigation.navigate("RegisterScreen")}
        pages={[
          {
            
          backgroundColor: 'white',
           image: <Image source={require('../assets/onboarding1.png')} resizeMode='cover'style={{height:300,width:width}}></Image>,
                       title: 'Create Your time table',
            subtitle: 'Discover more',
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('../assets/onboarding2.png')} resizeMode='cover'style={{height:300,width:width}}></Image>,
            title: 'Get Started',
            subtitle:'',
          },
       
        ]}
      />
    );
};

export default SwiperComponent;

