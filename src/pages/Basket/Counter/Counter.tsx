
import './counter.scss';

type props = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const Counter: React.FC<props> = ({count, increment, decrement}) => {

    return (
        <div className="counter">
            <button className="btn-reset counter__btn" type='button' onClick={decrement}>-</button>
            <span className="counter__count">{count}</span>
            <button className="btn-reset counter__btn" type='button' onClick={increment}>+</button>
        </div>
    );
}
    
export default Counter;