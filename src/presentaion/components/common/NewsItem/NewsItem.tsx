import React from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import tw from "twrnc"
import { styles } from "./styles"
import { NewsProps } from "../../../../domain/news"

interface NewsItemProps {
  item: NewsProps
  navigationHandler: (item: NewsProps) => void
}

const NewsItem: React.FC<NewsItemProps> = ({ item, navigationHandler }) => {
  const handlePress = () => {
    navigationHandler(item)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={tw`${styles.container}`}>
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={tw`${styles.image}`} />
      )}
      <Text style={tw`${styles.title}`}>{item.title}</Text>
      <Text style={tw`${styles.description}`}>
        {item.description ? item.description : "No description available"}
      </Text>
    </TouchableOpacity>
  )
}

export default NewsItem
