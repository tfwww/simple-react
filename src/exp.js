// string => DOM
const createDOMFromString = (domStr) => {
	const div = document.createElement('div')
    div.innerHTML = domStr
    return div
}

const mount = (wrapper, component) => {
	wrapper.appendChild(component.renderDOM())
	component.onStateChange = (oldEl, newEl) => {
		wrapper.insertBefore(newEl, oldEl)
		wrapper.removeChild(oldEl)
	}
}

class Component {
	constructor(props = {}) {
		this.props = props
	}

	setState(state) {
		const oldEl = this.el
		this.state = state
		this.el = this.renderDOM()
		if (this.onStateChange) {
			this.onStateChange(oldEl, this.el)
		}
	}

	renderDOM() {
		this.el = createDOMFromString(this.render())
		if (this.onClick) {
			this.el.addEventListener('click', this.onClick.bind(this), false)
		}
		return this.el
	}
}

class LikeButton extends Component {
	constructor(props) {
		super(props)
		this.state = { isLiked: false }
	}

	onClick() {
		this.setState({
			isLiked: !this.state.isLiked
		})
	}

	render() {
		return `
			<button class='like-btn'>
			<span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
			<span>?</span>
			</button>
		`
	}
}

const wrapper = document.querySelector('.wrapper')
mount(wrapper, new LikeButton())