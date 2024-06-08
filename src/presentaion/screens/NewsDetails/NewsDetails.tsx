import { RouteProp, useRoute } from "@react-navigation/native"
import React from "react"
import { Text, Image, ScrollView, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc"
import ReadMore from "../../components/shared/ReadMore"
import Header from "../../components/shared/Header"
import {
  formattedTime,
  getFormattedDate,
} from "../../../shared/helpers/time-date"

interface NewsItemDetailProps {
  title: string
  content: string
  imageUrl: string
  publishedAt: string
}
const NewsDetail = ({ route }) => {
  const { news } = route.params

  const handleReadMorePress = () => {
    Linking.openURL(news.url)
  }

  return (
    <SafeAreaView style={tw`flex-1 p-2`}>
      <Header showBackButton title={"Detail"} />
      <Text style={tw`text-xl py-10 font-bold mb-2`}>{news.title}</Text>
      <Image
        source={{ uri: news.urlToImage }}
        style={tw`w-full h-64 rounded-lg mb-2`}
      />
      <ScrollView style={tw`flex-1 px-2 py-2`}>
        <ReadMore
          text={news.content}
          onReadMorePressedHandler={handleReadMorePress}
        />
        <Text style={tw`text-sm text-gray-600 py-4`}>
          Published on {getFormattedDate("en", news?.publishedAt)}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetail
