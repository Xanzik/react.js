import { Heading } from '../../components/Heading/Heading.tsx';
import Input from '../../components/Input/Input.tsx';
import styles from './Login.module.css';
import cn from 'classnames';
import Button from '../../components/Button/Button.tsx';
import { Label } from '../../components/Label/Label.tsx';
import { AuthPrompt } from '../../components/AuthPrompt/AuthPrompt.tsx';
import { type FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};

export function Login() {
	const [error, setError] = useState<string | undefined>();
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`/pizza-api-demo/auth/login`, {
				email,
				password,
			});
			console.log(data);
		} catch (e) {
			if (e instanceof AxiosError) {
				console.log(e);
				setError(e.response?.data?.message);
			}
		}
	};
	return (
		<form onSubmit={submit} className={cn(styles['login__form'])}>
			<Heading>Login</Heading>
			<div className={cn(styles['form__fields'])}>
				<Label className={cn(styles['form__label'])}>
					Your email
					<Input type="email" name="email" id="email" placeholder="Email" />
				</Label>

				<Label className={cn(styles['form__label'])}>
					Your password
					<Input type="password" name="password" id="password" placeholder="Password" />
				</Label>
			</div>

			{error}

			<Button className={cn(styles['login__button'])} size="medium">
				Login
			</Button>
			<AuthPrompt text="Don't have an account yet?" linkText="Register" to="/auth/register" />
		</form>
	);
}
