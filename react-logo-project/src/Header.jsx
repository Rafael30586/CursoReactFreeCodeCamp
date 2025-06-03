export default function Header(){
  return(
    <header className='el-header'>
      <img className='react-logo' src="/src/assets/react-logo.png" alt="Logo de React" />
      <nav>
        <ul className='nav-list'>
          <li className='list-element'>Pricing</li>
          <li className='list-element'>About</li>
          <li className='list-element'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}