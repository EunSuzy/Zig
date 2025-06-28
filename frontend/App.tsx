import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-8">
        <View className="bg-blue-100 p-8 rounded-xl shadow-lg">
          <Text className="text-3xl font-bold text-blue-700 mb-4 text-center">
            🎉 성공!
          </Text>
          <Text className="text-lg text-gray-700 mb-6 text-center">
            React Native + NativeWind + 웹 지원이 완료되었습니다!
          </Text>
          
          <View className="space-y-3">
            <View className="bg-green-100 p-3 rounded-lg">
              <Text className="text-green-800 font-semibold">✅ React Native</Text>
            </View>
            <View className="bg-purple-100 p-3 rounded-lg">
              <Text className="text-purple-800 font-semibold">✅ NativeWind (Tailwind)</Text>
            </View>
            <View className="bg-orange-100 p-3 rounded-lg">
              <Text className="text-orange-800 font-semibold">✅ 웹 지원</Text>
            </View>
            <View className="bg-red-100 p-3 rounded-lg">
              <Text className="text-red-800 font-semibold">✅ TypeScript</Text>
            </View>
          </View>
          
          <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-6">
            <Text className="text-white font-bold text-center">시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 