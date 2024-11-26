import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./HomePage.css";

const Home = () => {
const [valueA, setValueA] = useState(""); 
const [valueB, setValueB] = useState(""); 
const [result, setResult] = useState(null); 

const handleCalculate = () => {
const a = parseFloat(valueA); 
const b = Math.min(parseFloat(valueB), 20); 

if (!isNaN(a) && !isNaN(b)) {
const calculation = a * b * 0.0333 + a; 
setResult(Math.round(calculation)); 
} else {
alert("Proszę podać poprawne liczby!");
}
};

return (
<div className="container">
<header className="header">
<h1 className="title">BENCH PRESS 1RP MAX CALCULATOR</h1>
{}
<nav>
<Link to="/calorie-calculator" className="nav-link">

</Link>
</nav>
</header>

<main className="main">
<section className="section">
<h2>Kalkulator</h2>
<p>Podaj dwie wartości, aby wykonać obliczenie:</p>

<label>
Ciężar:
<input
type="number"
value={valueA}
onChange={(e) => setValueA(e.target.value)}
className="input"
/>
kg
</label>
<br />
<label>
Liczba powtórzeń (max 20):
<input
type="number"
value={valueB}
onChange={(e) => setValueB(e.target.value)}
className="input"
/>
</label>
<br />
<button onClick={handleCalculate} className="button">
Oblicz
</button>

{result !== null && <h2>Wynik: {result}kg</h2>}
</section>
</main>

<footer className="footer">
<p> {new Date().getFullYear()} Przydatne kalkulatory.</p>
</footer>
</div>
);
};

export default Home;