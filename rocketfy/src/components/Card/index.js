import React from 'react';
// import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ data }) {
	// const [{ isDraggin }, dragRef] = useDrag({
	// 	item: {},
	// 	collect: monitor => ({
	// 		isDraggin: monitor.isDragging(),
	// 	})
	// })

	return (
		<Container ref={'dragRef'}>
			<header>
				{data.labels.map(label => <Label key={label} color={label}/>)}
			</header>
			<p>{data.content}</p>
			{data.user && <img src={data.user}/>}
		</Container>
	)
}