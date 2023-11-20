import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
	const [currentTempUnit, handleToggleSwitchChance] = useState('C');

	const handleChange = (e) => {
		if (currentTempUnit === 'C') handleToggleSwitchChance('F');
		if (currentTempUnit === 'F') handleToggleSwitchChance('C');
	};
	console.log(currentTempUnit);
	return (
		<label className="switch">
			<input type="checkbox" className="switch__box" onChange={handleChange} />
			<span
				className={
					currentTempUnit === 'F'
						? 'switch__slider switch__slider-F'
						: 'switch__slider  switch__slider-C'
				}
			></span>
			<p className={`switch__temp-F ${currentTempUnit === "F" && "switch__active"}`}>F</p>
			<p className={`switch__temp-C ${currentTempUnit === "C" && "switch__active"}`}>C</p>
		</label>
	);
};

export default ToggleSwitch;
