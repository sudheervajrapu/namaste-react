const parent = React.createElement('div', { id: 'parent'}, [
    React.createElement('div', { id: 'child1'}, 
        [
            React.createElement('h1',
                { id: 'heading'},
                "I'm an H1 tag."),
            React.createElement('h2',
                { id: 'heading'},
                "I'm an H2 tag.")
        ]
    ),
    React.createElement('div', { id: 'child2'}, 
        [
            React.createElement('h1',
                { id: 'heading'},
                "I'm an H1 tag."),
            React.createElement('h2',
                { id: 'heading'},
                "I'm an H2 tag.")
        ]
    )
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);