import './Description.css'
import ButtonAttom from '../../components/button/ButtonAttom'
import descriptionImg from '../../assets/img/description-1-app.png'
import calendarImg from '../../assets/img/description-2-app.png'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer' 

function Description() {
    return(
        <div>
            <Navbar/>
            <section id="section-description">
                <div className="main-div" id="description-div-1">
                    <div id="description-div-1-img">
                        <img id ="description-div-1-img-mix" src={descriptionImg} alt="Imagen aplication"/>
                    </div>
                    <div id="description-div-1-text">
                    <h2>Organize Your Time And Start Getting Results</h2>
                        <p>Sync is the first mobile app on the market to harness the power os social vonnections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away</p>
                        <ul id="description-div-ul">
                            <li id="description-div-il">Analyse and evaluate ypur current status and productivity</li>
                            <li id="description-div-il">Begin monitoring your day to day routine with Sync app</li>
                            <li id="description-div-il">See the improved results in no more than a couple os weeks</li>
                        </ul>
                        <button id="button-lightbox">LIGHTBOX</button>
                    </div>
                </div>
                <div className="main-div" id="description-div-2">
                    <div id="description-div-2-left">
                        <ul id="description-div-2-left-button">
                            <ButtonAttom className="div-2-button" id="div-2-button-1" button_content={'Schedule'}/>
                            <ButtonAttom className="div-2-button" id="div-2-button-2" button_content={'Tracking'}/>
                            <ButtonAttom className="div-2-button" id="div-2-button-3" button_content={'Organize'}/>
                        </ul>
                        <p><b>Schedule task</b> to keep track os their competition. Sync provides multiple scheduling options alarms and reminders.</p>
                        <ul id="description-div-2-left-ul">
                            <li className="description-div-2-left-li">You can always add new task or change the settings of existing ones in your calendar view or the app control panel</li>
                            <li className="description-div-2-left-li">It´s easy to stay focused on your most important daily activities that will gey you closer to meeting your goals</li>
                            <li className="description-div-2-left-li">Use phone reminders to free up your long term memory which will reduce stress ande make you more productive</li>
                        </ul>
                        <ul id="description-div-2-left-button">
                        <ButtonAttom className="button" button_content={'TERMS'}/>
                        <ButtonAttom className="button" id="button-privacy" button_content={'PRIVACY'}/>
                        </ul>
                    </div>
                    <div id="description-div-2-right">
                        <img id="description-div-2-right-img"src={calendarImg} alt="calendar"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
 
    )
}
export default Description