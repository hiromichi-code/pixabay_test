import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");
	const onFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(term);
	};
	return (
		<div>
			<form className="border-2 rounded py-3 w-5/6 mx-auto" onSubmit={onFormSubmit}>
				<div className="w-2/6 mx-auto flex flex-col">
					<label className="mb-1">Image Search</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						type="text"
						placeholder="search"
						className="border-2 h-8 my-auto pl-2 rounded"
					/>
				</div>
			</form>
		</div>
	);
};
