import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const MyAppLink = ({ render, intl }) => {
  return render([
    {
      name: intl.formatMessage({ id: 'store/extension-page.link' }),
      path: '/page-one',
    },
    {
      name: intl.formatMessage({ id: 'store/extension-page-2.link' }),
      path: '/page-two',
    },
  ])
}

MyAppLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(MyAppLink)
