import BookingSection from "./sections/Booking"
import ProductSection from "./sections/Product"
import SignUpSection from "./sections/SignUp"

function App() {
  return (
    <div className="main-layout">
      <SignUpSection />
      <ProductSection />
      <BookingSection />
    </div>
  )
}

export default App
