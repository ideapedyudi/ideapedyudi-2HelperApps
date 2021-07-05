import React, { useState } from "react";

// --------------------- react native ------------------
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from "react-native";

// ------------------ natove icon vector ----------------
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ZeroCalculator() {
    const [resultText, setResultText] = useState("");
    const [calcText, setCalcText] = useState("0");

    // klik =
    const onButtonClick = (text) => {
        if (text == "=") {
            return calculateResult();
        }
        setResultText(resultText + text);
    };

    // hasil
    const calculateResult = () => {
        setCalcText(eval(resultText));
    };

    // klik operator
    const onOperationClick = (operation) => {
        let operations = ["DEL", "+", "-", "*", "/"];

        if (operation == "DEL") {
            return setResultText(
                resultText.toString().substring(0, resultText.length - 1)
            );
        }
        if (operation == "AC") {
            setResultText("");
            setCalcText(0);
            return;
        }
        if (operations.includes(resultText.toString().split("").pop())) return;
        setResultText(resultText + operation);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='#FFC980' />
            <View style={styles.result}>
                <Text style={styles.resultText}>{calcText}</Text>
            </View>
            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{resultText}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    <View style={[styles.row, { backgroundColor: '#FFC980' }]}>
                        <TouchableOpacity
                            onPress={() => onOperationClick("AC")}
                            style={styles.btn}
                        >
                            <Text style={[styles.operationButton, { color: 'white', fontSize: 20 }]}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onOperationClick("DEL")}
                            style={styles.btn}
                        >
                            <Text style={[styles.operationButton, { color: 'white', fontSize: 20 }]}>
                                <FontAwesome5 name="backspace" color="#ffff" size={20}></FontAwesome5>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(1)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(2)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(3)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(4)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(5)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(6)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(7)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(8)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(9)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => onButtonClick(".")}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick(0)}
                            style={styles.btn}
                        >
                            <Text style={styles.number}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onButtonClick("=")}
                            style={styles.btn}
                        >
                            <Text style={[styles.number, { color: '#FC7373', paddingHorizontal: 50 }]}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.operations}>
                    <TouchableOpacity
                        onPress={() => onOperationClick("+")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("-")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("/")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onOperationClick("*")}
                        style={styles.btn}
                    >
                        <Text style={styles.operationButton}>*</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    result: {
        flex: 2,
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    resultText: {
        fontSize: 35,
        color: "#343A40",
        marginRight: 10
    },
    calculationText: {
        fontSize: 20,
        color: "#FFC980",
        fontWeight: "bold",
        marginRight: 10
    },
    number: {
        fontSize: 30,
        color: "#343A40",
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderWidth: 0.3,
        borderColor: "#F9F9F9",
        backgroundColor: 'white',
        borderRadius: 50,
        elevation: 0.5
    },
    calculation: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        fontSize: 30,
    },
    buttons: {
        flex: 7,
        flexDirection: "row",
    },
    numbers: {
        flex: 3,
        backgroundColor: "white",
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    operations: {
        flex: 1,
        backgroundColor: "#EDEDED",
        alignItems: "center",
        justifyContent: "space-around",
    },
    operationButton: {
        fontSize: 30,
        color: "#FC7373",
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
});