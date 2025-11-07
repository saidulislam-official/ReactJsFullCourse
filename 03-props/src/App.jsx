import Card from "./components/Card";
const App = () => {
  return (
    <>
      <div className="parent">
        <Card user = 'Steve Bill' age={18} img="https://cdn.mos.cms.futurecdn.net/kXUihcLa33aC96RgbUpX6a-320-80.png"/>
        <Card user = 'Bill Gates' age={28} img="https://tse4.mm.bing.net/th/id/OIP.kzDUHeAL7KA69KuhYKSA-wHaFZ?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Card user = 'Elon Musk' age={32} img="https://tse3.mm.bing.net/th/id/OIP.3Tm1H1wofvZUVe91NvZOnwHaFG?rs=1&pid=ImgDetMain&o=7&rm=3"></Card>
        <Card user = 'Jeff Bezos' age={39} img="https://tse1.mm.bing.net/th/id/OIP.KQHYv2vyVlHycg1tg-5sYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"></Card>
      </div>
    </>
  )
}

export default App;