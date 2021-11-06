import { useState } from 'react'
import './App.css';

function App() {
	const [color, setColor] = useState('red')
	const [text, setText] = useState('Change to blue')
	const newButtonColor = color === 'red' ? 'blue' : 'red'
	const newButtonText = color === 'red' ? 'Change to red' : 'Change to blue'

	const handleChange = () => {
		setColor(newButtonColor)
		setText(newButtonText)
	}

  return (
		<div>
			<button
				style={{ backgroundColor: color }}
				onClick={handleChange}
			>
				{text}
			</button>
		</div>
  );
}

export default App;
