import { useEffect, useState } from "react";

const MyForm = () => {
	const [email, setEmail] = useState("abc@mail.com");
	const [password, setPassword] = useState("12345");

	useEffect(
		() => console.log("Input Changed! Fetching Data..."),
		[email, password]
	);

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	return (
		<form>
			<p>Email: {email}</p>
			<p>Password: {password}</p>
			<input
				onChange={handleEmailChange}
				value={email}
				type="text"
				placeholder="Email"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type="password"
				placeholder="Password"
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					console.log(email, password);
					setEmail("");
					setPassword("");
				}}
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default MyForm;
