import "./App.css";
import React, { useState } from "react";

const CalorieCalculator = () => {
const [weight, setWeight] = useState(""); 
const [height, setHeight] = useState(""); 
const [age, setAge] = useState("");
const [gender, setGender] = useState("male");
const [activity, setActivity] = useState(1.2); 
const [calories, setCalories] = useState(null); 

const calculateCalories = () => {
let ppm = 0;


if (gender === "male") {
ppm = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age;
} else if (gender === "female") {
ppm = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
}

// Obliczanie CPM
const cpm = ppm * activity;
setCalories(cpm.toFixed(2));
};

return (
<div className="container">
<header className="header">
<h1 className="title">CALORIE CALCULATOR</h1>
</header>
<br></br>
<br></br>
<div style={{ marginBottom: "10px" }}>
<label>
Waga (kg):
<input
type="number"
value={weight}
onChange={(e) => setWeight(e.target.value)}
style={{ marginLeft: "10px" }}
/>
</label>
</div>

<div style={{ marginBottom: "10px" }}>
<label>
Wzrost (cm):
<input
type="number"
value={height}
onChange={(e) => setHeight(e.target.value)}
style={{ marginLeft: "10px" }}
/>
</label>
</div>

<div style={{ marginBottom: "10px" }}>
<label>
Wiek:
<input
type="number"
value={age}
onChange={(e) => setAge(e.target.value)}
style={{ marginLeft: "10px" }}
/>
</label>
</div>

<div style={{ marginBottom: "10px" }}>
<label>
Płeć:
<select
value={gender}
onChange={(e) => setGender(e.target.value)}
style={{ marginLeft: "10px" }}
>
<option value="male">Mężczyzna</option>
<option value="female">Kobieta</option>
</select>
</label>
</div>

<div style={{ marginBottom: "10px" }}>
<label>
Poziom aktywności:
<select
value={activity}
onChange={(e) => setActivity(parseFloat(e.target.value))}
style={{ marginLeft: "10px" }}
>
<option value={1.2}>Siedzący tryb życia (1.2)</option>
<option value={1.375}>Lekko aktywny (1.375)</option>
<option value={1.55}>Średnio aktywny (1.55)</option>
<option value={1.725}>Bardzo aktywny (1.725)</option>
<option value={1.9}>Ekstremalnie aktywny (1.9)</option>
</select>
</label>
</div>

<button
className="button"
onClick={calculateCalories}
>
Oblicz
</button>

{calories && (
<div style={{ marginTop: "20px" }}>
<h2>Twoje zapotrzebowanie kaloryczne: {calories} kcal</h2>
</div>
)}
</div>
);
};

export default CalorieCalculator;