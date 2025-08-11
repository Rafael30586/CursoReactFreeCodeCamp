
import AssemblyHeader from './components/AssemblyHeader'
import Languages from './components/Languages'
import StatusSection from './components/StatusSection'


function App() {
 
  return (
    <>
      <AssemblyHeader></AssemblyHeader>
      <StatusSection></StatusSection>
      <main>
        <Languages></Languages>
      </main>
    </>
  )
}

export default App
