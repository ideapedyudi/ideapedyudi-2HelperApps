import React, { useState, useEffect } from 'react';

// --------------- react native -------------------
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList } from 'react-native';

// -------------- react native vector -------------
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// -------------- axios --------------------
import axios from 'axios';

// ------------ native base -----------------
import { Button, useToast } from "native-base"

const LunoTodoList = (props) => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([])
    const [selectedTodo, setSelectedTodo] = useState({})
    const [button, setButton] = useState("Save")
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false);


    // tambah data todo
    const submit = () => {
        const data = {
            todo
        }
        if (button === "Save") {
            if (data.todo === "") {
                toast.show({
                    title: "type something",
                    status: "warning",
                    placement: "top"
                })
            } else {
                console.log('data rer :', data);
                axios.post('https://28edb5e3b250.ngrok.io/todos', data)
                    .then(res => {
                        console.log("res", res);
                        setTodo("");
                        getData();
                        toast.show({
                            title: "add todo list success",
                            status: "success",
                            placement: "top"
                        })
                    })
            }
        } else if (button === "Update") {
            axios.patch(`https://28edb5e3b250.ngrok.io/todos/${selectedTodo}`, data)
                .then(res => {
                    console.log("res", res);
                    setTodo("");
                    setButton("Save")
                    getData();
                    toast.show({
                        title: "update todo list success",
                        status: "success",
                        placement: "top"
                    })
                })
        }

    }

    // get data/ menampilkan data
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setIsLoading(true);
        axios.get('https://28edb5e3b250.ngrok.io/todos')
            .then(res => {
                console.log('res :', res);
                setTodos(res.data.data.todos)
                setIsLoading(false);
            })
    }

    // update data
    const selectItem = (item) => {
        console.log('selected item : ', item);
        setSelectedTodo(item.id)
        setTodo(item.todo);
        setButton("Update")
        getData()
    }

    // delete data
    const deleteItem = (item) => {
        console.log(item);
        axios.delete(`https://28edb5e3b250.ngrok.io/todos/${item.id}`)
            .then(res => {
                console.log('res delete :', res);
                getData()
                toast.show({
                    title: "delete todo list success",
                    status: "success",
                    placement: "top"
                })
            })
    }

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor='#00BFA6' />
                <ScrollView>
                    <View>
                        <View style={{ paddingHorizontal: 20, height: '78%', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#91D0C8', marginTop: 10, paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10, elevation: 2 }}>
                                <View>
                                    <Text style={{ fontSize: 15, color: '#232323', width: '80%' }}>{item.todo}</Text>
                                </View>

                                <View style={{ alignItems: 'flex-end', marginTop: -20 }}>
                                    <Text>
                                        <FontAwesome5 name="edit" color="#39A2DB" size={16} onPress={() => selectItem(item)}></FontAwesome5> &nbsp; &nbsp;
                                        <FontAwesome5 name="trash" color="#FF616D" size={16} onPress={() => Alert.alert(
                                            'Warning',
                                            'Are you sure you want to delete this data?',
                                            [
                                                {
                                                    text: 'No', onPress: () => console.log('botton No')
                                                },
                                                {
                                                    text: 'yes', onPress: () => deleteItem(item)
                                                }
                                            ])}></FontAwesome5>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    };

    return (
        <View>
            <View>
                <TextInput style={styles.input} placeholder="Write Todo..." value={todo} onChangeText={(value) => setTodo(value)} />
                <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                    {button === "Save" ?
                        <Button color="#39A2DB" onPress={submit}>
                            Save
                        </Button> :
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button color="#39A2DB" style={{ width: '49%' }} onPress={submit}>
                                Update
                            </Button>
                            <Button style={{ backgroundColor: '#FC7373', marginLeft: 10, width: '49%' }} onPress={() => { setButton("Save"), setTodo("") }}>
                                Batal
                            </Button>
                        </View>
                    }
                </View>
            </View>
            <View>
                <FlatList
                    data={todos}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    refreshing={isLoading}
                    onRefresh={getData}
                />
            </View>
        </View>
    )
}

export default LunoTodoList

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    judul: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 20,
        color: '#00BFA6',
        paddingBottom: 10
    },
    input: {
        marginHorizontal: 20,
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderColor: '#00BFA6',
    }
});