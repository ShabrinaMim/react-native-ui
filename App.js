import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
} from 'react-native';
let imageItemsOne = [
  {
    image: {
      uri: 'https://as2.ftcdn.net/v2/jpg/01/88/02/79/1000_F_188027949_5ezyY7BT5pQnPiMRSqaITIOlUjd3vv2q.jpg',
      width: 30,
      height: 45,
    },
    text: 'Men',
  },
  {
    image: {
      uri: 'https://image.freepik.com/free-photo/close-up-image-pretty-brunette-woman-drinking-tasty-lemonade-looking-camera-enjoying-time-city-terrace-warm-summertime-natural-beauty_291049-1727.jpg',
      width: 30,
      height: 45,
    },
    text: 'Women',
  },
  {
    image: {
      uri: 'https://image.freepik.com/free-vector/four-frames-with-happy-girls_1308-5486.jpg',
      width: 64,
      height: 64,
    },
    text: 'Kids',
  },
  {
    image: {
      uri: 'https://image.freepik.com/free-photo/image-large-windowed-chapel-with-brick-facade-during-day_501731-902.jpg',
      width: 64,
      height: 64,
    },
    text: 'Home',
  },
];
let imageItemsTwo = [
  {
    uri: 'https://as1.ftcdn.net/v2/jpg/02/80/74/68/1000_F_280746881_5yW0cADpuQXJCpX3woL1j1GSPVIacyLY.jpg',
    width: 64,
    height: 64,
  },
  {
    uri: 'https://image.freepik.com/free-vector/sale-badge-sticker-abstract-brush-stroke-shopping-image-vector_53876-146729.jpg',
    width: 64,
    height: 64,
  },
  {
    uri: 'https://as1.ftcdn.net/v2/jpg/02/80/74/68/1000_F_280746881_5yW0cADpuQXJCpX3woL1j1GSPVIacyLY.jpg',
    width: 64,
    height: 64,
  },
];
let imageItemsThree = [
  {
    image: {
      uri: 'https://primeambassador.com/assets/images/share/mens-watches.jpg',
      width: 64,
      height: 64,
    },
    text: 'The Black Files: Watches',
  },
  {
    image: {
      uri: 'https://image.freepik.com/free-photo/silly-timid-charming-woman-with-dark-curly-hair-stylish-evening-dress-with-red-lipstick-biting-finger-looking-cute-upper-right-corner-thoughtful-imaging-dreaming-about-desirable-thing_1258-80851.jpg',
      width: 64,
      height: 64,
    },
    text: 'Colour Craze: Red Dress',
  },
  {
    image: {
      uri: 'https://primeambassador.com/assets/images/share/mens-watches.jpg',
      width: 64,
      height: 64,
    },
    text: 'The Black Files: Watches',
  },
];
const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#4169E1" barStyle="light-content" />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#4169E1',
          }}>
          <FontAwesome5
            name={'bars'}
            color={'white'}
            size={20}
            style={{
              marginHorizontal: 18,
            }}
          />
          <Text
            style={{
              flex: 1,
              fontSize: 26,
              color: 'white',
              fontWeight: '700',
            }}>
            Creativa
          </Text>
          <FontAwesome5
            name={'shopping-basket'}
            color={'white'}
            size={20}
            style={{marginHorizontal: 18}}
          />
          <FontAwesome5
            name={'bell'}
            color={'white'}
            size={20}
            style={{marginRight: 18}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#4169E1',
          }}>
          <View
            style={{
              margin: 8,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 6,
            }}>
            <FontAwesome5
              name={'search'}
              solid
              size={20}
              style={{
                marginHorizontal: 12,
              }}
            />
            <TextInput
              style={{
                flex: 1,
                fontWeight: '700',
                fontSize: 15,
              }}
              placeholder="Search for Product, Brand and More"></TextInput>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {imageItemsOne.map(function (i) {
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                source={i.image}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  overflow: 'hidden',
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: '900',
                  color: 'black',
                }}>
                {i.text}
              </Text>
            </View>
          );
        })}
      </View>

      <View
        style={{
          backgroundColor: '#DCDCDC',
          paddingVertical: 18,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 12,
            }}>
            {imageItemsTwo.map(function (i) {
              return (
                <Image
                  source={i}
                  style={{
                    width: 150,
                    height: 115,
                    borderRadius: 3.5,
                    overflow: 'hidden',
                    marginLeft: 12,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          paddingVertical: 12,
        }}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 18,
            marginLeft: 12,
            color: 'black',
            fontWeight: '700',
          }}>
          Weekly finds for you
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 12,
            }}>
            {imageItemsThree.map(function (i) {
              return (
                <View
                  style={{
                    width: 215,
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                    marginLeft: 12,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={i.image}
                    style={{
                      width: '100%',
                      height: 180,
                      marginRight: 15,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 8,
                      marginLeft: 8,
                      fontWeight: '600',
                    }}>
                    HOT DEALS
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      marginLeft: 8,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    {i.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 8,
                      marginLeft: 8,
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <FontAwesome5 name={'arrow-left'} color={'red'} size={10} />
                    <Text
                      style={{
                        fontWeight: '600',
                        color: 'red',
                      }}>
                      EXPLORE & SHOP
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
