import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Alert
  } from "react-native";
  import { useState, useEffect } from "react";
  import { collection, getDocs } from "firebase/firestore";
  import { Button, SearchBar } from "react-native-elements";
  import { db } from './firebase-config'; 
  var Users = [];
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "200%",
          backgroundColor: "white",
        }}
      />
    );
  }
  
  const SearchDoc = (props) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [mail, setMail] = useState("");  
    useEffect(() => {
        const querySnapshot = getDocs(collection(db, "doctors")).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("Usersss",doc.id, " => ", doc.data());
            Users.push(doc.data());
            setData(Users);
        });
  
        });
        
    }, []);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search for a Doctor"
            onChangeText={(text) => {
              setSearch(text);
            }}
            value={search}
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.searchBarInput}
            inputStyle={styles.searchBarInputText}
          />
        </View>
        <View style={styles.searchResults}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.uid}
            ItemSeparatorComponent={FlatListItemSeparator}
            renderItem={(item) => {
              console.log(item.item);
  
              if (item.item.email?.includes(search)) {
                console.log("In return of searchDoc")
                return (
  
                  
                  <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("DocProfile", {
                      params: {
                        param1:item.item.email,
                        current: "doctor",
                      },
                    });
                  }
                  }>
  
  
                  <View style={{padding:20}}>
                    
                    <Text style={styles.flatlist}>
                      {item.item.email}
                    </Text>
  
                   
                    <Text style={styles.flatlist}>
                      {item.item.name ??item.item.displayName }
                    </Text>
                  </View>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  
    body: {
      backgroundColor: "#fff",
    },
    searchContainer: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    searchBar: {
      backgroundColor: "#fff",
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 10,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    searchBarInput: {
      width: Dimensions.get("window").width - 40,
      backgroundColor: "#aaa",
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 10,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
    },
    searchBarInputText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "black",
    },
    searchResults: {
      backgroundColor: "#aaa",
      alignItems: "center",
      justifyContent: "center",
      borderRadius:20
    },
  
    searchResultText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
  
    },
    flatlist: {
      fontSize: 15,
      fontWeight: "bold",
      color: "black",
      width:500,
      borderRadius:10
    },
  });
  export default SearchDoc;