import { useState } from "react";

function Looping() {
	const [show, setShow] = useState(true);
	const names = ["John", "Paul", 123123123];

	return (
		<div>
			<h1>Beatles</h1>

			{show ? (
				<ul>
					{names.map((name, index) => (
						<li key={index}>{name}</li>
					))}
				</ul>
			) : (
				<h1>Show is false right now.</h1>
			)}

			<button onClick={() => setShow(false)}>Toggle Off</button>
			<button onClick={() => setShow(true)}>Toggle On</button>
		</div>
	);
}

export default Looping;
