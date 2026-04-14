import ButtonComponent, {
  ButtonType,
} from '../../../component/button/ButtonComponent.js'
import SuperButtonComponent from '../../../component/button/SuperButtonComponent.js'

export default class FooterComponent {
  readonly get = () => {
    const div = document.createElement('div')

    ButtonComponent.getButtonHTML(
      'Click me',
      ButtonType.Warning,
      () => {
        alert('Footer button clicked!')
      },
      div,
    )

    SuperButtonComponent.getSuperButtonHTML(div, () => {
      alert('Super Button clicked!')
    })

    SuperButtonComponent.getSuperButtonHTML(div, () => {
      alert('Super Button clicked!')
    })

    SuperButtonComponent.getSuperButtonHTML(div, () => {
      alert('Super Button clicked!')
    })

    SuperButtonComponent.getSuperButtonHTML(div, () => {
      alert('Super Button clicked!')
    })
    SuperButtonComponent.getSuperButtonHTML(div, () => {
      alert('Super Button clicked!')
    })

    return div
  }
}
