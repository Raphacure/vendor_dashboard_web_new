import { AddAllergyFormStyled } from "./AddAllergyForm.styled";
import { RxCross2 } from "react-icons/rx";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

interface AddAllergyFormProps {
  closeForm: () => void;
}

const AddAllergyForm: React.FC<AddAllergyFormProps> = ({ closeForm }) => {
  const [selectedSevere, setSelectedSevere] = useState("");
  return (
    <AddAllergyFormStyled>
      <div className="overlay" onClick={closeForm}></div>
      <div className="popup">
        <div className="heading">
          <h2>Create Allergy</h2>
          <button className="close-btn" onClick={closeForm}>
            <RxCross2 color="white" size={20} />
          </button>
        </div>
        <div></div>
        <div className="form">
          <Form>
            <Row className="">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label className="label">Allergy Name*</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="gender">
                  <Form.Label className="label">Severe*</Form.Label>
                  <div className="gender-buttons">
                    <Button
                      className={selectedSevere === "Mild" ? "active" : ""}
                      variant={selectedSevere === "Mild" ? "" : ""}
                      onClick={() => setSelectedSevere("Mild")}
                    >
                      Mild
                    </Button>
                    <Button
                      className={selectedSevere === "Moderate" ? "active" : ""}
                      variant={selectedSevere === "Moderate" ? "" : ""}
                      onClick={() => setSelectedSevere("Moderate")}
                    >
                      Moderate
                    </Button>
                    <Button
                      className={selectedSevere === "High" ? "active" : ""}
                      variant={selectedSevere === "High" ? "" : ""}
                      onClick={() => setSelectedSevere("High")}
                    >
                      High
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="category" className="category">
                  <Form.Label className="label">Category*</Form.Label>
                  <Form.Control as="select" defaultValue="Side effect">
                    <option value="Side effect">Side effect</option>
                    <option value="Allergy">Allergy</option>
                    <option value="Intolerance">Intolerance</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="address" className=" position-relative">
              <Form.Label className="label">Reaction</Form.Label>
              <div className="input-container">
                <Form.Control
                  type="text"
                  placeholder="Enter Reaction"
                  className="input-field"
                />
              </div>
            </Form.Group>

            <div className="form-buttons">
              <Button onClick={closeForm} className="cancel">
                Cancel
              </Button>
              <Button type="submit" className="save">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AddAllergyFormStyled>
  );
};

export default AddAllergyForm;
