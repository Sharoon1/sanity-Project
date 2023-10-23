import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter,faLinkedin , } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function Footer(){
    const year = new Date().getFullYear()
    return(
        <>
        <div className="text-center p-5 mb-0" style={{backgroundColor:'#d4d4d4'}}>
          <div className='p-5'>
            <h1 className='font-bold mb-5'>About Us</h1>
            <div className="text-sm">Lorem,ipsum dolor sit amet consectetur adipiscing elit. esse minima incidunt adio name facilis, eligendi itaque fugic cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</div>
       <div className=' flex justify-center my-5 gap-4'>
        <div className='w-3'><FontAwesomeIcon  icon={faFacebookF} style={{color: '#4333d5'}} /></div> 
        <div className='w-5'><FontAwesomeIcon  icon={faInstagram} style={{color:'#4333d5'}} /></div> 
        <div className='w-5'><FontAwesomeIcon  icon={faTwitter} style={{color:'#4333d5'}} /></div> 
        <div className='w-5'><FontAwesomeIcon  icon={faLinkedin} style={{color:'#4333d5'}}/></div> 
        
        </div>
       <div className='flex justify-center mb-5'>Made with <div className='w-4 mt-1'> <FontAwesomeIcon  icon={faHeart} style={{color:'#26f8cb'}} /> </div> by &nbsp; <span style={{color: '#9492b2'}}> Sharoon Developer </span></div>
       <p className='my-5'>Copyright &copy; {year} <span style={{color: '#9492b2'}}> Xplore Skill.</span> All Rights Reserved</p>
       </div>
        </div>
        </>
    )
}
export default Footer;