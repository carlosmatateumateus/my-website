import '../assets/styles/contacts.scss'

const Contacts = () =>{
    return(

        <div id='contacts'>

            <div id='nothing'>

            </div>

            <div id="form">

                 <form action="https://formsubmit.co/carlosmatateumateus@gmail.com" method='POST'>
                    <h1 className='title'>Contact</h1>
                    <input type="text" name="name"  placeholder='Your name' required/>
                    <input type="email"name="email" placeholder='Your email' required/>
                    <input type="text" name='phone' placeholder='Your phone number(optional)'/>
                    <input type="text" name='site'  placeholder='Your website(optional)'/>
                    <textarea name="subject" id="subject"  placeholder='Say what you want.' required></textarea>
                    <button type="submit"><img src="https://media.giphy.com/media/VSLZ3W76PKczrTtw1K/giphy.gif" alt="send"/></button>
 
                </form>

            </div>

        </div>

    );
}

export default Contacts;
