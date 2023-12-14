import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { Slides } from "./components/Slides";

function App() {
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	const slide = [
		{
			title : "Slide 1",
			text : "Slide 1 Content"
		},
		{
			title : "Slide 2",
			text : "Slide 2 Content"
		},
		{
			title : "Slide 3",
			text : "Slide 3 Content"
		},
		{
			title : "Slide 4",
			text : "Slide 4 Content"
		}
	]

	const handleReset = () => {
		setCount(0);
	};

	const handlePrev = () => {
		if (count === 0){
			setDisableButton(true)
		} else {
			setCount(count-1);
		}

	};

	const handleNxt = () => {
		if (count ===  (slide.length)-1){
			setDisableButton(true)
		} else {
			setCount(count+1);
		}
	};

	return (
		<>
			<Header />

			<div className="flex items-center justify-center gap-10 mt-10">
				<Button onClick={handleReset} label="Reset" />
				<Button onClick={handlePrev} label="Previous" />
				<Button onClick={handleNxt} label="Next" />
			</div>

			<div className="mt-6 mx-auto flex items-center justify-center">
				<Slides slides={slide} currentSlide={count}/>
			</div>
		</>
	);
}

export default App;
