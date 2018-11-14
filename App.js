// @flow
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView, 
  TouchableOpacity,
} from 'react-native'

import Expo from 'expo'

// containers
import RootContainer from './src/containers/RootContainer'
import { grey, bold } from 'ansi-colors';
const doSomething = () => {
  alert("(Im)pressed")
}

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold'}}>Nadpis: {this.props.title}</Text>
      </View>
    );
  }
}
// class button extends React.Component {
// render() {
//   return (
//     <View>

//     </View>
//   );
//   }
// }
class Pic extends React.Component {
  render() {
    return (
      <View>
      <Image source={{uri: this.props.url}} style={styles.pic} />
      </View>
    );
  }
}

export default class App extends React.Component {

  render() {
    return <View>
    <Header title='Tohle je nadpis' />
{/* <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'}}
       style={{width: 300, height: 300}} /> */}
<Pic url='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' />

<ScrollView
    style={styles.scroll}
  >
  <Text
      style={styles.text}
>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum. Etiam posuere lacus quis dolor. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Maecenas sollicitudin. Integer vulputate sem a nibh rutrum consequat. Etiam commodo dui eget wisi. Donec quis nibh at felis congue commodo. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.

Duis viverra diam non justo. Cras elementum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis quam. Phasellus rhoncus. Integer vulputate sem a nibh rutrum consequat. Maecenas libero. Suspendisse sagittis ultrices augue. Praesent id justo in neque elementum ultrices. Aliquam ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vitae arcu tempor neque lacinia pretium. Nullam sit amet magna in magna gravida vehicula. Maecenas aliquet accumsan leo. Nunc dapibus tortor vel mi dapibus sollicitudin. Mauris metus. Suspendisse nisl.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nunc tincidunt ante vitae massa. Curabitur bibendum justo non orci. Aliquam erat volutpat. Fusce aliquam vestibulum ipsum. Mauris dictum facilisis augue. Maecenas lorem. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Nulla non arcu lacinia neque faucibus fringilla. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Etiam commodo dui eget wisi.

Cras elementum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. In convallis. Et harum quidem rerum facilis est et expedita distinctio. Nullam at arcu a est sollicitudin euismod. Quisque porta. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Maecenas libero. Nulla quis diam. Integer lacinia. Pellentesque ipsum. Integer pellentesque quam vel velit.

Nam sed tellus id magna elementum tincidunt. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Pellentesque sapien. Duis pulvinar. Etiam dictum tincidunt diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus faucibus molestie nisl. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Vivamus luctus egestas leo. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean placerat. Aliquam ante. Aliquam in lorem sit amet leo accumsan lacinia. Donec vitae arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Integer imperdiet lectus quis justo.
</Text>
</ScrollView>
<TouchableOpacity
         style={styles.button}
         onPress={doSomething}
       >
         <Text> Touch Here </Text>
</TouchableOpacity>
</View>
  }
}

const styles = StyleSheet.create({
 
  header: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  scroll: {
    backgroundColor: 'grey',
    paddingTop: 20,
    height: 290,
  },
  text: {
    margin:20,
    textAlign: "justify",
  },
  pic: {
    width: 300,
    height: 300,
    alignContent: "center"
  },

})
  