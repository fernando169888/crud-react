import React from "react";
const CrudTableRow = ({ datoBD, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = datoBD;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        {/* setDataToEdit manda un objeto con los datos del renglon al que le pico el usuario algo asi { name, constellation, id }*/}
        <button onClick={() => setDataToEdit(datoBD)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
