import NotificationButton from "./componetns/NotificationButton"
import Header from "./componetns/Header"
import SaleCard from "./componetns/card"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SaleCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
