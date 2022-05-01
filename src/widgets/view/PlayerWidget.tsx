import { Card, CardContent } from "@mui/material"
import { IRestAPIData } from "../../models/Models"

interface IProps {
	selectVideo: IRestAPIData
}

export default function PlayerWidget({ selectVideo }: IProps): JSX.Element {
	return (
		<Card
			sx={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<CardContent
				sx={{
					width: "100%",
					height: "90%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<iframe
					title={selectVideo.title}
					id={`${selectVideo.id}`}
					width='100%'
					height='100%'
					src={selectVideo.video_source}
					frameBorder='0'
					allow='accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</CardContent>
		</Card>
	)
}
