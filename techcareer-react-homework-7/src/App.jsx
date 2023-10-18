import { useState, useEffect } from "react";
import "./App.css";
const apiUrl = "https://northwind.vercel.app/api/suppliers";
function App() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setSortedData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteRow = (id) => {
    const updatedData = sortedData.filter((item) => item.id !== id);
    setData(updatedData);
    setSortedData(updatedData);
  };
  const handleSort = (clickedProperty) => {
    setSortBy(clickedProperty);

    const sortedDataCopy = [...sortedData].sort((a, b) => {
      const valueA = a[clickedProperty].toLowerCase();
      const valueB = b[clickedProperty].toLowerCase();

      return valueA.localeCompare(valueB);
    });

    if (sortBy === clickedProperty) {
      sortedDataCopy.reverse(); 
    }

    setSortedData(sortedDataCopy);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="company" onClick={() => handleSort("companyName")}>
              Company Name
            </th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>{`${item.address.street}, ${item.address.city}, ${item.address.region}, ${item.address.country}, ${item.address.postalCode}`}</td>
              <td>{item.address.phone}</td>
              <td>
                <button onClick={() => handleDeleteRow(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
