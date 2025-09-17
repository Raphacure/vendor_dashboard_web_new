import React from "react";
import { InvoiceModalStyled } from "./InvoiceBody.styled";
import { formatStatus } from "@/lib/common";

const InvoiceBody = ({ data }: any) => {
  const GetBookingDetails = () => {
    /* opd_consultation" Logic
    virtual_consultation" Logic */
    if (
      data?.type === "opd_consultation" ||
      data?.type === "virtual_consultation"
    ) {
      return (
        <tr>
          <td>
            <div>{data?.doctor?.name || ""}</div>
            <div>{data?.doctor?.specialization || ""}</div>
          </td>
          <td>{data?.user_id || ""}</td>
          <td>1</td>
          <td>₹{data?.amount || ""}</td>
          <td className="amount-column">₹{data?.amount || ""}</td>
        </tr>
      );
    } else if (data?.test?.service_code) {
      /* Test Logic */
      return (
        <tr>
          <td>
            <div>{data?.test?.service_name || ""}</div>
            <div>{formatStatus(data?.test_type)}</div>
          </td>
          <td>{data?.user_id || ""}</td>
          <td>1</td>
          <td>₹{data?.amount || ""}</td>
          <td className="amount-column">₹{data?.amount || ""}</td>
        </tr>
      );
    } else if (Array.isArray(data?.products) && data?.products?.length > 0) {
      /* Products Logic */
      return data?.products?.map((prod: any) => {
        return (
          <tr>
            <td>
              <div>{prod?.name || "P"}</div>
            </td>
            <td>{data?.user_id || ""}</td>
            <td>{data?.count}</td>
            <td>₹{data?.amount || ""}</td>
            <td className="amount-column">₹{data?.amount || ""}</td>
          </tr>
        );
      });
    }

    /* Mediecens Logic */
    return data?.medicines?.map((item: any) => {
      return (
        <tr>
          <td>{item?.service_name}</td>
          <td>{data?.user_id || ""}</td>
          <td>{item?.count}</td>
          <td>
            ₹{item?.price?.discounted_price || item?.price?.actual_cost || ""}
          </td>
          <td className="amount-column">
            ₹{item?.price?.discounted_price || item?.price?.actual_cost || ""}
          </td>
        </tr>
      );
    });
  };
  return (
    <InvoiceModalStyled>
      <div className="invoice-header">
        <div className="logo-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742360021368.png"
            alt="RaphaPlus Logo"
            className="logo"
          />
          <div className="company-info">
            <p className="mb-0">www.raphaplus.in</p>
            <p className="mb-0">wellness@raphaplus.in</p>
            <p className="mb-0">+91 95551 66000</p>
          </div>
        </div>
        <div className="company-info">
          <p className="mb-0">
            38/3, 6th Cross, Vibgyor High School Road, HSR Extension,
          </p>
          <p className="mb-0">
            Reliable Tranquil Layout, Bengaluru, Karnataka-560102.
          </p>
          <p className="mb-0">GSTIN : 29AAJCC4434A1ZX</p>
          <p className="mb-0">CIN : U85100KA2021PTC146840</p>
          <p className="mb-0">PAN : AAJCC4434A</p>
        </div>
      </div>
      <div className="invoice-content">
        <h5 className="text-center">Bill Of Supply</h5>

        <div className="invoice-details">
          <div className="invoice-details-left">
            <div className="invoice-label">Billed to</div>
            <div className="invoice-value">
              {data?.user?.first_name || ""} {data?.user?.last_name || ""}
              <br />
              {data?.user?.phone || ""}
              <br />
              {data?.address?.address && `${data?.address?.address}`}
            </div>
          </div>
          <div className="invoice-details-right">
            <div className="invoice-label">Invoice Amount</div>
            <div
              className="invoice-value"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              ₹{data?.amount || ""}
            </div>
          </div>
        </div>

        <div className="invoice-details">
          <div className="invoice-details-left">
            <div className="invoice-label">Booking ID</div>
            <div className="invoice-value"> {data?.id || ""}</div>
          </div>
          <div className="invoice-details-middle" style={{ flex: 1 }}></div>
          <div
            className="invoice-details-right"
            style={{ display: "flex", gap: "20px", flexDirection: "row" }}
          >
            <div>
              <div className="invoice-label">Invoice Date</div>
              <div className="invoice-value">
                {" "}
                {data?.collection_1_date || ""}
              </div>
            </div>
            <div>
              <div className="invoice-label">Invoice Number</div>
              <div className="invoice-value"> {data?.order_id || ""}</div>
            </div>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>ITEM DETAIL</th>
              <th>SAC CODE</th>
              <th>QTY</th>
              <th>RATE</th>
              <th className="amount-column">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>
                {data?.type === "opd_consultation" ||
                data?.type === "virtual_consultation" ? (
                  <>
                    <div>{data?.doctor?.name || ""}</div>
                    <div>{data?.doctor?.specialization || ""}</div>
                  </>
                ) : data?.test?.service_code ? (
                  <>
                    <div>{data?.test?.service_name || ""}</div>
                    <div>{formatStatus(data?.test_type)}</div>
                  </>
                ) : data?.medicines?.length > 0 ? (
                  <>
                    <div>{data?.medicines[0].service_name || ""}</div>
                    <div>
                      {data?.medicines.length > 1
                        ? `+ ${data?.medicines.length - 1} more`
                        : formatStatus(data?.type)}
                    </div>
                  </>
                ) : (
                  <div>{formatStatus(data?.type)}</div>
                )}
              </td>
              <td>{data?.user_id || ""}</td>
              <td>1</td>
              <td>₹{data?.amount || ""}</td>
              <td className="amount-column">₹{data?.amount || ""}</td>
            </tr> */}

            <GetBookingDetails />
          </tbody>
        </table>

        <div className="invoice-summary">
          <div className="summary-row">
            <div>Gross Value</div>
            <div>₹{data?.amount || ""}</div>
          </div>
          <div className="summary-row">
            <div>IGST</div>
            <div>₹0.00</div>
          </div>
          <div className="summary-row">
            <div>CGST</div>
            <div>₹0.00</div>
          </div>
          <div className="summary-row">
            <div>SGST</div>
            <div>₹0.00</div>
          </div>
          <div className="summary-row total">
            <div>Total Value</div>
            <div>₹{data?.amount || ""}</div>
          </div>
        </div>

        <div className="invoice-footer">
          <div className="declaration-section">
            <h6>Declaration</h6>
            <p>
              We declare that this invoice shows the actual price of the
              services described and that all particulars are true and correct.
            </p>
          </div>
          <div className="bank-details-section">
            <h6>Bank Details</h6>
            <p>A/c Holder's Name: Cure and Care Primary Care Private Limited</p>
            <p>Bank Name : ICICI Bank Ltd</p>
            <p>A/c No. : 395205000496</p>
            <p>Branch & IFS Code: AECS LAYOUT & ICIC0003952</p>
          </div>
        </div>
      </div>
      <p className="mt-3">
        This is a system generated invoice, hence signature isn’t required
      </p>
    </InvoiceModalStyled>
  );
};

export default InvoiceBody;
