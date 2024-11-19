import React, { useState } from 'react';
import './HomePage.css'; // Plik CSS 

const Home = () => {
const [valueA, setValueA] = useState(''); // Pierwsza wartość
const [valueB, setValueB] = useState(''); // Druga wartość
const [result, setResult] = useState(null); // Wynik działania

const handleCalculate = () => {
const a = parseFloat(valueA); // Konwersja pierwszej wartości na liczbę
const b = Math.min(parseFloat(valueB), 20); // Druga wartość ograniczona do 20

if (!isNaN(a) && !isNaN(b)) {
const calculation = a * b * 0.0333 + a; // Obliczenie
setResult(Math.round(calculation)); // Wynik zaokrąglony do najbliższej liczby całkowitej
} else {
alert('Proszę podać poprawne liczby!');
}
};

return (
<div className="container">
<header className="header">
<h1 className="title">BENCH PRESS 1RP MAX CALCULATOR</h1>
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

{result !== null && (
<h2>Wynik: {result}kg</h2>
)}
</section>
</main>

<footer className="footer">
<p> {new Date().getFullYear()} Przydatne kalkulatory.</p>
</footer>
</div>
);
};

export default Home;