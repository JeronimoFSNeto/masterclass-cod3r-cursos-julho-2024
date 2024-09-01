export default function Caixa(props: any) {
    return (
        <div className={`
            flex justify-center items-center
            w-20 h-20 bg-red-500 rounded-md
            border-2 border-zinc-300
            ${props.className ?? ""}
        `}>
            <span>{props.texto}</span>
        </div>
    );
}