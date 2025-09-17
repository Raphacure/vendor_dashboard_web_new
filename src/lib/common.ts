//@ts-nocheck

import moment from "moment";

export const getTotalAmount = (cartItems) => {
  var totalAmount = 0;
  cartItems.map((itemCard, indexItem) => {
    var itemPrice = itemCard?.quantity * itemCard?.priceList[0]?.price;
    totalAmount = totalAmount + itemPrice;
  });
  return totalAmount;
};

export function updateNestedField(name: string, value: any, form: any) {
  const keys = name.split(".");

  function update(obj: any, index: number): any {
    const key = keys[index];

    if (index === keys.length - 1) {
      return { ...obj, [key]: value };
    }

    return {
      ...obj,
      [key]: update(obj[key] ?? {}, index + 1),
    };
  }

  return update(form, 0);
}

export const getName = (
  firstName: string | null,
  lastName: string | null
): string => {
  // If firstName is null or not a string, return empty string
  if (!firstName || typeof firstName !== "string") {
    return "";
  }

  // Format firstName
  const formattedFirstName =
    firstName.trim().charAt(0).toUpperCase() +
    firstName.trim().slice(1).toLowerCase();

  // Only add lastName if it is a non-empty string
  if (lastName && typeof lastName === "string" && lastName.trim() !== "") {
    console.log("lastName", lastName);
    const formattedLastName =
      lastName.trim().charAt(0).toUpperCase() +
      lastName.trim().slice(1).toLowerCase();
    return `${formattedFirstName} ${formattedLastName}`;
  }

  // If lastName is not provided or is empty, return only the formatted firstName
  return formattedFirstName;
};

export const formatDate = (date: string | number): string => {
  if (!date) return "N/A";

  // Try to parse the date using moment
  const parsedDate = moment(date, "DD/MM/YYYY");

  // Check if the date is valid
  if (!parsedDate.isValid()) {
    console.error("Invalid date format");
    return "N/A";
  }

  // Format the date as "DD MMM YYYY"
  return parsedDate.format("DD MMM YYYY");
};

export const generateTimeOptions = () => {
  const options = [];
  const startHour = 7; // 7 AM
  const endHour = 21; // 9 PM

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      const time = new Date(2024, 0, 1, hour, minutes);
      const timeString = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      options.push({
        value: time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        label: timeString,
      });
    }
  }
  return options;
};

export const getProductPrice = (product) => {
  console.log("product2", product);
  var totalAmount = "---";
  const userData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  if (userData) {
    console.log("userData", userData);
    product?.priceList.map((itemp) => {
      if (
        itemp?.city == userData?.data?.city &&
        itemp?.client == userData?.data?.companyName
      ) {
        totalAmount =
          itemp?.price + "(" + itemp?.discount + "%) / " + product?.priceType;
      }
    });
  }

  return totalAmount;
};
export const handleAddtoCard = (categoryName, item) => {
  // const raphaCartL = localStorage.getItem("raphaCart");
  // const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
  // prevItems.push({ ...item, categoryName });
  // localStorage.setItem("raphaCart", prevItems);
};

export const parseAddress = (place, addressStr) => {
  const selectedAddress = addressStr?.split(",") ?? [];
  return {
    address1: selectedAddress[0],
    address2: "",
    city:
      place?.address_components?.filter((a) =>
        a?.types?.includes("locality")
      )[0]?.long_name ||
      selectedAddress[1] ||
      "",
    state:
      place?.address_components?.filter((a) =>
        a?.types?.includes("administrative_area_level_1")
      )[0]?.long_name ||
      selectedAddress[2] ||
      "",
    country:
      place?.address_components?.filter((a) => a?.types?.includes("country"))[0]
        ?.long_name ||
      selectedAddress[3] ||
      "",
    zipcode:
      place?.address_components?.filter((a) =>
        a?.types?.includes("postal_code")
      )[0]?.long_name || "",
  };
};
export const checkIsMobile = () => {
  return window.innerWidth <= 675;
};

export function transformText(input) {
  return input
    ?.toLowerCase() // Ensure all letters are lowercase initially
    ?.split("_") // Split the string by underscores
    ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)) // Capitalize the first letter of each word
    ?.join(" "); // Join the words with a space
}

