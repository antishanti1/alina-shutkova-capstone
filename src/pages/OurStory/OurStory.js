import Nav from "../../components/Nav/Nav"
import './OurStory.scss';



export default function OurStory () {
    return (
       <>
        <Nav />
     <section className="story">
        <div className="intro">



         <div className="intro__alina">

<div className="intro__alina-contacts">
<span className="intro__alina-contacts--l intro--bold"> Alina </span>
<span className="intro__alina-contacts--l intro--bold"> Software Engineer  </span>
          <span className="intro__alina-contacts--l intro--bold"> https://github.com/antishanti1</span>
          <span className="intro__alina-contacts--l intro--bold"> shutkova2603@gmail.com</span>
</div>

         <div className="intro__alina-img">

</div>
         </div>

        <div className="intro__katya">
         <div className="intro__katya-img">

         </div>
         <div className="intro__katya-contacts">
          <span className="intro--bold"> Katya </span>
          <span className="intro--bold"> Photographer </span>
          <span className="intro--bold"> https://kateph.com/</span>
          <span className="intro--bold"> katerinanakati@gmail.com</span>
         </div>
        </div>

        </div>


        <div className="solution">
            <p className="solution__p"> Since the outbreak of a <span className="intro--bold intro--extralarge" >full-scale war in Ukraine</span> , we have continuously been asking ourselves what can we do to help. 
                The reality is that, despite our sincere intentions, our actions alone will never be sufficient due us being so far away. 
                However, we firmly believe that by uniting with numerous individuals, we can accomplish <span className="intro--bold intro--large" >remarkable</span>  things together. Thus, our mission today 
                is to establish a small organization of young and creative individuals who can employ their skills and talents to make a <span className="intro--bold intro--large" >meaningful impact</span> . 
                Our approach encompasses various avenues, including art, digital solutions, fundraisers,
                 and more, rather than solely relying on financial contributions.</p>
                 <p className="solution__p">
                 <span className="intro--bold intro--large" >Katya</span>, a gifted photographer, has been providing valuable assistance to volunteering organizations, 
                 while <span className="intro--bold intro--large" >Alina</span> , an aspiring software engineer,
                 believes that the ability to solve problems extends beyond mere bug fixing
                 and can be applied to addressing global challenges through  <span className="intro--bold intro--large" >innovative software solutions</span>.
                 </p>
                 <p className="solution__p">
                 We are actively seeking like-minded individuals who share our vision. 
                 If you are interested, please provide us with your contact information,
                  so that we may <span className="intro--bold intro--extralarge" >collaborate in making a positive difference in the world together</span>.
                 </p>
                 <input className="solution__email" type="text" placeholder="Your Email" />

        </div>
        </section>
        </>
    )
}