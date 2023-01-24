import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Cars from "./component/Cars";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Cars />
		</QueryClientProvider>
	);
}

export default App;
