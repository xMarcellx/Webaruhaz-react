function TermekLista() {
  return (
    <main className="productList">
      <h1>Forgalmazott termékek</h1>
      <ul className="products">
        {termekek.map((termek) => (
          <Termek key={termek.id} termek={termek} />
        ))}
      </ul>
    </main>
  )
}
function Termek({ termek }) {
  const rendelheto = termek.raktar > 0

  return (
    <li className="product">
      <h2 className="productName">{termek.nev}</h2>
      <p className="productInfo">Ár: {termek.ar} Ft</p>
      <p className="productInfo">Raktáron: {termek.raktar} db</p>
      <p
        className={`status ${rendelheto ? 'available' : 'soldOut'}`}
      >
        {rendelheto ? 'Rendelhető' : 'Elfogyott'}
      </p>
      <p className="description">{termek.leiras}</p>
    </li>
  )
}
const termekek = [
  {
    id: 1,
    nev: 'bögre',
    ar: 500,
    raktar: 100,
    leiras: 'Fehér alapú 2.5dl bögre, egyedi képpel',
  },
  {
    id: 2,
    nev: 'póló',
    ar: 3000,
    raktar: 300,
    leiras: 'Többféle alapszínű és méretű minőségi póló, elején vagy hátulján kérhető legfeljebb 5 szavas felirattal',
  },
  {
    id: 3,
    nev: 'sapka',
    ar: 2000,
    raktar: 0,
    leiras: 'Többféle alapszínű baseball sapka, elejére kérhető emblémával',
  },
  {
    id: 4,
    nev: 'esernyő',
    ar: 2500,
    raktar: 50,
    leiras:
      'Kis átmérőjű fekete vagy fehér kicsire összecsukható esernyő egy emblémával',
  },
]




export default TermekLista