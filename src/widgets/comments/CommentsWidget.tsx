import { Avatar, Box, Typography } from "@mui/material"
import { green } from "@mui/material/colors"
import React from "react"
import Divider from "@mui/material/Divider"

interface IProps {
	comments: {}[]
}

export default function CommentsWidget({ comments }: IProps): JSX.Element {
	return (
		<>
			<Box>
				<Divider />
				<Typography>Comments</Typography>
				{comments.map((comment, idx) => {
					return (
						<Box key={idx} sx={{ display: "flex", mt: 2 }}>
							<Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
								R
							</Avatar>
							<Typography sx={{ ml: 1 }}>{"Some comments"}</Typography>
						</Box>
					)
				})}
			</Box>
		</>
	)
}
