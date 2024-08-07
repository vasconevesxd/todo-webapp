export default function Button({ buttonType, children }) {
    return (
        <button className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] text-white w-full rounded-[5px] cursor-pointer 
        ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`}>
            {children}
        </button>
    )
}
