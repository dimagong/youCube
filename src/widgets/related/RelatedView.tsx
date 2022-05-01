import { Box, Button, Typography } from "@mui/material"
import React from "react"
import Divider from "@mui/material/Divider"
import { IRestAPIData } from "../../models/Models"

interface IProps {
	relatedVideo: IRestAPIData[]
}

export default function RelatedView({ relatedVideo }: IProps): JSX.Element {
	return (
		<>
			<Box>
				<Box sx={{ display: "flex", justifyContent: "flex-start" }}>
					<Button
						sx={{
							backgroundColor: "black",
							"&:hover": {
								backgroundColor: "gray",
							},
							color: "white",
						}}
					>
						Related video
					</Button>
					<Button
						sx={{
							ml: 2,
							backgroundColor: "gray",
							"&:hover": {
								backgroundColor: "black",
							},
							color: "white",
						}}
					>
						All video
					</Button>
				</Box>
				<Divider sx={{ mt: 1, mb: 1 }} />

				{relatedVideo.length
					? relatedVideo.map((el: IRestAPIData, idx) => {
							return (
								<Box key={idx} sx={{ display: "flex" }}>
									<Box>
										<iframe
											title='title'
											width='150'
											height='90'
											// src='https://www.youtube.com/embed/tgbNymZ7vqY'
											src={el.video_source}
										></iframe>
									</Box>
									<Box sx={{ ml: 3 }}>
										<Typography sx={{ fontWeight: 700 }}>{el.title}</Typography>
										<Typography sx={{ fontSize: "0.8rem" }}>{el.description}</Typography>
									</Box>
								</Box>
							)
					  })
					: null}
			</Box>
		</>
	)
}
