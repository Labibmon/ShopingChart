import { withRouter } from 'next/router'
import '../styles/styles.scss';
import { HeadTag } from './component/HeadTag';
import { Container, Card } from 'semantic-ui-react'
import { NavbarComp } from './component/NavbarComp';
import { CarouselComp } from './component/CarouselComp';

class Index extends React.Component {
    render() {
      const { router } = this.props
      return (
          <>
            <HeadTag />
            <NavbarComp />
            <Container className="w-100 py-3">
                <CarouselComp />
                <div className="card-promo">
                    <img className="my-3" src='https://fibercreme.com/wp-content/uploads/2019/05/banner-dummy-JKN.jpg' alt='banner-promo' />
                </div>
                <Card
                    href='#card-example-link-card'
                    header='Elliot Baker'
                    meta='Friend'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
            </Container>
          </>
      )
    }
  }
  

  export default withRouter(Index)