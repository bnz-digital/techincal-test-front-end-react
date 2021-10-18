import React, { useState } from 'react';

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

function Item({item, children}) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        if (item.children) setOpen(!open);
    };

    return <li
        key={ item.id }
        id={ item.id }
    >
        { item.children && (open ? 'v ' : '> ')}
        <span
            onClick={toggleOpen}
        >
            { item.name }
        </span>
        { open && children }
    </li>;
}

function renderItem(item) {
    if (item.children) return (
        <Item item={item}>
            <ul>
                { item.children.map(renderItem) }
            </ul>
        </Item>
    );

    return <Item item={item}/>;
}