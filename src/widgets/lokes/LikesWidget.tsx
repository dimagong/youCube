import React from "react"
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined"
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined"
import { Box, Typography } from "@mui/material"

interface IProps {
	likesCount: number
}

export default function LikesWidget({ likesCount }: IProps): JSX.Element {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Box sx={{ display: "flex", alignItems: "center", height: "30px", mr: 3 }}>
					<ThumbUpAltOutlinedIcon />
					<Typography sx={{ ml: 1, fontSize: "1rem" }}>{likesCount}</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", height: "30px" }}>
					<ThumbDownOutlinedIcon />
					<Typography sx={{ ml: 1, fontSize: "1rem" }}>
						not
						<br /> like
					</Typography>
				</Box>
			</Box>
		</>
	)
}
