import React from "react";

export const Slides = ({ slides, currentSlide }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center border-black border-2 w-[80vw] h-96">
				<h1 className="text-4xl">
					{slides[currentSlide] && slides[currentSlide].title}
				</h1>
				<p className="text-lg p-6">
					{slides[currentSlide] && slides[currentSlide].text}
				</p>
			</div>
		</>
	);
};
