import { useState, useEffect, useContext } from "react";
import { NameContext } from "./main.jsx";

function Hello() {
	const name = useContext(NameContext);
	return <h1>Hello, {name}!</h1>;
}

function Bye() {
	const name = useContext(NameContext);
	return <h1>Bye, {name}!</h1>;
}

function Counter() {
	//Reactive Data & State
	//Static Data & State
	//Change = Mutation

	// Loading => Mounts => Updates => Unmounts

	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	function unmounted() {
		console.log("Unmounted");
	}

	function mounted() {
		console.log("Mounted");

		return unmounted;
	}

	useEffect(mounted, []);

	useEffect(() => console.log(`updated`, count, count2), [count, count2]);

	return (
		<>
			<h1>Counter: {count}</h1>
			<h1>Counter: {count2}</h1>
			<button onClick={() => setCount(count + 1)}>Increment 1</button>
			<button onClick={() => setCount2(count2 + 1)}>Increment 2</button>
		</>
	);
}

export { Hello, Bye, Counter };
