import { Text, View } from "react-native";
import Login from "./../components/Login.jsx";
import {auth} from "./../configs/FirebaseConfig.js"
import { Redirect } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Index() {

  const currentuser=auth.currentUser;
  return (
    <View
    style={{
    }}
    >
    {currentuser?
  <Redirect href ={"/mytrip"}/>:
      <Login/>
    }
    </View>
  );
}
