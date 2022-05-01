import { Avatar, Box, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import React from "react"

interface IProps {
	context: string
	author: string
	title: string
}

export default function DescriptionWidget({ context, author, title }: IProps): JSX.Element {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Typography sx={{ mr: 1, fontSize: "1.3rem", fontWeight: 600 }}>{`${title}. `}</Typography>
				<Typography sx={{ fontSize: "1.3rem" }}>{`${context}. `}</Typography>
			</Box>

			<Box sx={{ display: "flex", mt: 2 }}>
				<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
					A
				</Avatar>
				<Typography sx={{ ml: 1 }}>{author}</Typography>
			</Box>
		</>
	)
}
