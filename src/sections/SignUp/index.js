import { useState } from "react"

function SignUpSection() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [terms, setTerms] = useState(false)

  console.log({ firstName, email, password, terms })

  function handleFirstNameInput(event) {
    const inputValue = event.target.value

    setFirstName(inputValue)
  }

  function handleEmailInput(event) {
    const inputValue = event.target.value

    setEmail(inputValue)
  }

  function handlePasswordInput(event) {
    const inputValue = event.target.value

    setPassword(inputValue)
  }

  function handleTermsCheckbox(event) {
    const checkedValue = event.target.checked

    setTerms(checkedValue)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const userData = { firstName, email, password, terms }

    console.log({ userData })
  }

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleFirstNameInput}
          value={firstName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailInput}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordInput}
          value={password}
        />
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={handleTermsCheckbox}
            checked={terms}
          />
          <label htmlFor="terms">I accept Terms and Conditons</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default SignUpSection
