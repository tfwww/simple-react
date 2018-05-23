// const button = document.querySelector('.like-btn')
// const buttonText = button.querySelector('.like-text')
// let isLiked = false
// button.addEventListener('click', function () {
// 	isLiked = !isLiked
// 	if (isLiked) {
// 		buttonText.innerHTML = '取消'
// 	} else {
// 		buttonText.innerHTML = '点赞'
// 	}
// }, false)

// string => DOM
const createDOMFromStr = (domStr) => {
	const div = document.createElement('div')
    div.innerHTML = domStr
    return div
}


class LikeButton {
	constructor() {
		this.state = {
			isLiked: false
		}
	}
	changeLikeText () {
		const likeText = this.el.querySelector('.like-text')
		this.state.isLiked = !this.state.isLiked
		const {isLiked} = this.state
		if (isLiked) {
		  likeText.innerHTML = '取消'
		} else {
		  likeText.innerHTML = '点赞'
		}
	}

    render() {
		this.el = createDOMFromStr(
			`
				<button class='like-btn'>
					<span class='like-text'>点赞</span>
				</button>
			`
		)
		this.el.addEventListener('click', () => {
			this.changeLikeText()
		})
		return this.el
    }
}

const wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render())

const likeButton2 = new LikeButton()
wrapper.appendChild(likeButton2.render())