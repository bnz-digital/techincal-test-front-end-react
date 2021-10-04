import React from 'react';

function DataItems(props) {

    return (
        <div>
            {
                props.data.map((item, index) => {
                    return <div key={index}>
                        <ul><li key={item.id}>{item.name}</li></ul>
                        {
                            //When the node has children, call itself recursively
                            item.children && item.children.length ?
                            <ul><DataItems data={item.children}></DataItems></ul> : null
                        }
                    </div>
                })
            }
        </div>
      )
  }
export default DataItems;