import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from "@react-pdf/renderer";
import React from "react";
import RaphaPlusLogo from "@/assets/logo/raphaPlusLogo.png";
import RaphaCureLogo from "@/assets/logo/raphacureLogo.png";
import { formatStatus } from "@/lib/common";
import dayjs from "dayjs";

// Register fonts
Font.register({
  family: "Noto Sans",
  src: "/fonts/NotoSans-Regular.ttf",
});
Font.register({
  family: "Noto Sans Bengali",
  src: "/fonts/NotoSansBengali-Regular.ttf",
});
Font.register({
  family: "Noto Sans Devanagari",
  src: "/fonts/NotoSansDevanagari-Regular.ttf",
});
Font.register({
  family: "Noto Sans Gujarati",
  src: "/fonts/NotoSansGujarati-Regular.ttf",
});
Font.register({
  family: "Noto Sans Gurmukhi",
  src: "/fonts/NotoSansGurmukhi-Regular.ttf",
});
Font.register({
  family: "Noto Sans Kannada",
  src: "/fonts/NotoSansKannada-Regular.ttf",
});
Font.register({
  family: "Noto Sans Malayalam",
  src: "/fonts/NotoSansMalayalam-Regular.ttf",
});
Font.register({
  family: "Noto Sans Oriya",
  src: "/fonts/NotoSansOriya-Regular.ttf",
});
Font.register({
  family: "Noto Sans Tamil",
  src: "/fonts/NotoSansTamil-Regular.ttf",
});
Font.register({
  family: "Noto Sans Telugu",
  src: "/fonts/NotoSansTelugu-Regular.ttf",
});

const languageToFontMap: Record<string, string> = {
  en: "Noto Sans",
  gu: "Noto Sans Gujarati",
  hi: "Noto Sans Devanagari",
  kn: "Noto Sans Kannada",
  mr: "Noto Sans Devanagari",
  or: "Noto Sans Oriya",
  pa: "Noto Sans Gurmukhi",
  ta: "Noto Sans Tamil",
  te: "Noto Sans Telugu",
  ml: "Noto Sans Malayalam",
  bn: "Noto Sans Bengali",
};

const getFontFamily = (languageCode: string): string => {
  return languageToFontMap[languageCode] || "Noto Sans"; // Default to NotoSans
};

