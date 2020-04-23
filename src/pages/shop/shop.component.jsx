import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import collectionPageContainer from '../collection/collection.container';
import collectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
	componentDidMount () {
		const { fetchCollectionsStartAsync } = this.props;

		fetchCollectionsStartAsync();
	}

	render () {
		const { match } = this.props;

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
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
