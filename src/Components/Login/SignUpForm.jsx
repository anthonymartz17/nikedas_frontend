import "./Auth.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { createUser } from "../../Services/users.services";

export default function SignUp() {
	const location = useLocation();

	const navigate = useNavigate();
	const { signUp } = useAuth();
	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirm_password: "",
		account_type: "buyer",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setSignUpForm((prevState) => ({ ...prevState, [name]: value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const response = await signUp(signUpForm.email, signUpForm.password);
			await createUser({
				email: signUpForm.email,
				uid: response.user.uid,
				account_type: signUpForm.account_type,
			});

			setSignUpForm({
				email: "",
				password: "",
				confirm_password: "",
				account_type: "buyer",
			});
			navigate("/account");
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (location.state) {
			setSignUpForm((prevState) => ({
				...prevState,
				account_type: location.state.account_type,
			}));
		}
	}, []);

	return (
		<section className="auth global_card poppins-extralight">
			<h3 className="poppins-semibold">Create an account!</h3>

			<form className="auth_form" onSubmit={handleSubmit}>
				<div className="text-start">
					<label htmlFor="email" className="pb-1 block">
						Email:
					</label>
					<input
						className="global_input_field"
						type="text"
						value={signUpForm.email}
						onChange={handleChange}
						name="email"
						required
					/>
				</div>
				<div className="text-start">
					<label htmlFor="password" className="pb-1 block">
						Password:
					</label>
					<input
						type="password"
						value={signUpForm.password}
						onChange={handleChange}
						name="password"
						required
						className="global_input_field"
					/>
				</div>
				<div className="text-start">
					<label htmlFor="confirm_password" className="pb-1 block">
						Confirm Password:
					</label>
					<input
						type="password"
						value={signUpForm.confirm_password}
						onChange={handleChange}
						name="confirm_password"
						required
						className="global_input_field"
					/>
				</div>
				<div className="text-center mt-4">
					<label className="pb-1 block">Account Type:</label>
					<div className="flex justify-center gap-4 poppins-semibold">
						<label className="flex items-center">
							<input
								type="radio"
								value="buyer"
								name="account_type"
								checked={signUpForm.account_type === "buyer"}
								onChange={handleChange}
								className="mr-2"
							/>
							Buyer
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								value="seller"
								name="account_type"
								checked={signUpForm.account_type === "seller"}
								onChange={handleChange}
								className="mr-2"
							/>
							Seller
						</label>
					</div>
				</div>

				<Link to="/auth/forgot" className="forgot_password">
					Forgot Password?
				</Link>

				<button className="btn btn_bg_dark" type="submit">
					Sign up
				</button>
				<Link to="/auth" className="text-orange-500 underline">
					Login instead
				</Link>
			</form>
		</section>
	);
}
