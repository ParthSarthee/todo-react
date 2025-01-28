import { useEffect, useState } from "react";

const MyForm = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });

	return (
		<form>
			<p>Email: {formData.email}</p>
			<p>Password: {formData.password}</p>
			<input
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				value={formData.email}
				type="text"
				placeholder="Email"
			/>
			<input
				onChange={(e) => setFormData({ ...formData, password: e.target.value })}
				value={formData.password}
				type="password"
				placeholder="Password"
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					console.log(formData);
					setFormData({ email: "", password: "" });
				}}
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default MyForm;
