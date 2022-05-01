import * as React from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"

interface IProps {
	seachVideo: (descr: string) => void
}

export default function SearchWidget({ seachVideo }: IProps) {
	const [dataInput, onChangeData] = React.useState("")

	function onChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
		event.preventDefault()
		onChangeData(event.target.value)
	}

	function onConfirm(event: any): void {
		event.preventDefault()
		seachVideo(dataInput)
	}

	function handleKeyDown(event: React.KeyboardEvent<any>): void {
		if (event.key === "Enter") {
			seachVideo(dataInput)
		}
	}
	return (
		<Paper
			component='form'
			sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 700 }}
		>
			<IconButton sx={{ p: "10px" }} aria-label='menu'>
				<MenuIcon />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search '
				inputProps={{ "aria-label": "search" }}
				onChange={onChange}
			/>

			<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
			<IconButton
				type='submit'
				sx={{ p: "10px" }}
				aria-label='search'
				onClick={onConfirm}
				onKeyDown={handleKeyDown}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}
