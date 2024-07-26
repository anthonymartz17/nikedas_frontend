import React, { useState } from "react";
import "./Accordion.css";

export default function AccordionItem({
	title,
	options,
	selectedValue,
	onChange,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => setIsOpen(!isOpen);

	return (
		<div className="accordion_item poppins-regular">
			<div className="accordion_header" onClick={toggleAccordion}>
				<p className="accordion_title">{title}</p>
				<span className={`accordion_icon ${isOpen ? "open" : ""}`}>+</span>
			</div>
			{isOpen && (
				<div className="accordion_content">
					{options.map((option) => (
						<div className="flex items-center mb-4 accordion_field" key={option.id}>
							<input
								id={option.id}
								type="radio"
								value={option.value}
								name={title.toLowerCase()}
								className="w-4 h-4"
								checked={selectedValue === option.value}
								onChange={(e) => onChange(e.target.value)}
							/>
							<label htmlFor={option.id} className="ms-2">
								{option.label}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
