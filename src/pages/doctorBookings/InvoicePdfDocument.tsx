import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { formatStatus } from "@/lib/common";

// Register fonts
Font.register({
  family: "Outfit",
  src: "/Outfit.ttf",
});

const languageToFontMap: Record<string, string> = {
  en: "Outfit",
};

const getFontFamily = (languageCode: string): string => {
  return languageToFontMap[languageCode] || "Outfit"; // Default to NotoSans
};

const InvoicePdfDocument = ({ data, language = "en" }: any) => {
  const styles = StyleSheet.create({
    page: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      fontFamily: "Helvetica",
      backgroundColor: "#f9fafc",
    },
    invoiceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10,
    },
    logoContainer: {
      flexDirection: "row",
      gap: 10,
    },
    logo: {
      width: 80,
      objectFit: "contain",
    },
    companyInfo: {
      textAlign: "right",
      fontSize: 10,
      color: "#5E6470",
      lineHeight: 1.5,
      width: "50%", // Add width to contain the text
    },
    companyInfoText: {
      fontSize: 10,
      fontWeight: "normal",
      color: "#5E6470",
      marginBottom: 5,
      textAlign: "right",
      // remove marginRight: "auto"
    },
    invoiceContent: {
      width: "100%",
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#e0e0e0",
      marginBottom: 20,
    },
    title: {
      color: "#2c3e50",
      fontSize: 18,
      fontWeight: "semibold",
      marginBottom: 25,
      textAlign: "center",
    },
    invoiceDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    invoiceDetailsLeft: {
      flexDirection: "column",
    },
    invoiceDetailsRight: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
    invoiceDetailsMiddle: {
      flex: 1,
    },
    invoiceLabel: {
      color: "#6c757d",
      fontSize: 10,
      marginBottom: 5,
    },
    invoiceValue: {
      color: "#2c3e50",
      fontSize: 12,
      marginBottom: 15,
    },
    billedToAddress: {
      fontSize: 9,
      color: "#6c757d",
      width: "40%",
      lineHeight: 1.4,
    },
    invoiceAmountValue: {
      color: "#2c3e50",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    tableHeader: {
      flexDirection: "row",
      backgroundColor: "#f8f9fa",
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#dee2e6",
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#dee2e6",
      padding: 8,
    },
    tableCol1: {
      width: "40%",
    },
    tableCol2: {
      width: "15%",
    },
    tableCol3: {
      width: "10%",
    },
    tableCol4: {
      width: "15%",
    },
    tableCol5: {
      width: "20%",
      textAlign: "right",
    },
    tableCell: {
      fontSize: 10,
      color: "#495057",
    },
    tableCellHeader: {
      fontSize: 10,
      fontWeight: "bold",
      color: "#495057",
    },
    tableCellRight: {
      fontSize: 10,
      color: "#495057",
      textAlign: "right",
    },
    itemDescription: {
      fontSize: 9,
      color: "#6c757d",
      marginTop: 2,
    },
    invoiceSummary: {
      marginTop: 20,
      alignItems: "flex-end",
    },
    summaryRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 200,
      marginBottom: 5,
    },
    summaryTotal: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 200,
      marginBottom: 5,
      borderTopWidth: 1,
      borderTopColor: "#dee2e6",
      paddingTop: 5,
      marginTop: 5,
      fontWeight: "bold",
    },
    summaryText: {
      fontSize: 10,
    },
    summaryTotalText: {
      fontSize: 12,
      fontWeight: "bold",
    },
    invoiceFooter: {
      flexDirection: "row",
      marginTop: 30,
      paddingTop: 20,
      gap: 30,
    },
    declarationSection: {
      flex: 1,
      padding: 10,
    },
    bankDetailsSection: {
      flex: 2,
      padding: 10,
    },
    footerTitle: {
      color: "#2c3e50",
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
    },
    footerText: {
      color: "#6c757d",
      fontSize: 10,
      lineHeight: 1.5,
      marginBottom: 5,
    },
    systemGeneratedText: {
      fontSize: 10,
      marginTop: 10,
      textAlign: "left",
    },
  });

  const GetBookingDetails = (
    data: any,
    styles: any,
    formatStatus: (type: string) => string
  ) => {
    if (
      data?.type === "opd_consultation" ||
      data?.type === "virtual_consultation"
    ) {
      return (
        <View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>{data?.doctor?.name || ""}</Text>
              <Text style={styles.itemDescription}>
                {data?.doctor?.specialization || ""}
              </Text>
            </View>
            <View style={styles.tableCol2}>
              <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
            </View>
            <View style={styles.tableCol3}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol4}>
              <Text style={styles.tableCell}>₹{data?.amount || ""}</Text>
            </View>
            <View style={styles.tableCol5}>
              <Text style={styles.tableCellRight}>₹{data?.amount || ""}</Text>
            </View>
          </View>
        </View>
      );
    }

    if (data?.test?.service_code) {
      return (
        <View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>
                {data?.test?.service_name || ""}
              </Text>
              <Text style={styles.itemDescription}>
                {formatStatus(data?.test_type)}
              </Text>
            </View>
            <View style={styles.tableCol2}>
              <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
            </View>
            <View style={styles.tableCol3}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol4}>
              <Text style={styles.tableCell}>₹{data?.amount || ""}</Text>
            </View>
            <View style={styles.tableCol5}>
              <Text style={styles.tableCellRight}>₹{data?.amount || ""}</Text>
            </View>
          </View>
        </View>
      );
    }

    if (data?.medicines?.length > 0) {
      return (
        <View>
          {data?.medicines.map((item: any, index: number) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{item?.service_name || ""}</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
              </View>
              <View style={styles.tableCol3}>
                <Text style={styles.tableCell}>{item?.count || 1}</Text>
              </View>
              <View style={styles.tableCol4}>
                <Text style={styles.tableCell}>
                  ₹
                  {item?.price?.discounted_price ||
                    item?.price?.actual_cost ||
                    ""}
                </Text>
              </View>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>
                  ₹
                  {item?.price?.discounted_price ||
                    item?.price?.actual_cost ||
                    ""}
                </Text>
              </View>
            </View>
          ))}
        </View>
      );
    }
    if (Array.isArray(data?.products) && data?.products?.length > 0) {
      return (
        <View>
          {data?.products?.map((item: any, index: number) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{item?.name || ""}</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
              </View>
              <View style={styles.tableCol3}>
                <Text style={styles.tableCell}>{item?.count || 1}</Text>
              </View>
              <View style={styles.tableCol4}>
                <Text style={styles.tableCell}>
                  ₹
                  {item?.price?.discounted_price ||
                    item?.price?.actual_cost ||
                    ""}
                </Text>
              </View>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCellRight}>
                  ₹
                  {item?.price?.discounted_price ||
                    item?.price?.actual_cost ||
                    ""}
                </Text>
              </View>
            </View>
          ))}
        </View>
      );
    }


    return (
      <View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell}>{formatStatus(data?.type)}</Text>
          </View>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
          </View>
          <View style={styles.tableCol3}>
            <Text style={styles.tableCell}>1</Text>
          </View>
          <View style={styles.tableCol4}>
            <Text style={styles.tableCell}>₹{data?.amount || ""}</Text>
          </View>
          <View style={styles.tableCol5}>
            <Text style={styles.tableCellRight}>₹{data?.amount || ""}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.invoiceHeader}>
          <View style={styles.logoContainer}>
            <Image src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742360021368.png"} style={styles.logo} />

            <View>
              <Text style={styles.companyInfoText}>www.raphaplus.in</Text>
              <Text style={styles.companyInfoText}>wellness@raphaplus.in</Text>
              <Text style={styles.companyInfoText}>+91 95551 66000</Text>
            </View>
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyInfoText}>
              38/3, 6th Cross, Vibgyor High School Road, HSR Extension,
            </Text>
            <Text style={styles.companyInfoText}>
              Reliable Tranquil Layout, Bengaluru, Karnataka-560102.
            </Text>
            <Text style={styles.companyInfoText}>GSTIN : 29AAJCC4434A1ZX</Text>
            <Text style={styles.companyInfoText}>CIN : U85100KA2021PTC146840</Text>
            <Text style={styles.companyInfoText}>PAN : AAJCC4434A</Text>
          </View>
        </View>

        <View style={styles.invoiceContent}>
          <Text style={styles.title}>Bill Of Supply</Text>

          <View style={styles.invoiceDetails}>
            <View style={styles.invoiceDetailsLeft}>
              <Text style={styles.invoiceLabel}>Billed to</Text>
              <Text style={styles.invoiceValue}>
                {data?.user?.first_name || ""} {data?.user?.last_name || ""}
                {"\n"}
                {data?.user?.phone || ""}
              </Text>
              {data?.address?.address && (
                <Text style={styles.billedToAddress}>
                  {data?.address?.address}
                </Text>
              )}
            </View>
            <View style={styles.invoiceDetailsRight}>
              <Text style={styles.invoiceLabel}>Invoice Amount</Text>
              <Text style={styles.invoiceAmountValue}>
                Rs. {data?.amount || ""}
              </Text>
            </View>
          </View>

          <View style={styles.invoiceDetails}>
            <View style={styles.invoiceDetailsLeft}>
              <Text style={styles.invoiceLabel}>Booking ID</Text>
              <Text style={styles.invoiceValue}>{data?.id || "N/A"}</Text>
            </View>
            <View style={styles.invoiceDetailsMiddle}></View>
            <View style={styles.invoiceDetailsRight}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View
                  style={{
                    paddingRight: 10,
                    borderRight: "1 solid #dee2e6",
                  }}
                >
                  <Text style={styles.invoiceLabel}>Invoice Date</Text>
                  <Text style={styles.invoiceValue}>
                    {data?.collection_1_date || ""}
                  </Text>
                </View>
                <View>
                  <Text style={styles.invoiceLabel}>Invoice Number</Text>
                  <Text style={styles.invoiceValue}>
                    {data?.order_id || ""}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Table Header */}
          <View style={styles.tableHeader}>
            <View style={styles.tableCol1}>
              <Text style={styles.tableCellHeader}>ITEM DETAIL</Text>
            </View>
            <View style={styles.tableCol2}>
              <Text style={styles.tableCellHeader}>SAC CODE</Text>
            </View>
            <View style={styles.tableCol3}>
              <Text style={styles.tableCellHeader}>QTY</Text>
            </View>
            <View style={styles.tableCol4}>
              <Text style={styles.tableCellHeader}>RATE</Text>
            </View>
            <View style={styles.tableCol5}>
              <Text style={styles.tableCellHeader}>AMOUNT</Text>
            </View>
          </View>

          {/* Table Row */}
          <View style={styles.tableRow}>
            {/* <View style={styles.tableCol1}>
              <Text style={styles.tableCell}>Item Name</Text>
              <Text style={styles.itemDescription}>Item description</Text>
            </View> */}
            {/* {data?.type === "opd_consultation" ||
            data?.type === "virtual_consultation" ? (
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{data?.doctor?.name || ""}</Text>
                <Text style={styles.itemDescription}>
                  {data?.doctor?.specialization || ""}
                </Text>
              </View>
            ) : (
              <></>
            )} */}

            {/* {data?.type === "opd_consultation" ||
            data?.type === "virtual_consultation" ? (
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{data?.doctor?.name || ""}</Text>
                <Text style={styles.itemDescription}>
                  {data?.doctor?.specialization || ""}
                </Text>
              </View>
            ) : data?.test?.service_code ? (
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>
                  {data?.test?.service_name || ""}
                </Text>
                <Text style={styles.itemDescription}>
                  {formatStatus(data?.test_type)}
                </Text>
              </View>
            ) : data?.medicines?.length > 0 ? (
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>
                  {data?.medicines[0].service_name || ""}
                </Text>
                <Text style={styles.itemDescription}>
                  {data?.medicines.length > 1
                    ? `+ ${data?.medicines.length - 1} more`
                    : formatStatus(data?.type)}
                </Text>
              </View>
            ) : (
              <Text style={styles.tableCell}>{formatStatus(data?.type)}</Text>
            )}
            <View style={styles.tableCol2}>
              <Text style={styles.tableCell}>{data?.user_id || ""}</Text>
            </View>
            <View style={styles.tableCol3}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol4}>
              <Text style={styles.tableCell}>Rs. {data?.amount || ""}</Text>
            </View>
            <View style={styles.tableCol5}>
              <Text style={styles.tableCellRight}>
                Rs. {data?.amount || ""}
              </Text>
              </View> */}

            {GetBookingDetails(data, styles, formatStatus)}
          </View>

          {/* Invoice Summary */}
          <View style={styles.invoiceSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Gross Value</Text>
              <Text style={styles.summaryText}>Rs. {data?.amount || ""}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>IGST</Text>
              <Text style={styles.summaryText}>0.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>CGST</Text>
              <Text style={styles.summaryText}>0.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>SGST</Text>
              <Text style={styles.summaryText}>0.00</Text>
            </View>
            <View style={styles.summaryTotal}>
              <Text style={styles.summaryTotalText}>Total Value</Text>
              <Text style={styles.summaryTotalText}>
                Rs. {data?.amount || ""}
              </Text>
            </View>
          </View>

          {/* Invoice Footer */}
          <View style={styles.invoiceFooter}>
            <View style={styles.declarationSection}>
              <Text style={styles.footerTitle}>Declaration</Text>
              <Text style={styles.footerText}>
                We declare that this invoice shows the actual price of the
                services described and that all particulars are true and
                correct.
              </Text>
            </View>
            <View style={styles.bankDetailsSection}>
              <Text style={styles.footerTitle}>Bank Details</Text>
              <Text style={styles.footerText}>
                A/c Holder's Name: Cure and Care Primary Care Private Limited
              </Text>
              <Text style={styles.footerText}>Bank Name : ICICI Bank Ltd</Text>
              <Text style={styles.footerText}>A/c No. : 395205000496</Text>
              <Text style={styles.footerText}>
                Branch & IFS Code: AECS LAYOUT & ICIC0003952
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.systemGeneratedText}>
          This is a system generated invoice, hence signature isn't required
        </Text>
      </Page>
    </Document>
  );
};

export default InvoicePdfDocument;
