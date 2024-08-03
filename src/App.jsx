import router from "./Router/router.jsx";

import { RouterProvider } from "react-router-dom";

import AuthContextProvider from "./Context/AuthContext.jsx";
function App() {
	return (
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	);
}

export default App;
