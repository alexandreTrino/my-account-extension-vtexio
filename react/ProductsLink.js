import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const ProductsLink = ({ render, intl }) => {
  return render([
    {
      name: intl.formatMessage({ id: 'store/whirlpool-service.link' }),
      path: '/whirlpool-service',
    },
    {
      name: intl.formatMessage({ id: 'store/whirlpool-products.link' }),
      path: '/whirlpool-products',
    }
  ])
}

ProductsLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(ProductsLink)
