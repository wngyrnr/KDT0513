import './App.css'
import MyComponent from './components/MyComponent'
import Header from './components/useContext/Header'
import Profile from './components/useContext/Profile'
import ThemeTest from './components/useContext/ThemeTest'
import { UserProvider } from './components/useContext/UserContext'
import UseEffectTest from './components/useEffect/UseEffectTest'
import UseMemotest from './components/useMemo/UseMemotest'
import UseRefScroll from './components/useRef/UseRefScroll'
import UseRefTest from './components/useRef/UseRefTest'
import LandingPage from './components/useState/LandingPage'
import SignUp from './components/useState/SignUp'
import UseStateTest from './components/useState/UseStateTest'

function App() {

  return (
    <>
     {/* <MyComponent message={"함수형 컴포넌트 입니다."}/> */}
     {/* <UseStateTest /> */}
     {/* <LandingPage /> */}
     {/* <SignUp />/ */}
     {/* <UseRefTest />/ */}
     {/* <UseRefScroll /> */}
     {/* <UseMemotest /> */}
     {/* <UseEffectTest /> */}
     {/* <ThemeTest /> */}
     <UserProvider>
      <Header />
      <Profile />
     </UserProvider>
    </>
  )
}

export default App
