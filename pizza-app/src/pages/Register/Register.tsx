import cn from 'classnames';
import styles from '../Login/Login.module.css';
import { Heading } from '../../components/Heading/Heading.tsx';
import { Label } from '../../components/Label/Label.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import { AuthPrompt } from '../../components/AuthPrompt/AuthPrompt.tsx';
import { type FormEvent, useEffect } from 'react';
import { register, userActions } from '../../store/user.slice.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store.ts';

export type RegisterForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
	name: {
		value: string;
	};
};

export function Register() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & RegisterForm;
		const { email, password, name } = target;
		await sendRegister(email.value, password.value, name.value);
	};

	const sendRegister = async (email: string, password: string, name: string) => {
		dispatch(register({ email, password, name }));
	};

	return (
		<form onSubmit={submit} className={cn(styles['login__form'])}>
			<Heading>Register</Heading>
			<div className={cn(styles['form__fields'])}>
				<Label className={cn(styles['form__label'])}>
					Your email
					<Input type="email" name="email" id="email" placeholder="Email" />
				</Label>

				<Label className={cn(styles['form__label'])}>
					Your password
					<Input type="password" name="password" id="password" placeholder="Password" />
				</Label>

				<Label className={cn(styles['form__label'])}>
					Your name
					<Input type="name" name="name" id="name" placeholder="Name" />
				</Label>
			</div>
			<Button className={cn(styles['login__button'])} size="medium">
				Register
			</Button>
			<AuthPrompt text="Already have an account?" linkText="Login" to="/auth/login" />
		</form>
	);
}
