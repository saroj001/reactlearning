import React, { useState } from 'react'

export default function About(props) {
	// const [myStyle, setMyStyle] = useState({
	// 		color: 'black',
	// 		backgroundColor: 'white'
	// })

	let myStyle = {
		color: props.mode ==='dark'?'white':'black',
		backgroundColor: props.mode ==='dark'?'black':'white',
	}

  return (
		<div className='py-4'>
			<div className='container'>
				<h1 className='mb-3'>About us </h1>
				<div className="accordion" id="accordionExample">
					<div className="accordion-item">
							<h2 className="accordion-header">
							<button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Analyze Your text
							</button>
							</h2>
							<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
							<div className="accordion-body">
									Textutils gives you a way to analyze you rtext quickly and efficiently. Be it word count, character count or nuch more. 
							</div>
							</div>
					</div>
					<div className="accordion-item">
							<h2 className="accordion-header">
							<button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Free to use
							</button>
							</h2>
							<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
							<div className="accordion-body">
									TextUtils is a free character counter tool that porovides instant character count & word count statistics for a given text. textUtils reports the number of words and characters. Thus it is suitable for writting text with word/ character limit.
							</div>
							</div>
					</div>
					<div className="accordion-item">
							<h2 className="accordion-header">
							<button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									Browser Compatible
							</button>
							</h2>
							<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
								<div className="accordion-body">
										This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
								</div>
							</div>
					</div>
					</div>
			</div>
		</div>
  )
}
