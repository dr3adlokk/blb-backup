
import React from 'react';
// import Aux from '../hoc/Aux'
import { Card, CardBody, CardImage, CardText, CardTitle, Button } from 'mdbreact';
// import EpiNumber from '../EpiCard/EpiNumber';
// import EpiBand from '../EpiCard/EpiBand';
// import EpiVid from '../EpiCard/EpiVid';
// import EpiDescription from '../EpiCard/EpiDesc';

// // import './styles.scss';

class EpiCard extends React.Component {
  render() {
  let { number, band, link, title, description, url } = this.props;
  return (
//     // <Aux>
//     <Card className='epi-card'>
//       <EpiNumber number={number} />
//       <EpiBand band={band} />

//       <EpiVid link={link} />
//       <EpiDescription title={title} description={description} url={url} />

//     </Card>
//     // </Aux>
//   );
// }
// }





<Card cascade>
    <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
    <CardBody cascade>
        <CardTitle>Card title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button href="#">Button</Button>
    </CardBody>
</Card>)
  }}

  export default EpiCard