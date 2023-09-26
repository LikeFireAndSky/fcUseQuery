import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Comment from './pages/Comment';
import Sample from './pages/Sample';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/post" element={<Comment />} />
				<Route path="/sample" element={<Sample />} />
			</Routes>
		</div>
	);
}

export default App;
