import React from 'react'
import { Button , Image} from 'semantic-ui-react'

export const ButtonExampleGroupFloated = () => (
  <div>
    <Button.Group centered>
      <Button active href="/#/">Home</Button>
      <Button href="/#/skills">Skills</Button>
      <Button href="/#/contact">Contact</Button>
    </Button.Group>
  </div>
)

export const ImageExampleCircular = () => (
  <Image src={process.env.PUBLIC_URL + '/imgs/2.jpg'} size='small' shape='circular' centered
  alt="personal-img"
  />
)

export const ButtonExampleCircularSocial = () => (
  <div>
    <Button circular color='facebook' icon='facebook' href="http://www.facebook.com/brot97" />
    <Button circular color='twitter' icon='twitter' href="http://www.twitter.com/brot1997"/>
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
)

export const JSXHome = () => (
  <div>
        <HeaderPage />
        <br/>
        <ImageExampleCircular />
      <div className="container" >
              <p>Hi, I am Mahmoud.</p>
              <p>Urbanite. Foodie. Explorer. Aspiring programmer.</p>
              <p><span><a target="_blank" href="https://en.wikipedia.org/wiki/Palestine"> Palestine </a></span> via
              <span><a target="_blank" href="https://en.wikipedia.org/wiki/Gaza"> Gaza </a></span>
              City. Student on <span><a target="_blank" href="http://www.iugaza.edu.ps/"> Islamic University of Gaza.</a></span></p>
              <p>Intrigued by design, traveling, photography, classical music, fabulous food, and even better conversations.	&nbsp;</p>
              <p>Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.	&nbsp;</p>
      </div>
      <footer>
          <ButtonExampleCircularSocial/>
      </footer>
  </div>
);
export const HeaderPage = () => (
  <div>
        <div className="Header-App">
              <img src={process.env.PUBLIC_URL + '/imgs/1.png'} />
        </div>
          <ButtonExampleGroupFloated />
  </div>
);
