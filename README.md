# React Native Expo Tweet NaCl [<img src="https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png" width="50"/>](https://www.npmjs.com/package/tweet-nacl-react-native-expo)

### This package contains modified files from [TweetNaCl.js](https://github.com/dchest/tweetnacl-js) that work with react native expo

#### Example App: [Tweet NaCl Demo (React Native Expo)](https://github.com/rajtatata/react-native-tweet-nacl-expo-example)
#### Tweet NaCl documentation: [TweetNaCl.js Docs](https://github.com/dchest/tweetnacl-js#documentation)

# Modifications

-  Modified nacl-fast.js in order to replace the method for generating random bytes

- Used [getRandomBytesAsync](https://docs.expo.io/versions/latest/sdk/random/#getrandombytesasync) from [expo-random](https://docs.expo.io/versions/latest/sdk/random/) in order to generate random bytes

- Since getRandomBytesAsync is async the following methods have become async
    - nacl.randomBytes
    - nacl.box.keyPair
    - nacl.sign.keyPair
    - nacl.sign.keyPair.fromSeed

- nacl-util.js contains useful functions to encode/decode UTF8 and Base64

# Usage

```
import nacl from 'expo-tweet-nacl';
```