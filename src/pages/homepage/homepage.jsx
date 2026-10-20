import './homepage.css'
import Header from '../../components/header/header.jsx'

export default function Homepage() {
    return (
        <>
            <Header />

            <div className='home-first-scene'>
                <h1 className='hfc-text1'>Welcome to</h1>
                <h1 className='hfc-text1'>Web Code Editor</h1>
                <div className='hfc-buttons'>
                    <div className='hfc-button1'>start</div>
                </div>
            </div>
        </>
    )
}