const calculateAge = (dob) => {
  if (!dob) {
    // If dob is null or undefined, return null
    return null;
  }

  const birthDate = new Date(dob);

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

export function formatWorkingDays(weekoffDays) {
  // Parse the weekoff days string into an array of numbers
  const weekoffs = weekoffDays.split(",").map((day) => parseInt(day.trim()));

  // Create an array of all days (0-6 for Sunday-Saturday)
  const allDays = [0, 1, 2, 3, 4, 5, 6];

  // Filter out the weekoff days to get business days
  const businessDays = allDays.filter((day) => !weekoffs.includes(day));

  // If no business days, return "Closed all week"
  if (businessDays.length === 0) {
    return "Closed all week";
  }

  // Map day numbers to day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Find consecutive ranges of business days
  const ranges = [];
  let currentRange = [businessDays[0]];

  for (let i = 1; i < businessDays.length; i++) {
    if (businessDays[i] === businessDays[i - 1] + 1) {
      // Continue the current range
      currentRange.push(businessDays[i]);
    } else {
      // End current range and start a new one
      ranges.push(currentRange);
      currentRange = [businessDays[i]];
    }
  }

  // Add the last range
  ranges.push(currentRange);

  // Format each range
  const formattedRanges = ranges.map((range) => {
    if (range.length === 1) {
      return dayNames[range[0]];
    } else {
      return `${dayNames[range[0]]}-${dayNames[range[range.length - 1]]}`;
    }
  });

  // Join the ranges with commas
  return formattedRanges.join(",");
}
export function formatStatus(status) {
  if (!status) return "";

  return status
    ?.toLowerCase()
    ?.split("_")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(" ");
}

export const htmlTemplate = async (data) => {
  console.log("data : ", data);

  const logoUrl =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733836287302.png";

  const attachment = data?.attachments?.[0]; // Only consider the first attachment
  const medicines = attachment?.prescriptions_medicines || [];
  const tests = attachment?.prescriptions_tests || [];

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Report</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
      }

      h3 {
          margin-top: 1rem;
      }

      .table-div {
          border-radius: 2px;
          width: 100%;
          height: 100%;
          background-color: #fff;
          padding: 1rem;
      }

      .container {
          width: 800px;
          margin: 20px auto;
          background-color: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      @media screen and (max-width: 700px) {
          .container {
              width: 100%;
          }
      }

      .header,
      .footer {
          text-align: center;
          padding: 10px 0;
      }

      .header img {
          width: 50px;
          height: 50px;
      }

      .content {
          margin: 20px 0;
      }

      .summary-section, .cons-summary-section {
          display: flex;
          justify-content: space-between;
          border: 1px solid #ddd;
          padding: 10px;
          margin-bottom: 20px;
          background-color: #f9f9f9;
          font-size: 14px;
      }

      .summary-section{
        flex-direction: row;
      }

      .cons-summary-section{
      flex-direction:column;
      }

      .summary-item {
          text-align: left;
          font-size: 1rem;
      }

      .summary-item p {
          margin: 5px 0;
      }

      .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
      }

      .table th,
      .table td {
          border: 1px solid #9747FF;
          padding: 8px;
          text-align: center;
      }

      .table th {
          background-color: #f2f2f2;
      }

      .notes {
          background-color: white;
          box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.1) inset;
          padding: 7px;
          border: 1px solid #ddd;
          margin: inherit;
      }

      .signature {
          text-align: left;
          margin-top: 2rem;
      }

      .footer {
          display: flex;
          justify-content: space-between;
      }
  </style>
</head>

