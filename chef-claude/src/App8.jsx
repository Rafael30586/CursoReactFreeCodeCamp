export default function App8() {

    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
    }
  return (
      <section>
          <h1>Signup form</h1>
          <form action={signUp} >
              <label htmlFor="email">Email:  </label>
              <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />

              <br />

              <label htmlFor="password">Password: </label>
              <input id="passwrod" type="password" name="password" />

              <button>Submit</button>
          </form>
      </section>
  )
}