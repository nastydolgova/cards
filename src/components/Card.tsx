import { ItemModel } from "../models/ItemModel"

interface CardProps {
    item: ItemModel
    children?: React.ReactNode
}

export default function  Card({item, children}: CardProps) {
    return (
        <div className="card">
            {children}
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <a href="#" className="btn btn-primary">{item.btnText}</a>
            </div>
        </div>
    )
}