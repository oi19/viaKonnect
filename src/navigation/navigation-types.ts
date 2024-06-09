import { IconsName } from "../assets/svgs"
import { NewsProps } from "../domain/news"

export type MainNavigationTypes = MainAppStackTypes

export type MainAppStackTypes = {
  [x: string]: any
  News: undefined
  NewsDetail: { data: NewsProps }
}

export type MainNavigationAllScreensTypes = MainAppStackTypes
export type MainNavigationKeys = keyof MainAppStackTypes
