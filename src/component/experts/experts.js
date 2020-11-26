import React from 'react';
import '../experts/experts.scss'
import Expert from '../../assets/experts.png'
import Whatsapp from '../../assets/whatsapp.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import SubmitForm from '../sumbitform/sumbitform.js';
import BottomNav from '../bottomnav/bottomnav.js';
import Nav from '../../assets/icons8-menu-24.png'
function Experts() {
  return (
    <div>
      <div className='backgroundexpert'>

        <div className='backgroundexpert__top__logobox'>
        <div className='backgroundexpert__top__logobox__threedotnav'>
            <img

              src={Nav}
              alt='expert'
            />
          <div className='backgroundexpert__top__logobox__logoimage'>

            <div className='backgroundexpert__top__logobox__Swetha'>Swetha</div>
            <div className='backgroundexpert__top__logobox__dentistry'>DENTISTRY</div>
          </div>
</div>
          <div className='backgroundexpert__top__logobox__blue__blueright'>
          <img
            className='backgroundexpert__top__logobox__blue__image'
            src={Expert}
            alt='expert'
          />  
          </div>
          
        </div>

         
        

      </div>

      <div className='backgroundexpert__top__logobox__blue__intro__name'>Meet <br />Dr. Prashant Patil</div>
      <div className='backgroundexpert__top__logobox__blue__intro__namesmall'>Combine your paid vacation with your dental <br />procedure<br /> schedule to save money or to get more value out of<br /> investment.</div>
      <div className='backgroundexpert__top__logobox__blue__intro__number'>21 311+</div>
      <div className='backgroundexpert__top__logobox__blue__intro__description'>Year of Experience</div>
      <div className='backgroundexpert__top__logobox__blue__intro__description1'>Happy patients</div>
      <div className='backgroundexpert__top__logobox__blue__intro__description2'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent<br /> further complications, the tooth may be extracted or it may be saved by a root canal<br /> treatment. Once root canal treatment is performed, the patient must usually have a crown <br />placed over the tooth to protect it and enhance its aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure in which<br /> the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and <br />sealed.</div>
      <div className='backgroundexpert__top__logobox__blue__intro__description3'>Dental crowns are fabricated in the dental laboratory using the impression your dentist has<br /> made of your tooth after having prepared it. Because dental crowns encase the visible <br />portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can <br />be used to enhance the cosmetic appearance of a tooth.</div>
      <div>

        <div className='backgroundexpert__left__blueleft'>

          <img
            className='backgroundexpert__image1'
            src={Expert}
            alt='expert'
          />

        </div>
        


        <div className='backgroundexpert__left__rightheading'>Meet <br />Dr. Prashant Patil</div>
        <div className='backgroundexpert__rightcontent'>Combine your paid vacation with your dental<br /> procedure <br />schedule to save money or to get more value out of <br />investment.</div>
        <div className='backgroundexpert__rightnumber'>21 311+</div>
        <div className='backgroundexpert__rightdescription'>Year of Experience</div>
        <div className='backgroundexpert__rightdescription1'>Happy patients</div>
        <div className='backgroundexpert__rightdescription2'>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent further complications, the tooth may be extracted or it may be saved by a root canal treatment. Once root canal treatment is performed, the patient must usually have a crown placed over the tooth to protect it and enhance its <br />aesthetics. <br />Root canal treatment, also known as endodontic treatment, is a dental procedure in which the diseased or damaged pulp (core) of a tooth is removed and root<br /> canals are filled and sealed.</div>
        <div className='backgroundexpert__rightdescription3'>Dental crowns are fabricated in the dental laboratory using the impression your dentist has made of your tooth after having prepared it. Because dental crowns encase the visible portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can be used to enhance the cosmetic <br />appearance of a tooth.</div>

        <div>
          

        </div> 
         <div>
                <SubmitForm />
            </div>
            <div>
                <BottomNav />
            </div> 

       </div>

    </div>

  );
}

export default Experts;


























// import React from 'react';
// import '../experts/experts.scss'
// import Expert from '../../assets/experts.png'
// import SubmitForm from '../sumbitform/sumbitform.js';
// import BottomNav from '../bottomnav/bottomnav.js';
// import Nav from '../../assets/icons8-menu-24.png'
// function Experts() {
//   return (
//     <div>
//      <div className='backgroundexpert'>



//      </div>
//     </div>

//   );
// }

// export default Experts;

