// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";
import { useEffect } from "react";

export default function Converter() {
  const [query, setQuery] = useState("1");
  const [firstQur, setFirstQur] = useState("EUR");
  const [secQur, setSecQur] = useState("USD");
  const [rates, setRates] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchQur() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${query}&from=${firstQur}&to=${secQur}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          setRates(query);
          setIsLoading(false);
          return;
        }

        const data = await res.json();
        const result = data.rates[secQur];

        setIsLoading(false);
        setRates(() => result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQur();
  }, [query, firstQur, secQur]);

  console.log(firstQur, secQur);
  return (
    <div>
      <input
        value={query}
        type="text"
        onChange={(event) => {
          setQuery(Number(event.target.value));
        }}
        disabled={isLoading}
      />
      <select
        value={firstQur}
        onChange={(event) => setFirstQur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secQur}
        onChange={(event) => setSecQur(event.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {rates} {secQur}
      </p>
    </div>
  );
}
