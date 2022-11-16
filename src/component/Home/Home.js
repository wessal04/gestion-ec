import React from 'react';
import CollapsibleExample from '../../navbar/navbar';
import UncontrolledExample from '../../slide/slide';
import Article from '../../card/card';
import Map from '../../maps/map';
class Home extends React.Component {
    render() {
    return (
    <div>
    <h2>
    <CollapsibleExample/>
<UncontrolledExample/>
<h1><i>les mellieurs produits</i></h1>
<Article/>
<Map/>
    </h2>
    </div>
    );
    }
    }
    export default Home;