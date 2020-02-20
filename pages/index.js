import { withRouter } from 'next/router'
import '../styles/styles.scss';
import { HeadTag } from './component/HeadTag';
import { Container,Segment } from 'semantic-ui-react'
import { NavbarComp } from './component/NavbarComp';
import { CarouselComp } from './component/CarouselComp';
import { SlickComp } from './component/SlickComp';

class Index extends React.Component {
    render() {
      return (
          <>
            <HeadTag />
            <NavbarComp />
            <Segment className="border-0 rounded-0 p-0 shadow-none">
                <Container className="w-100 py-3">
                    <CarouselComp />
                    <div className="card-promo">
                        <img className="my-3" src='https://fibercreme.com/wp-content/uploads/2019/05/banner-dummy-JKN.jpg' alt='banner-promo' />
                    </div>
                </Container>
            </Segment>
            <Segment className="border-0 px-0 py-3 rounded-0 shadow-none bg-danger">
                <Container fluid>
                    <h3 className='text-white'>FLASH SALE</h3>
                    <div className="pb-3 px-3">
                        <SlickComp />
                    </div>
                </Container>
            </Segment>
          </>
      )
    }
  }
  

  export default withRouter(Index)