
// ...rest contains the children props whose value is the button's text
export default function Button({className = '',...rest}){
    return (<button className={`text-white  font-bold  px-10 p-4  rounded-full tracking-wide outline-none border-0 ${className}`} {...rest}/>)
}