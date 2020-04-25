import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import collectionPageContainer from '../collection/collection.container';
import collectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(
		() => {
			fetchCollectionsStart();
		},
		[
			fetchCollectionsStart,
		]
	);

	return (
		<div className='shop-page'>
			<Route
				exact
				path={`${match.path}`}
				component={collectionsOverViewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={collectionPageContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart : () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
