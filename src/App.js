import { useState } from 'react'
import './App.css';

function App() {
	const [color, setColor] = useState('red')
	const [text, setText] = useState('Change to blue')
	const [disabled, setDisabled] = useState(false)
	const newButtonColor = color === 'red' ? 'blue' : 'red'
	const newButtonText = color === 'red' ? 'Change to red' : 'Change to blue'

	const handleChange = () => {
		setColor(newButtonColor)
		setText(newButtonText)
	}

	const handleCheckbox = (e) => {
		const isDisabled = e.target.checked
		setDisabled(isDisabled)
	}

  return (
		<div>
			<button
				style={{ backgroundColor: disabled ? 'gray' : color }}
				disabled={disabled}
				onClick={handleChange}
			>
				{text}
			</button>
			<input
				type="checkbox"
				id="disable-button-checkbox"
				aria-checked={disabled}
				onChange={handleCheckbox}/>
			<label htmlFor="disable-button-checkbox">Disable button</label>
		</div>
  );
}

export default App;
