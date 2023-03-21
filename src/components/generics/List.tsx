// https://www.youtube.com/watch?v=xFNk2nfDh4M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=19&ab_channel=Codevolution

type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                );
            })}
        </div>
    );
};
