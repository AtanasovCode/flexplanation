import {
    View,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
    return (
        <SafeAreaView className="flex-1 bg-black">
            <Text className="text-white">Home</Text>
        </SafeAreaView>
    );
}

export default Home;