import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';


import collectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}` } component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId` } component={collectionPage} />
    </div>
);



export default ShopPage;