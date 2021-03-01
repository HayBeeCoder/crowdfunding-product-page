import Button from './globals/Button';

export default function Stand({stand,pledge,desc,itemsLeft}){
    // const standClassName = itemsLeft ? ''
    const containerOpacity = itemsLeft ? 'opacity-none' : 'opacity-50';
    const btnFilter = itemsLeft ? 'filter-none' : 'filter-grayscale';
    return (<div className={`p-5 border border-gray-450 rounded-md my-4 ${containerOpacity}`}>
            <span className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
                <h3 className="text-base font-bold tracking-tight text-black">{stand}</h3>
                <p className="text-primary-cyan-moderate font-bold">{pledge}</p>
            </span> 
            <p className="my-4">{desc}</p>
             <span className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
                 <p><span className="font-bold text-black text-2xl tracking-normal mr-1">{Number(itemsLeft) > 0 ? String(itemsLeft) : '0'}</span> <sup className="text-xs"> left</sup></p>
                <Button className={`bg-primary-cyan-moderate my-3 ${btnFilter}`} disabled={Number(itemsLeft) > 0 ? false : true}>{Number(itemsLeft) > 0 ? 'Select Reward' : 'Out of Stock'}</Button>
            </span>
        </div>)
}