const PrescriptionPdfDocument = ({ data, language = "en", logo }: any) => {
  console.log("logo : ", logo);
  console.log("data : ", data);

  const fontFamily = getFontFamily(language); // Get font family dynamically

  const styles = StyleSheet.create({
    page: {
      paddingHorizontal: 30,
      paddingVertical: 20,
      fontSize: 9, // Adjusted base font size
      fontFamily,
      color: "#333",
    },
    headerSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start", // Align items to the top
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      paddingBottom: 10,
    },
    headerLeft: {
      // For Logo
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "10px",
    },
    logo: {
      width: 80, // Adjusted size
      height: 40, // Adjusted size
    },
    backgroundLogo: {
      position: "absolute",
      top: "40%",
      // left:"50%",
      transform: "translateY(-100%)",
      opacity: 0.1,
      width: "100%",
    },
    headerRight: {
      textAlign: "right",
      fontSize: 8,
    },
    doctorName: {
      fontSize: 12,
      fontWeight: "700",
      marginBottom: 2,
    },
    doctorSpecialty: {
      fontSize: 9,
      marginBottom: 2,
    },
    contactInfo: {
      fontSize: 8,
    },
    patientInfoSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: 9,
    },
    patientDetailsLeft: {
      flex: 2,
    },
    patientDetailsRight: {
      flexDirection: "column",
      alignItems: "flex-end",
      flex: 1,
      textAlign: "right",
    },
    detailRow: {
      flexDirection: "row",
      marginBottom: 2,
    },
    detailLabel: {
      fontWeight: "bold",
      marginRight: 3,
    },
    detailValue: {
      // flex: 1, // Allow value to take remaining space
    },
    diagnosisSection: {
      marginTop: 5,
      marginBottom: 15,
      fontSize: "12px",
      color: "#222e62",
    },
    diagnosisText: {
      fontWeight: "bold",
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
      marginTop: 10,
      color: "#222E62", // Blue color for Rx and Test Suggested titles
    },
    rxSymbol: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#222E62",
      marginBottom: 5,
    },
    tableContainer: {
      marginBottom: 15,
      borderTopColor: "#eee",
      paddingTop: 5,
    },
    tableHeaderRow: {
      flexDirection: "row",
      backgroundColor: "rgba(153, 188, 226, 0.15)", // Light grey background for header
      borderBottomWidth: 1,
      borderBottomColor: "#dee2e6",
      paddingVertical: 3,
    },
    tableHeaderCell: {
      padding: 4,
      fontSize: 8,
      fontWeight: "bold",
      textAlign: "left", // Align header text to left
      borderRightWidth: 1,
      borderRightColor: "#dee2e6",
    },
    tableRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
      paddingVertical: 3,
    },
    tableCell: {
      padding: 4,
      fontSize: 8,
      textAlign: "left", // Align cell text to left
      borderRightWidth: 1,
      borderRightColor: "#eee",
    },
    tableCellIndex: { flex: 0.3, textAlign: "center" },
    tableCellMedicine: { flex: 2.5 },
    tableCellDosage: { flex: 1, textAlign: "center" },
    tableCellTiming: { flex: 1.5, textAlign: "center" },
    tableCellFreq: { flex: 1, textAlign: "center" },
    tableCellDuration: { flex: 1, textAlign: "center" },
    tableCellNote: { flex: 2, textAlign: "center" },
    tableCellTestType: { flex: 2 },
    tableCellNotes: { flex: 3 },
    adviceSection: {
      marginTop: 15,
      marginBottom: 10,
      fontSize: 9,
    },
    adviceLabel: {
      fontWeight: "bold",
      marginBottom: 3,
      color: "#222e62",
      fontSize: "14px",
    },
    followUpSection: {
      marginTop: 10,
      marginBottom: 15,
      fontSize: 9,
    },
    followUpText: {
      fontWeight: "bold",
      fontSize: "12px",
      color: "#252b61",
    },
    hyperlinksSection: {
      marginTop: 10,
      marginBottom: 15,
      fontSize: 9,
    },
    hyperlinksTitle: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#222E62",
    },
    hyperlinkItem: {
      marginBottom: 3,
      color: "#0066cc",
      textDecoration: "underline",
    },
    signatureSection: {
      marginTop: 30, // More space before signature
      fontSize: 9,
      // textAlign: 'right', // Align signature to the right -- Removed for left alignment of label
    },
    signatureText: {
      // Placeholder for actual signature line or image
      paddingTop: 20, // Space for signature
      borderTopWidth: 1,
      borderTopColor: "#000",
      width: "40%", // Signature line width
      alignSelf: "flex-end",
      textAlign: "center",
    },
    footer: {
      position: "absolute",
      bottom: 10, // Position footer at the bottom
      left: 30,
      right: 30,
      fontSize: 7,
      textAlign: "center",
      borderTopWidth: 1,
      borderTopColor: "#000",
      paddingTop: 5,
      color: "#555",
    },
  });

  const { doctor, user, id, collection_1_date, attachments } = data;
  const attachment = attachments?.length > 0 ? attachments[0] : {};
  const allMedicines = attachment?.prescriptions_medicines || []; // Combine all medicines
  const tests = attachment?.prescriptions_tests || [];
  const vitals = attachment?.vitals || [];

  // Helper function to find a vital by type
  const findVital = (type: string) => {
    const vital = vitals.find(
      (v: any) => v.type?.toLowerCase() === type.toLowerCase()
    );
    if (vital) {
      return { value: vital.value || "N/A", unit: vital.unit || "" };
    }
    return { value: "N/A", unit: "" };
  };

  // No need for individual vital constants as we'll render them dynamically

  // Format date as DD-MM-YYYY
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    } catch (e) {
      return dateString; // Return original if parsing fails
    }
  };

  const formatFollowUpDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
      }; // weekday: 'long' for full day name
      const formattedDate = date
        .toLocaleDateString("en-IN", options)
        .replace(/,/g, ""); // en-IN for DD-MM-YYYY, remove comma
      // Extract parts and reformat to DD-MM-YYYY (weekday)
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
      return `${day}-${month}-${year} (${weekday})`;
    } catch (e) {
      return dateString;
    }
  };


  return (
    <Document>
      <Page style={styles.page} size="A4">
        {logo ? (
          <Image style={styles.backgroundLogo} src={RaphaPlusLogo} />
        ) : (
          <Image style={styles.backgroundLogo} src={RaphaCureLogo} />
        )}
        <View style={styles.headerSection}>
          <View style={styles.headerLeft}>
            {logo ? (
              <Image style={styles.logo} src={RaphaPlusLogo} />
            ) : (
              <Image style={styles.logo} src={RaphaCureLogo} />
            )}
            <View>
              <Text style={styles.doctorName}>{doctor?.name || "N/A"}</Text>
              <Text style={styles.doctorSpecialty}>
                {doctor?.specialization || ""}
              </Text>
              <Text style={styles.doctorSpecialty}>
                {doctor?.registration_number && "Registration Number : "}{doctor?.registration_number || "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.contactInfo}>{"+91 95551 66000"}</Text>
            <Text style={styles.contactInfo}>
              {doctor?.email || "wellness@raphacure.com"}
            </Text>
            <Text style={styles.contactInfo}>www.raphacure.com</Text>{" "}
            {/* Hardcoded as per image */}
          </View>
        </View>

        {/* Patient Information Section */}
        <View style={styles.patientInfoSection}>
          <View style={styles.patientDetailsLeft}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Patient's Name :</Text>
              <Text style={styles.detailValue}>{`${user?.first_name || "N/A"} ${
                user?.last_name || "N/A"
              }`}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Patient's Age :</Text>
              <Text style={styles.detailValue}>{`${user?.age || "N/A"} / ${
                user?.gender || "N/A"
              }`}</Text>
            </View>
            <View style={styles.detailRow}>
              {vitals.map((vital: any, index: number) => (
                <React.Fragment key={vital.type}>
                  {index > 0 && <Text style={{ marginLeft: 10 }}></Text>}
                  <Text style={styles.detailLabel}>{`${vital.type} -`}</Text>
                  <Text style={styles.detailValue}>
                    {`${vital.value || "N/A"}${
                      vital.value !== "N/A" && vital.unit ? vital.unit : ""
                    }`}
                  </Text>
                </React.Fragment>
              ))}
            </View>
          </View>
          <View style={styles.patientDetailsRight}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date : </Text>
              <Text style={styles.detailValue}>
                {collection_1_date || "N/A"}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Consult type : </Text>
              <Text style={styles.detailValue}>
                {formatStatus(data?.type) || "N/A"}
              </Text>
            </View>
          </View>
        </View>

        {/* Diagnosis Section */}
        <View style={styles.diagnosisSection}>
          <Text>
            <Text style={styles.detailLabel}>Diagnosis :</Text>{" "}
            <Text style={styles.diagnosisText}>
              {attachment?.symptoms || "No Symptoms Added"}
            </Text>
          </Text>
        </View>
        {/* Medicines Table (Rx) */}
        {allMedicines.length > 0 && (
          <View>
            <Text style={styles.rxSymbol}>Rₓ</Text>
            <View style={styles.tableContainer}>
              <View style={styles.tableHeaderRow}>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellIndex,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  #
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellMedicine,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  Medicine
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellDosage,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  Dosage
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellTiming,
                    {
                      borderRightWidth: 1,
                      borderRightColor: "#dee2e6",
                      textAlign: "center",
                    },
                  ]}
                >
                  Timing
                </Text>
                
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellDuration,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  Duration
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellFreq,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  Start Date
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellNote,
                    { borderRightWidth: 0 },
                  ]}
                >
                  Note
                </Text>
              </View>
              {allMedicines.map((medicine: any, index: number) => (
                <View style={styles.tableRow} key={`med-${index}`}>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellIndex,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {index + 1}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellMedicine,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {medicine?.medicine?.service_name || "N/A"}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellDosage,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {medicine?.frequency || "N/A"}{" "}
                    {/* Corresponds to Dosage in image */}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellTiming,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {formatStatus(medicine?.intake)  || "N/A"}{" "}
                    {/* Corresponds to Timing in image */}
                  </Text>
                  
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellDuration,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {medicine?.no_of_days || "N/A"}days
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellDuration,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {dayjs(medicine?.start_date).format("DD-MM-YYYY") || "N/A"}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellNote,
                      { borderRightWidth: 0 },
                    ]}
                  >
                    {medicine?.note || ""}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
        {/* Tests Suggested Table */}
        {tests.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Test Suggested</Text>
            <View style={styles.tableContainer}>
              <View style={styles.tableHeaderRow}>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellIndex,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  #
                </Text>
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellTestType,
                    { borderRightWidth: 1, borderRightColor: "#dee2e6" },
                  ]}
                >
                  Test Type
                </Text>
                {/* <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.tableCellNotes,
                    { borderRightWidth: 0 },
                  ]}
                >
                  Notes
                </Text> */}
              </View>
              {tests.map((test: any, index: number) => (
                <View style={styles.tableRow} key={`test-${index}`}>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellIndex,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {index + 1}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellTestType,
                      { borderRightWidth: 1, borderRightColor: "#eee" },
                    ]}
                  >
                    {test?.test?.service_name || "N/A"}
                  </Text>
                  {/* <Text
                    style={[
                      styles.tableCell,
                      styles.tableCellNotes,
                      { borderRightWidth: 0 },
                    ]}
                  >
                    {test?.notes ||
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
                  </Text> */}
                </View>
              ))}
            </View>
          </View>
        )}

        {attachment?.hyperLink_url && attachment.hyperLink_url.length > 0 && (
          <View style={styles.hyperlinksSection}>
            <Text style={styles.hyperlinksTitle}>HyperLinks</Text>
            {attachment.hyperLink_url.map((link: any, index: number) => (
              <Link key={index} style={styles.hyperlinkItem} src={link.link}>
                {link.label || link.link}
              </Link>
            ))}
          </View>
        )}

        {/* Advice Section */}
        <View style={styles.adviceSection}>
          <Text style={styles.adviceLabel}>Advice</Text>
          <Text>{attachment?.note || "N/A"}</Text>
        </View>

        {/* Next Followup Section */}
        <View style={styles.followUpSection}>
          <Text style={styles.followUpText}>
            Next Followup on Date:{" "}
            {formatFollowUpDate(attachment?.next_visit) ||
              "18-01-2025 (saturday)"}
          </Text>
        </View>

        {/* Hyperlinks Section */}

        {/* Doctor's Signature Section */}
        <View style={styles.signatureSection}>
          <Text>Doctor's Signature : {doctor?.name}</Text>
          {/* <Text style={styles.signatureText}>{doctor?.name || "Dr. Mallikarjun Mashalkary"}</Text> */}
          {/* Actual signature image or line would go here, for now, it's text */}
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text>
            VIBGYOR High school, 38/3, 6th cross, road, opp. Thomas Square, HSR
            Extension, Reliable Tranquil Layout, Bengaluru, Karnataka 560102
          </Text>
          <Text>Cure And Care Primary Care PVT LTD</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PrescriptionPdfDocument;
