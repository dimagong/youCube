import { Box } from "@mui/material"
import React, { useMemo, useState } from "react"
import SearchWidget from "../widgets/searh/SearchWidget"

import "./HomeView.scss"
import { IRestAPIData } from "../models/Models"
import DescriptionWidget from "../widgets/description/DescriptionWidget"
import LikesWidget from "../widgets/lokes/LikesWidget"
import CommentsWidget from "../widgets/comments/CommentsWidget"
import RelatedView from "../widgets/related/RelatedView"
import PlayerWidget from "../widgets/view/PlayerWidget"
import { DataVideoContext } from "../App"
import SearchVideo from "../utils/SearchVideo"

export default function HomeView(): JSX.Element {
	const dataReastAPI = React.useContext(DataVideoContext)
	const [selectVideo, upSelectVideo] = useState<IRestAPIData>(dataReastAPI[0])
	const { description, author, title, likes_counter, comments } = selectVideo
	const [relatedVideo, upRelatedVideo] = useState<IRestAPIData[]>([
		dataReastAPI[1],
		dataReastAPI[2],
	])

	function seachVideoDescr(descr: string): void {
		const listFindVideo = SearchVideo(descr, dataReastAPI)

		//showing select video
		if (listFindVideo.length) {
			upSelectVideo(listFindVideo[0])
			const prevVideo = [...relatedVideo]
			const upListRelated = [...listFindVideo.slice(1), ...prevVideo]
			//delete same video
			const cleanList: IRestAPIData[] = []

			upListRelated.forEach((el) => {
				const isExist = cleanList.find((item) => item.id === el.id)
				if (!isExist) cleanList.push(el)
			})

			upRelatedVideo(cleanList)
		}
	}

	return (
		<Box className='homepage-container'>
			<Box className='search-box'>
				<SearchWidget seachVideo={seachVideoDescr} />
			</Box>
			<Box className='widget-box'>
				<PlayerWidget selectVideo={selectVideo} />
			</Box>
			<Box className='related-box'>
				<RelatedView relatedVideo={relatedVideo} />
			</Box>
			<Box className='description-box'>
				<DescriptionWidget context={description} author={author} title={title} />
			</Box>
			<Box className='likes-box'>
				<LikesWidget likesCount={likes_counter} />
			</Box>
			<Box className='comments-box'>
				<CommentsWidget comments={comments} />
			</Box>
		</Box>
	)
}
