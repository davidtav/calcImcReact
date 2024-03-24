function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24  px-48">
      <section id="form">
        <form>
          <div>
            <label htmlFor="weight" className="block text-neutral-600 font-light text-sm">Peso(kg)</label>
            <input type="text" id="weight" />
          </div>
          <div>
            <label htmlFor="height"className="block text-neutral-600 font-light text-sm">Altura(cm)</label>
            <input type="text" id="height" />
          </div>
          <button>Calcular</button>
        </form>
      </section>
      <section id="result">
        <p>Confira seu resultado</p>
      </section>
      <section id="reference-table">
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menos de 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 17 e 18.49</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18.5 e 24.99</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29.99</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34.99</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>Entre 35 e 39.99</td>
              <td>Obesidade grau II (severa)</td>
            </tr>
            <tr>
              <td>Acima de 40</td>
              <td>Obesidade grau III (morbida)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
