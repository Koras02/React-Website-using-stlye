import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin} from 'react-icons/fa';
  import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
 
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                 <FooterLinksWrapper>
                   <FooterLinkItems>
                     <FooterLinkTitle>
                         <FooterLinkTitle>CoutactUs</FooterLinkTitle>
                         <FooterLink to='/'>How it works</FooterLink>
                         <FooterLink to='/siginin'>Testimonials</FooterLink>
                         <FooterLink to='/siginin'>Careers</FooterLink>
                         <FooterLink to='/siginin'>Investors</FooterLink>
                         <FooterLink to='/siginin'>Terms of Service</FooterLink>
                     </FooterLinkTitle>
                   </FooterLinkItems>
                      <FooterLinkItems>
                     <FooterLinkTitle>
                         <FooterLinkTitle>CoutactUs</FooterLinkTitle>
                         <FooterLink to='/'>Submit Video</FooterLink>
                         <FooterLink to='/siginin'>Ambassadors</FooterLink>
                         <FooterLink to='/siginin'>Agency</FooterLink>
                         <FooterLink to='/siginin'>Influencer</FooterLink>
                     </FooterLinkTitle>
                   </FooterLinkItems>
                      <FooterLinkItems>
                     <FooterLinkTitle>
                         <FooterLinkTitle>CoutactUs</FooterLinkTitle>
                         <FooterLink to='/'>Contact</FooterLink>
                         <FooterLink to='/siginin'>Support</FooterLink>
                         <FooterLink to='/siginin'>Destinations</FooterLink>
                         <FooterLink to='/siginin'>Sponsihps</FooterLink>
                     </FooterLinkTitle>
                   </FooterLinkItems>
                   <FooterLinkItems>
                     <FooterLinkTitle>
                         <FooterLinkTitle>CoutactUs</FooterLinkTitle>
                         <FooterLink to='/'>Contact</FooterLink>
                         <FooterLink to='/siginin'>Support</FooterLink>
                         <FooterLink to='/siginin'>Destinations</FooterLink>
                         <FooterLink to='/siginin'>Sponsihps</FooterLink>
                     </FooterLinkTitle>
                   </FooterLinkItems>
               </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/'>
                           dolla
                       </SocialLogo>
                       <WebsiteRights>dolla {new Date().getFullYear()}
                        All Rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap>
           </FooterContainer>
    );
};


export default Footer;