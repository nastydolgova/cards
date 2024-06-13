import Card from "./components/Card";
import { ItemModel } from "./models/ItemModel"

export interface Card {
	src: string
	item: ItemModel
}

const cards: Card[] = [
    {
		src: 'https://via.placeholder.com/200',
		item: {
			title: 'title1',
			text: 'Lorem ipsum dolor sit1',
			btnText: 'click1'
		}
	},
    {
		src: '',
		item: {
			title: 'title2',
			text: 'Lorem ipsum dolor sit2',
			btnText: 'click2'
		}
	},
]

export default function App() {
	
	return (
		<div className="cards">
			{
				cards.map(({src, item}, index) => {
					return (
						<Card key={index} item={item}>
							{ src ? ( <img src={src} className="card-img-top" alt="picture 1" /> ) : '' }
						</Card>)
				})
			}
		</div>
	);
}