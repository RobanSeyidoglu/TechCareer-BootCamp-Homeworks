import {data} from '../src/store/data.js'

import './App.css'

function App() {

    return (
        <>
            <table className="w3-table" style={{border: "1px solid #000", width: "100%", textAlign: "center"}}>
                <thead>
                <tr style={{background: "#f2f2f2"}}>
                    <th style={{color: "blue"}}>Name</th>
                    <th style={{color: "blue"}}>Units in Stock</th>
                    <th style={{color: "blue"}}>Discontinued</th>
                    <th style={{color: "blue"}}>Quantity Per Unit</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id} style={{background: "#fff"}}>
                        <td>{item.name}</td>
                        <td>{item.unitsInStock > 0 ? item.unitsInStock : '❌'}</td>
                        <td>{item.discontinued ? '✅' : '❌'}</td>
                        <td>{item.quantityPerUnit}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}

export default App