<body>

  <div class="container">
      <div class="header">
          <img src=${logoUrl} alt="RaphaCure" style="height: 8vh; width: auto; float: right;">
          <div style="display: flex; flex-direction: column; align-items: flex-start; margin-left: 1rem; margin-top: 1rem;">
              <h2 id="dr">Dr. ${data?.doctor?.name || "N/A"}</h2>
              <p style="margin-left: 1rem;">${
                data?.doctor?.specialization || "N/A"
              }</p>
              <p style="margin-left: 1rem;">${
                formatStatus(data?.type) || "N/A"
              }</p>
          </div>
      </div>

      <!-- New Summary Section -->
      <div class="summary-section">
          <div class="summary-item">
              <p><strong>Booking No:</strong> ${data?.id || "N/A"}</p>
          </div>
          <div class="summary-item">
              <p><strong>Prescription Date:</strong> ${
                data?.collection_1_date || "N/A"
              }</p>
          </div>
          <div class="summary-item">
              <p><strong>Next Visit Date:</strong> ${
                attachment?.next_visit
                  ? new Date(attachment?.next_visit).toLocaleDateString()
                  : "N/A"
              }</p>
          </div>
      </div>

      <!-- Consultation Summary Section -->
      <div class="cons-summary-section">
        <div class="summary-item">
          <p><strong>Symptoms:</strong> ${attachment?.symptoms || "N/A"}</p>
        </div>
        <div class="summary-item">
          <p><strong>Advice:</strong> ${attachment?.note || "N/A"}</p>
        </div>
      </div>

      <!-- Medicine Table -->
      <div class="table-div">
          <h3>Medicine Prescribed</h3>
          <table class="table">
              <thead>
                  <tr>
                      <th>SlNo</th>
                      <th>Brand</th>
                      <th>Frequency</th>
                      <th>No of Days</th>
                      <th>Intake</th>
                  </tr>
              </thead>
              <tbody>
                  ${medicines
                    .map(
                      (medicine, index) => `
                      <tr>
                          <td>${index + 1}</td>
                          <td>${medicine?.medicine?.service_name || "N/A"}</td>
                          <td>${medicine?.frequency || "N/A"}</td>
                          <td>${medicine?.no_of_days || "N/A"}</td>
                          <td>${medicine?.intake || "N/A"}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>
      </div>

      <!-- Tests Table -->
      <div class="table-div">
          <h3>Tests Recommended</h3>
          <table class="table">
              <thead>
                  <tr>
                      <th>SlNo</th>
                      <th>Test Name</th>
                  </tr>
              </thead>
              <tbody>
                  ${tests
                    .map(
                      (test, index) => `
                      <tr>
                          <td>${index + 1}</td>
                          <td>${test?.test?.service_name || "N/A"}</td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>

          <!-- Doctor's Signature Section -->
          <div class="signature">
              <p><strong>Doctor's Signature:</strong></p>
          </div>

          <!-- Footer Section -->
          <div class="footer" style="border-top: 1px dashed #000; margin-top: 20px; padding-top: 10px;">
              <div>
                  <p style="margin: 0;">
                      <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" style="width: 16px; height: 16px; vertical-align: middle;"> 
                      wellness@raphaplus.in
                  </p>
                  <p style="margin: 0; text-align:left;">
                      <img src="https://cdn-icons-png.flaticon.com/512/483/483947.png" alt="phone" style="width: 16px; height: 16px; vertical-align: middle;"> 
                      +91 95551 66000
                  </p>
              </div>
              <div>
                  <p style="margin: 0;">
                      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="location" style="width: 16px; height: 16px; vertical-align: middle;"> 
                      Cure & Care Primary Care Pvt. Ltd.<br>
                      208, MJ Aldilla, Begur Road, Bengaluru- 560068
                  </p>
              </div>
          </div>

      </div>
  </div>
</body>
</html>`;
};

export function capitalize(input: string): string {
  try {
    // Return empty string if input is empty or undefined
    if (!input || input.trim() === "") {
      return "";
    }

    // Convert input to string in case a number or other type is passed
    const str = String(input);

    // Split the string into words, capitalize each word, and join back with spaces
    return str
      ?.trim()
      ?.split(" ")
      ?.map(
        (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      ?.join(" ");
  } catch (error) {
    console.error("Error in capitalize function:", error);
    return ""; // Return empty string on error
  }
}

function getRemainingMinutesForNextSlot() {
  const now = new Date();
  let minutes = now.getMinutes();
  let nextSlotMinutes = Math.ceil(minutes / 15) * 15;

  if (nextSlotMinutes === 60) {
    nextSlotMinutes = 0;
  }
  return nextSlotMinutes - minutes;
}

export const getNextSlotTime = (avaliData) => {
  if (!avaliData || avaliData.length === 0) {
    return "No available future slots today";
  }

  const now = new Date();
  const today = now.getDay(); // Get today's day number (0 = Sunday, ..., 6 = Saturday)

  // Filter slots available today
  const todaysSlots = avaliData.filter((slot) =>
    slot.days_of_week.includes(today)
  );

  let nextSlot = null;
  let minTimeDiff = Infinity;

  for (const slot of todaysSlots) {
    const [fromHours, fromMinutes, fromSeconds] = slot.from_time
      .split(":")
      .map(Number);
    const [toHours, toMinutes, toSeconds] = slot.to_time.split(":").map(Number);

    const fromTime = new Date();
    fromTime.setHours(fromHours, fromMinutes, fromSeconds, 0);

    const toTime = new Date();
    toTime.setHours(toHours, toMinutes, toSeconds, 0);

    if (now >= fromTime && now <= toTime) {
      return `in 2 Hrs ${getRemainingMinutesForNextSlot()} Mins (${formatStatus(
        slot.type
      )})`;
    }

    if (fromTime > now && fromTime - now < minTimeDiff) {
      nextSlot = slot;
      minTimeDiff = fromTime - now;
    }
  }

  if (!nextSlot) return "No available future slots today";

  const nextFromTime = new Date();
  const [nextHours, nextMinutes, nextSeconds] = nextSlot.from_time
    .split(":")
    .map(Number);
  nextFromTime.setHours(nextHours, nextMinutes, nextSeconds, 0);

  const diffMs = nextFromTime - now;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `in ${diffHours} Hrs ${diffMinutes} Mins (${formatStatus(
    nextSlot.type
  )})`;
};

export const getCurrentRoute = (
  locationList: { path: string; key: string }[],
  pathname: string
) => {
  const pathnameList = pathname?.split("/").filter(Boolean);
  const routesWeight = locationList.map((route) => {
    const routePathList = route?.path?.split("/").filter(Boolean);
    const weight = routePathList.reduce((acc, curr, index) => {
      if (curr?.toLowerCase?.() === pathnameList[index]?.toLowerCase?.()) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return { route, weight };
  });
  routesWeight.sort((a, b) => b.weight - a.weight);
  if (!routesWeight.length) return null;
  return routesWeight[0].weight !== 0
    ? routesWeight[0].route?.key || null
    : null;
};


export const parseAllDateFormats = (date = "")=>{
  // Example date params :- 2025-07-30T00:00:00.000Z , 30/07/2025, etc
  // Return type :- DD/MM/YYYY
   
  if (!date || typeof date !== 'string') {
    return "";
  }

  try {
    const cleanDate = date.trim();
    if (!cleanDate) return "";

    let parsedDate;
    
    // Handle DD/MM/YYYY format (European format)
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(cleanDate)) {
      const [day, month, year] = cleanDate.split('/').map(Number);
      if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
        parsedDate = new Date(year, month - 1, day);
      }
    }
    // Handle MM/DD/YYYY format (US format)
    else if (/^\d{2}\/\d{2}\/\d{4}$/.test(cleanDate)) {
      const [month, day, year] = cleanDate.split('/').map(Number);
      if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        parsedDate = new Date(year, month - 1, day);
      }
    }
    // Handle ISO format (2025-07-30T00:00:00.000Z)
    else if (/^\d{4}-\d{2}-\d{2}/.test(cleanDate)) {
      parsedDate = new Date(cleanDate);
    }
    // Handle YYYY-MM-DD format
    else if (/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) {
      const [year, month, day] = cleanDate.split('-').map(Number);
      parsedDate = new Date(year, month - 1, day);
    }
    // Handle any other format using native Date parsing
    else {
      parsedDate = new Date(cleanDate);
    }

    // Validate the parsed date
    if (!parsedDate || isNaN(parsedDate.getTime())) {
      return "";
    }

    // Ensure the date is valid (not just parsable)
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth();
    const day = parsedDate.getDate();
    
    // Reconstruct date to ensure it's valid
    const validDate = new Date(year, month, day);
    if (isNaN(validDate.getTime())) {
      return "";
    }

    // Format to DD/MM/YYYY
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedYear = year;

    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  } catch (error) {
    console.error('Error parsing date:', error);
    return "";
  }
}