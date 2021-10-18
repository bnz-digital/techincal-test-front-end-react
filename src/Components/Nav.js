import React from 'react';

export default function Nav({loading, items}) {
    const render = () => {
        if (loading) return 'loading...';

        return (
            <ul>
                { items.map(renderItem) }
            </ul>
        );
    };

    return render();
}

function renderItem(item) {
    if (item.children) return (
        <ul>
            { item.children.map(renderItem) }
        </ul>
    );

    return <li key={ item.id } id={ item.id }>{ item.name }</li>;
}