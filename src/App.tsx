import React, { Suspense } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"
import Loading from "./widgets/loaders/Loader"
import { dataReastAPI } from "./services/RestAPI"

export const DataVideoContext = React.createContext(dataReastAPI)

function App() {
	const HomeViewElement = React.lazy(() => import("./views/HomeView"))
	return (
		<DataVideoContext.Provider value={dataReastAPI}>
			<BrowserRouter basename={"/"}>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path={AppRoutes.HOME} element={<HomeViewElement />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</DataVideoContext.Provider>
	)
}

export default App
