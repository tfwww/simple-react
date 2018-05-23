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
    render() {
		this.el = createDOMFromStr(
			`
				<button class='like-btn'>
					<span class='like-text'>点赞</span>
				</button>
			`
		)
		this.el.addEventListener('click', () => console.log('click'), false)
		return this.el
    }
}

const wrapper = document.querySelector('.wrapper')
const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render())

const likeButton2 = new LikeButton()
wrapper.appendChild(likeButton2.render())