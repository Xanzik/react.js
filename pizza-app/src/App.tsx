import Button from './components/Button/Button.tsx';
import Input from './components/Input/Input.tsx';

function App() {
	return (
		<>
			<div>
				<Button size="small">Apply</Button>
				<Button size="medium">login</Button>
				<Input placeholder="email" />
			</div>
		</>
	);
}

export default App;
