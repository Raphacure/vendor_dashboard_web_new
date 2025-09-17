import { useState } from "react";
import { AllergyStyled } from "./Allergy.styled";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

interface Allergy {
  id: number;
  name: string;
  reaction: string;
  category: string;
  severity: string;
}

const initialAllergies: Allergy[] = [
  {
    id: 1,
    name: "Codeine",
    reaction: "Lorem ipsum dolor sit amet, consectetuer adipelit.",
    category: "Side effect",
    severity: "Mild",
  },
  {
    id: 2,
    name: "Latex",
    reaction: "Rashes, cold, cough",
    category: "Allergy",
    severity: "Moderate",
  },
  {
    id: 3,
    name: "Latex",
    reaction: "Rashes, cold, cough",
    category: "Allergy",
    severity: "Moderate",
  },
  {
    id: 4,
    name: "Latex",
    reaction: "Rashes, cold, cough",
    category: "Allergy",
    severity: "Moderate",
  },
  {
    id: 5,
    name: "Codeine",
    reaction: "Lorem ipsum dolor sit amet, consectetuer",
    category: "Side effect",
    severity: "Mild",
  },
  {
    id: 6,
    name: "Codeine",
    reaction: "Lorem ipsum dolor sit amet, consectetuer",
    category: "Side effect",
    severity: "Mild",
  },
];

const AllergySection = () => {
  const [allergies, setAllergies] = useState<Allergy[]>(initialAllergies);
  const [editId, setEditId] = useState<number | null>(null);
  const [editedAllergy, setEditedAllergy] = useState<Allergy | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAllergy, setSelectedAllergy] = useState<Allergy | null>(null);

  const handleEdit = (allergy: Allergy) => {
    setEditId(allergy.id);
    setEditedAllergy({ ...allergy });
  };

  const handleSave = () => {
    if (editedAllergy) {
      setAllergies(
        allergies.map((item) =>
          item.id === editedAllergy.id ? editedAllergy : item
        )
      );
      setEditId(null);
      setEditedAllergy(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (editedAllergy) {
      setEditedAllergy({ ...editedAllergy, [e.target.name]: e.target.value });
    }
  };

  const handleDeleteClick = (allergy: Allergy) => {
    setSelectedAllergy(allergy);
    setShowModal(true);
  };

  

  return (
    <AllergyStyled>
      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Allergy</th>
                <th>Reaction</th>
                <th>Category</th>
                <th>Severity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allergies.map((allergy) => (
                <tr key={allergy.id}>
                  <td>
                    <input type="checkbox" className="checkbox" />
                  </td>
                  {editId === allergy.id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={editedAllergy?.name}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="reaction"
                          value={editedAllergy?.reaction}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <select
                          name="category"
                          value={editedAllergy?.category}
                          onChange={handleChange}
                        >
                          <option value="Allergy">Allergy</option>
                          <option value="Side effect">Side effect</option>
                        </select>
                      </td>
                      <td>
                        <select
                          name="severity"
                          value={editedAllergy?.severity}
                          onChange={handleChange}
                        >
                          <option value="Mild">Mild</option>
                          <option value="Moderate">Moderate</option>
                          <option value="Severe">Severe</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="input-field-button"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{allergy.name}</td>
                      <td>{allergy.reaction}</td>
                      <td>{allergy.category}</td>
                      <td>{allergy.severity}</td>
                      <td>
                        <FaPencil
                          className="edit-icon"
                          onClick={() => handleEdit(allergy)}
                        />
                        <FaTrash
                          className="delete-icon"
                          onClick={() => handleDeleteClick(allergy)}
                        />
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && selectedAllergy && (
        <div className="modal-overlay">
          <div className="modal-one">
            
            <div className="heading">
              <h3>Confirm Delete</h3>
              <MdCancel size={20} onClick={() => setShowModal(false)} className="cancel"/>
            </div>
            <div className="footing">
              <p className="one">Are you sure you want to delete?</p>
              <p className="two">
                <strong>Allergy Name:</strong> {selectedAllergy.name}
              </p>
              <p className="three">

                <strong>Reaction:</strong> {selectedAllergy.reaction}
              </p>
              <div className="modal-buttons">
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button >Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AllergyStyled>
  );
};

export default AllergySection;
