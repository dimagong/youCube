import { IRestAPIData } from "../models/Models"

export default function SearchVideo(seachText: string, dataApi: IRestAPIData[]): IRestAPIData[] {
	const regData = new RegExp(seachText, "i")
	let findVideo: any[] = []
	dataApi.forEach((el) => {
		let decription = el.description.match(regData)

		let author = el.author.match(regData)

		let title = el.title.match(regData)

		if (decription) findVideo.push(decription)

		if (author) findVideo.push(author)
		if (title) findVideo.push(title)
	})

	//delete same result
	const cleanLisrVideo: any[] = []
	if (findVideo.length) {
		findVideo.forEach((el) => {
			const isExist = cleanLisrVideo.find((item) => item.input === el.input)
			if (!isExist) cleanLisrVideo.push(el)
		})
	}

	//decrease length
	if (cleanLisrVideo.length > 3) cleanLisrVideo.length = 3

	const findDataVideo: IRestAPIData[] = []
	if (cleanLisrVideo.length) {
		cleanLisrVideo.forEach((el) => {
			const findEl = dataApi.find(
				(data) =>
					data.description === el.input || data.title === el.input || data.author === el.input
			)
			if (findEl) findDataVideo.push(findEl)
		})
	}

	return findDataVideo
}
