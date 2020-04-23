import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFectching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading : selectIsCollectionFectching,
});

const collectionsOverViewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default collectionsOverViewContainer;
