import React from 'react';

export default function Nav({loading, items}) {
    const styles = {
        textAlign: 'left'
    };

    const render = () => {
        if (loading) return 'loading...';

        return (
            <ul style={styles}>
                { items.map(renderItem) }
            </ul>
        );
    };

    return render();
}

function renderItem(item) {
    if (item.children) return (
        <li key={ item.id } id={ item.id }>
            { item.name }
            <ul>
                { item.children.map(renderItem) }
            </ul>
        </li>
    );

    return <li key={ item.id } id={ item.id }>{ item.name }</li>;
}