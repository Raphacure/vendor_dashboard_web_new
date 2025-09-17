import { Select } from 'antd';
import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { afternoonTimeOptions, errorDataValue, eveningTimeOption, morningTimeOptions, vendorDetailsDto } from './AssignVendor';

type prop = {
    onSubmit: any,
    section_name: "TEST" | "PACKAGE",
    totalSelectedVendors: number
}

const BulkUpdate = ({ onSubmit , section_name, totalSelectedVendors }: prop) => {
    const codeFeild = `vendor_${section_name?.toLowerCase()}_code`
    const [code, setCode] = useState("")

    const [errorData, setErrorData] = useState({
        mor_start_Time: false,
        mor_end_Time: false,
        mor_buying_price: false,
        mor_selling_price: false,
        mor_female_available: false,
        mor_male_available: false,
        aft_start_Time: false,
        aft_end_Time: false,
        aft_buying_price: false,
        aft_selling_price: false,
        aft_female_available: false,
        aft_male_available: false,
        eve_start_Time: false,
        eve_end_Time: false,
        eve_buying_price: false,
        eve_selling_price: false,
        eve_female_available: false,
        eve_male_available: false,
    });
    const [formData, setFormData] = useState<vendorDetailsDto>({
        mor_start_Time: "",
        mor_end_Time: "",
        mor_buying_price: 0,
        mor_selling_price: 0,
        mor_female_available: false,
        mor_male_available: false,
        aft_start_Time: "",
        aft_end_Time: "",
        aft_buying_price: 0,
        aft_selling_price: 0,
        aft_female_available: false,
        aft_male_available: false,
        eve_start_Time: "",
        eve_end_Time: "",
        eve_buying_price: 0,
        eve_selling_price: 0,
        eve_female_available: false,
        eve_male_available: false,
    })

    const handleChange = (label: any, value: any) => {
        setFormData({ ...formData, [label]: value })
    }

    return (
        <div>
            <div className="vendorCard2">

            <div className="w-100 d-flex justify-content-center align-items-center">
                      <div className="mr-2">
                        {totalSelectedVendors}
                      </div>
                      <Form.Control
                        className="vendorsCode"
                        name={codeFeild ?? ""}
                        value={code}
                        placeholder={`Enter vendor ${section_name?.toLowerCase()} code.`}
                        onChange={(e : any) => {
                          setCode(e?.target?.value)
                        }}
                      />
                    </div>

                <div className="formDiv">
                    {/* <Row className="mt-3 m-0 mb-1">Morning</Row> */}
                    <Row className="m-0 row-gap">
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                                value={formData?.mor_start_Time}
                                placeholder="Select time"
                                onChange={(e) => {
                                    console.log(e);

                                    handleChange("mor_start_Time", e);
                                }}
                                options={morningTimeOptions}
                                className="delta-select select"
                            />
                            {errorData?.mor_start_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.mor_start_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                                value={formData?.mor_end_Time}
                                placeholder="Select time"
                                onChange={(e) =>
                                    handleChange("mor_end_Time", e)
                                }
                                options={morningTimeOptions}
                                className="delta-select select"
                            />
                            {errorData?.mor_end_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.mor_end_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="mor_buying_price"
                                min="0"
                                required
                                value={
                                    formData?.mor_buying_price
                                    //  ||
                                    // vendor?.buying_price ||
                                    // vendor?.buyingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        "mor_buying_price",
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.mor_start_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.mor_start_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* <Form.Group controlId="name"></Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="mor_selling_price"
                                min="0"
                                required
                                value={
                                    formData?.mor_selling_price
                                    //  ||
                                    // vendor?.selling_price ||
                                    // vendor?.sellingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.mor_selling_price && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.mor_selling_price}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="mor_female_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.mor_female_available}
                                id={`mor_female_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="mor_male_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.mor_male_available}
                                id={`mor_male_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                    </Row>
                    {/* <Row className="m-0 mt-3 mb-1">Afternoon</Row> */}
                    <Row className="m-0 me-3  row-gap">
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                                value={formData?.aft_start_Time}
                                placeholder="Select time"
                                onChange={(e) =>
                                    handleChange("aft_start_Time", e)
                                }
                                options={afternoonTimeOptions}
                                className="delta-select select"
                            />
                            {errorData?.aft_start_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.aft_start_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                                value={formData?.aft_end_Time}
                                placeholder="Select time"
                                onChange={(e) =>
                                    handleChange("aft_end_Time", e)
                                }
                                options={afternoonTimeOptions}
                                className="delta-select select"
                            />
                            {errorData?.aft_end_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.aft_end_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="aft_buying_price"
                                min="0"
                                required
                                value={
                                    formData?.aft_buying_price
                                    // ||
                                    // vendor?.buying_price ||
                                    // vendor?.buyingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.aft_buying_price && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.aft_buying_price}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="aft_selling_price"
                                min="0"
                                required
                                value={
                                    formData?.aft_selling_price
                                    // ||
                                    // vendor?.selling_price ||
                                    // vendor?.sellingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.aft_selling_price && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.aft_selling_price}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="aft_female_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.aft_female_available}
                                id={`aft_female_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="aft_male_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.aft_male_available}
                                id={`aft_male_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                    </Row>
                    {/* <Row className="m-0 mt-3 mb-1">Evening</Row> */}
                    <Row className="m-0 me-3  row-gap">
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                                value={formData?.eve_start_Time}
                                placeholder="Select time"
                                onChange={(e) =>
                                    handleChange("eve_start_Time", e)
                                }
                                options={eveningTimeOption}
                                className="delta-select select"
                            />
                            {errorData?.eve_start_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.eve_start_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                                value={formData?.eve_end_Time}
                                placeholder="Select time"
                                onChange={(e) =>
                                    handleChange("eve_end_Time", e)
                                }
                                options={eveningTimeOption}
                                className="delta-select select"
                            />
                            {errorData?.eve_end_Time && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.eve_end_Time}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="eve_buying_price"
                                min="0"
                                required
                                value={
                                    formData?.eve_buying_price
                                    // ||
                                    // vendor?.buying_price ||
                                    // vendor?.buyingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.eve_buying_price && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.eve_buying_price}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                                type="number"
                                name="eve_selling_price"
                                min="0"
                                required
                                value={
                                    formData?.eve_selling_price
                                    // ||
                                    // vendor?.selling_price ||
                                    // vendor?.sellingPrice
                                }
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.value,

                                    )
                                }
                            />
                            {errorData?.eve_selling_price && (
                                <Form.Control.Feedback type="invalid">
                                    {errorDataValue?.eve_selling_price}
                                </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="eve_female_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.eve_female_available}
                                id={`eve_female_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                        <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                                type="switch"
                                label=""
                                name="eve_male_available"
                                onChange={(e) =>
                                    handleChange(
                                        e?.target?.name,
                                        e?.target?.checked,

                                    )
                                }
                                checked={formData?.eve_male_available}
                                id={`eve_male_available-`}
                            // custom
                            />
                            {/* </Form.Group> */}
                        </Col>
                    </Row>
                </div>

                <Button className='w-100'
                onClick={() => onSubmit({...formData, [codeFeild]: code})}
                variant='primary'>Save</Button>
            </div>
        </div>
    )
}

export default BulkUpdate