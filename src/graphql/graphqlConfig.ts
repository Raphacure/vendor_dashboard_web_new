export const healthCategories = {
  query: `{
      healthCategories {
        id
        name
        image
        packages {
          image
          service_code
          service_name
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          tests{
          service_code
          service_name
          fasting
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          visit_type
        }
        }
        tests {
          service_code
          service_name
          fasting
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
          visit_type
        }
      }
    }`,
};

export const labtestPackages = {
  query: `{
      packages (is_corporate:false) {
        service_code,
        service_name,
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        },
        sort,
        image,
        tests {
          service_code,
          service_name,
          fasting,
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          },
          visit_type
        },
        vendors {
          id,
          name,
          address,
          city,
          zip,
          type
        }
      }
    }`,
};
export const constructHospitalListQuery = (obj: {
  searchText: any;
  cityId: any;
  count: any;
  page: any;
}) => {
  let queryString;
  let countqueryString;
  if (obj.searchText && obj.cityId) {
    queryString = ` vendors(type : "hospital", city : "${obj.cityId}", count: ${obj.count}, page: ${obj.page}, searchText: "${obj.searchText}")`;
    countqueryString = `vendorCount (type : "hospital", city : "${obj.cityId}", searchText: "${obj.searchText}")`;
  } else if (obj.searchText) {
    queryString = ` vendors(type : "hospital", count: ${obj.count}, page: ${obj.page}, searchText: "${obj.searchText}")`;
    countqueryString = `vendorCount (type : "hospital", searchText: "${obj.searchText}")`;
  } else if (obj.cityId) {
    queryString = ` vendors(type : "hospital", city : "${obj.cityId}", count: ${obj.count}, page: ${obj.page})`;
    countqueryString = `vendorCount (type : "hospital", city : "${obj.cityId}")`;
  } else {
    queryString = ` vendors(type : "hospital", count: ${obj.count}, page: ${obj.page})`;
    countqueryString = `vendorCount (type : "hospital")`;
  }
  const queryObj = {
    query: `{
           ${queryString}{
                id,
                name,
                city,
                zip,
                address,
                rating,
                image
            doctors {
              id
              gender
              name
              languages
              specialization
              medical_registration_body
              highest_education
              slot_start_time
              slot_end_time
              zip
              city
              gst
              registration_number
              registration_expiry_date
              work_experience_years
              rating
              consultation_cost
             }
            }
            ${countqueryString}
          }`,
  };
  return queryObj;
};

export const constructHospitalDoctorsListQuery = (obj: {
  searchText: any;
  specialization: any;
  count: any;
  page: any;
  hospitalId: any;
}) => {
  let queryString;
  let countqueryString;
  if (obj.searchText && obj.specialization) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, specialization: "${obj.specialization}", searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, specialization: "${obj.specialization}", searchText: "${obj.searchText}"))`;
  } else if (obj.searchText) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, searchText: "${obj.searchText}")`;
  } else if (obj.specialization) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId}, specialization: "${obj.specialization}")`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId}, specialization: "${obj.specialization}")`;
  } else {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, vendorId: ${obj.hospitalId})`;
    countqueryString = `doctorCount (vendorId: ${obj.hospitalId})`;
  }
  const queryObj = {
    query: `{
        ${queryString} {
          id
          type
          name
          languages
          specialization
          medical_registration_body
          highest_education
          zip
          city
          gst
          registration_number
          registration_expiry_date
          work_experience_years
          rating
          virtual_consultation_cost
          chat_consultation_cost
          call_consultation_cost
          consultation_cost
          gender
          image
          slot_start_time
          slot_end_time
          available_in_90
        }
        ${countqueryString}
      }`,
  };
  return queryObj;
};

export const constructDoctorsListQuery = (obj: {
  searchText: any;
  count: any;
  page: any;
}) => {
  let queryString;
  let countqueryString;
  if (obj.searchText) {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true, searchText: "${obj.searchText}")`;
    countqueryString = `doctorCount (virtual: true, searchText: "${obj.searchText}")`;
  } else {
    queryString = `doctors (count: ${obj.count}, page: ${obj.page}, virtual: true)`;
    countqueryString = `doctorCount (virtual: true)`;
  }
  const queryObj = {
    query: `{
        ${queryString} {
          id
          type
          name
          languages
          specialization
          medical_registration_body
          highest_education
          zip
          city
          gst
          registration_number
          registration_expiry_date
          work_experience_years
          rating
          virtual_consultation_cost
          chat_consultation_cost
          call_consultation_cost
          consultation_cost
          gender
          image
          slot_start_time
          slot_end_time
          available_in_90
        }
        ${countqueryString}
      }`,
  };
  return queryObj;
};

export const constructDoctorHospitalListQuery = (doctorId: any) => {
  const queryObj = {
    query: `{
      doctorById(id: "${doctorId}"){
        id
        vendors {
          id,
          name,
          image,
          address,
          city,
          type,
          consultation_cost
        }
      }
    }`,
  };
  return queryObj;
};

export const constructHospitalDetailsQuery = (hospitalId: any) => {
  const queryObj = {
    query: `{
          vendorById( id: ${hospitalId}){
              id,
              name,
              city,
              zip,
              address,
              rating,
              image,
              slot_start_time
              slot_end_time,
          doctors {
            id
            name
            gender
            languages
            specialization
            medical_registration_body
            highest_education
            zip
            city
            gst
            image
            registration_number
            registration_expiry_date
            work_experience_years
            rating
            slot_start_time
            slot_end_time,
            consultation_cost
            virtual_consultation_cost
            call_consultation_cost
           }
          }   
        }`,
  };
  return queryObj;
};
export const pharmacyCategories = {
  query: `
    {
        medicineCategories {
          key
          name
          bio
          detail
          image
          medicines {
            service_code
            service_name
            type
            unit
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image
            category_key
          }
        }
      }
        `,
};

export const getAllAssignedVendors = (body: any) => {
  const queryObj = {
    query: `{
    test(service_code : "${body?.id}") {
      service_code
        vendors{
        id,
        name,
        city,
        zip,
        address,
        status,
        buying_price,
        selling_price,
        mor_start_Time,
        mor_end_Time,
        mor_buying_price,
        mor_selling_price,
        mor_female_available,
        mor_male_available,

        aft_start_Time,
        aft_end_Time,
        aft_buying_price,
        aft_selling_price,
        aft_female_available,
        aft_male_available,

        eve_start_Time,
        eve_end_Time,
        eve_buying_price,
        eve_selling_price,
        eve_female_available,
        eve_male_available,
        vendor_test_code
    }
    }
  }  `,
  };

  return queryObj;
};

export const getAllMedicinesQuery = {
  query: `
    {
      medicines(
        searchText: "", 
        category: "", 
        count: null, 
        page: null
      ) {
        service_code,
        search_keys,
        service_name,
        image,
        category_key,
        type,
        unit,
        company,
        description,
        price {
          actual_cost,
          discount_percentage,
          discounted_price
        }
      }
      medicineCount(
        searchText: "", 
        category: ""
      )
    }
  `,
};

export const getAllTestsQuery = {
  query: `
    {
      tests(page: null, count: null, type: "diagnostic,ctmri") {
        service_code
        service_name
        fasting
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        }
        visit_type
      }
    }
  `,
};

export const getAllDoctorsQuery = (body: any) => {
  const param = `searchText: "${body?.searchText}", type: "${
    body?.type ? body?.type : "all"
  }",`;
  const queryObj = {
    query: `{ doctors (${param} count: ${body?.pageSize}, page: ${
      body?.pageNo
    }, activeStatus: "${body?.status ? body?.status : "all"}") {
      id
      name
      languages
      specialization
      category_ids
      bio
      isRaphaAssured
      medical_registration_body
      highest_education
      zip
      city
      gst
      type
      registration_number
      registration_expiry_date
      work_experience_years
      rating
      virtual_consultation_cost
      chat_consultation_cost
      call_consultation_cost
      gender
      image
      slot_start_time
      slot_end_time
      available_in_90
       state
    medical_registration_file
    pan_file
    aadhar_file
    aadhar_number
    pan_number
    status
      user{
        id
        email
        phone
        secondary_phone
        secondary_email
      }
      bank_details{
        id
        account_number
        name
        ifsc_code
      }
}
    doctorCount(${param})
  }
`,
  };
  return queryObj;
};

export const getAllAttachments = (
  searchText: string,
  isPrescription = true,
  startDate = null,
  endDate = null,
  isDoctorUploaded = null
) => {
  const queryObj = {
    query: `
      {
        bookingAttachments(isPrescription: ${isPrescription}, searchText:"${
      searchText || ""
    }", startDate:"${startDate || ""}", endDate:"${endDate || ""}", ${
      isDoctorUploaded != null ? `isDoctorUploaded:${isDoctorUploaded}` : ""
    } ) {
          id
          ext
          url
          booking_id
          seen
          created_at
          remarks
          is_prescription
          doctor_prescription_ext
          doctor_prescription_url
          raphacure_prescription_url
          raphacure_prescription_ext
          uploadedBy {
            id
            first_name
            last_name
            email
            phone
          }
          doctor {
            id
            name
          }
        }
      }
    `,
  };

  return queryObj;
};

export const userDependentsQuery = {
  query: `{
      me {
          id,
          first_name,
          last_name,
          email,
          phone,
          gender,
          head_id,
          relation,
          dob
          age
          client{
            id,
            name,
            type,
            logo_url
            dependent_per_user
          },
      dependents {
          id,
          first_name,
          last_name,
          email,
          phone,
          gender,
          relation,
          dob,
          age,
          head_id,
          image,
        }
      }
    }`,
};
export const myAddressQuery = {
  query: `{
  addresses {
    id
    name
    address
    landmark
    city
    state
    zip
  }
    }`,
};
export const constructBookingQuery = (count: any) => {
  const queryObj = {
    query: `{
      bookings (role: "retail" , count : ${count}, page: 0){
        id
        collection_1_date
        collection_1_slot
        collection_2_date
        collection_2_slot
        status
        type
        created_at
        final_amount
        vendor{
          id
          name
          address
          city
          zip
          type
        }
        address{
          id
          name
          address
          city
          zip
        }
        package {
          service_code,
          service_name,
          price {
            actual_cost,
            discount_percentage
          }
        }
        test {
          service_code,
          service_name,
          type
          price {
            actual_cost,
            discount_percentage
          }
        }
        user{
          id,
          first_name,
          last_name,
          gender
        }
        doctor{
          id,
          name,
          specialization
        }
        medicines{
          count
          image
          service_code
          service_name
        }
        logs{
          id
          collection_1_date
          collection_1_slot
          status
          changed_by
          created_at
          vendor_id
        }
        attachments{
          id,
          ext,
          url
        }
      }
    }`,
  };
  return queryObj;
};

export const constructAllBookingQuery = (count: any, status = "") => {
  const queryObj = {
    query: `{ bookings(page: 0, count: ${count}, status: "${status}") {
    id 
    collection_1_date
    collection_1_slot
    collection_2_date
    show_virtual_call
    virtual_type
    collection_2_slot
    notes
    status
    type
    attachmentImages
    patient_comment
    attachments {
      total_price
    }
    isCod
    user { 
      id 
      first_name
      last_name
      age
      email
      phone
      client {
        id
        name
      }
      gender
    } 
  } }`,
  };
  return queryObj;
};

export const constructAllAppointmentsQuery = (body: { from: any; to: any }) => {
  const query1 = {
    query:
      "query listBookings($dateSearchObject: DateSearchObjectInput){ bookings(page: 0, count: 100, dateSearchObject: $dateSearchObject) { id collection_1_date collection_1_slot collection_2_date collection_2_slot notes status type user { id first_name last_name image  gender} } }",
    variables: {
      dateSearchObject: {
        from: `${body?.from}`, //2024-05-03
        to: `${body?.to}`, //"2024-07-03"
        dateType: "scheduled",
      },
    },
  };

  // return queryObj;
  return query1;
};

export const constructAllScansQuery = {
  query: `{
    tests(page: 0, count: 30, type: "ctmri"){
      service_code,
      service_name,
      fasting,
      type
      image
      price {
        actual_cost
        discount_percentage
        discounted_price
      },
      vendors {
        id
        name
        address
        city
        zip
        type
      }
      visit_type
    },
}`,
};
export const constructAllCtMriCategoryQuery = {
  query: `{
    ctmriCategories {
      id
      name
      image
      tests {
        service_code
        service_name
        fasting
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        }
        visit_type
        vendors {
          id
          name
          address
          city
          zip
          type
        }
      }
    }
  }`,
};
export const constructgetCtMriByCategoryQuery = (categoryId: any) => {
  const queryObj = {
    query: `{
    ctmriCategoryById(id: ${categoryId}) {
      id
      name
      image
      tests {
        service_code
        service_name
        fasting
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        }
        visit_type
        vendors {
          id
          name
          address
          city
          zip
          type
        }
      }
    }
  }`,
  };
  return queryObj;
};

export const constructgetCtmriDetailsQuery = (body: { service_code: any }) => {
  // , city: "${city}"
  const queryObj = {
    query: `{
      test(service_code: "${body?.service_code}") {
        service_code,
        service_name,
        description,
        preperation,
        price{
          actual_cost,
          discount_percentage,
          discounted_price
        },
        fasting,
        visit_type,
        image,
        vendors{
          id,
          name,
          city,
          state,
          address,
          image,
        }
      }
    }`,
  };
  return queryObj;
};

export const getBookingIdDetails = (bookingId: any) => {
  const queryObj = {
    query: `
    {bookingById(id:"${bookingId}"){
      id,
      collection_1_date,
      collection_1_slot,
      collection_2_date,
      collection_2_slot,
      notes,
      status,
        user{
        id,
        first_name,
        last_name,
        phone,
        age,
        gender,
        image,
        email,
        parent{
          id,
          first_name,
          last_name,
          phone,
          email
        }
      }
      vendor{
        id,
        name,
        address
      }
        address{
        id,
        address,
        name,
        landmark,
        city,
        state,
        zip,
        latitude,
        longitude
      }
      to_address {
        id,
        address,
        name,
        city,
        state
      },
      package{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      test{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      tests{
        service_code,
        service_name,
        preperation,
        description,
        image,
        visit_type
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      }
      doctor{
        id,
        name,
        specialization,
          image,
        languages
      },
      type,
      final_amount,
      medicines{
        service_code,
        service_name,
        description,
        image,
        count
        price{
          discounted_price,
          discount_percentage,
          actual_cost
        }
      },
      created_at
    }}
  `,
  };
  return queryObj;
};

export const getMyPackageDetailsQuery = () => {
  const queryObj = {
    query: `
    {
      packages (is_corporate:true) {
        service_code,
        service_name,
        type
        price {
          actual_cost
          discount_percentage
          discounted_price
        },
        sort,
        image,
        tests {
          service_code,
          service_name,
          fasting,
          type
          price {
            actual_cost
            discount_percentage
            discounted_price
          },
          visit_type
        },
        vendors {
          id,
          name,
          address,
          city,
          zip,
          type
        }
      }
    
    }
  `,
  };
  return queryObj;
};

export const getEyeCategoriesQuery = (body: { type: any; city: any }) => {
  const queryObj = {
    query: `
    {
      tests(type : "${body.type}", city: "${body.city ?? ""}") {
            service_code,
            service_name,
            fasting,
            type
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image,
            visit_type
        }
      }
  `,
  };
  return queryObj;
};

export const getEyeHospitalsQuery = (body: { type: any; city: any }) => {
  const queryObj = {
    query: `{
          vendors(type : "${body.type}" , city : "${body.city}"){
              id,
              name,
              city,
              zip,
              address
          }   
        }`,
  };
  return queryObj;
};

export const getGymCategoriesQuery = (body: { type: any; city: any }) => {
  const queryObj = {
    query: `
      {vendors(type:"${body?.type}",city:"${body?.city ?? ""}"){
        id,
        name,
        zip,
        address,
        image,
        city,
        type,
        state,
        tests{
          service_code,
          service_name,
          description,
          preperation,
          visit_type,
          image,
          price{
            actual_cost,
            discounted_price,
            discount_percentage
          }
        }
      }}
`,
  };
  return queryObj;
};
export const getGymVendorsQuery = (body: { type: any; city: any }) => {
  const queryObj = {
    query: `{
      tests(type : "${body?.type}", city: "${body?.city ?? ""}") {
            service_code,
            service_name,
            fasting,
            type
            price {
              actual_cost
              discount_percentage
              discounted_price
            }
            image,
            visit_type,
            vendors {
              id,
              name,
              address,
              city,
              zip,
              type
            }
        }
      }`,
  };
  return queryObj;
};

export const constructFilteredAppointmentsQuery = (body: any) => {
  const query2 = {
    query: `
      query ListBookings($status: String!, $clientOrderId: String, $dateSearchObject: DateSearchObjectInput) {
        bookings(
          role: "${body?.role || "admin"}",
          status: $status,
          clientOrderId: $clientOrderId,
          dateSearchObject: $dateSearchObject,
          count: ${body?.count || 20},
          page: ${body?.page || 0},
          searchText: "${body?.searchText || ""}",
          type: "${body?.type || "all"}",
          clientId: "${body?.clientId || "all"}"
          ${body?.priority ? `priority: "${body?.priority}"` : ""}
          ${body?.assignTo ? `assignedToId: ${body?.assignTo ?? 0}` : ""}
          ${body?.createdBy ? `createdBy: ${body?.createdBy ?? 0}` : ""}
        ) {
          id
          collection_1_date
          attachmentImages
          patient_comment
          isCod
          tat
          collection_2_date
          collection_1_slot
          collection_2_slot
          status
          final_amount
          priority
          assignedTo {
            id
            first_name
            last_name
        }
          wallet {
            amount_used
            percentage_applied
          }
          created_at
          client_order_id
          type
          test_type
          vendor {
            id
            name
            address
            city
            zip
            type
          }
          medicines {
            service_code
            service_name
            count
          }
          address {
            id
            name
            address
            city
            zip
          }
          package {
            service_code
            service_name
            price {
              actual_cost
              discount_percentage
            }
              visit_type
          }
          test {
            service_code
            service_name
            type
            price {
              actual_cost
              discount_percentage
            }
          }
          products {
            id
            name
            price {
              actual_cost
              discount_percentage
            }
          }
          tests {
            service_code
            service_name
            type
            price {
              actual_cost
              discount_percentage
            }
          }
          user {
            id
            first_name
            last_name
            age
            phone
            secondary_phone
            relation
            email
            secondary_email
            gender
            parent {
              id
              first_name
              last_name
              phone
              email
            }
            client {
            id
              name
              parentClient {
                name
              }
            }
          }
          doctor {
            id
            name
            specialization
            image
            user {
              phone
            }
          }
          attachments {
            id
            ext
            url
            doctor_prescription_url
            doctor_prescription_ext
          }
          coupon {
            code
          }
            payment_proof
        }
        bookingCount(
         status: $status,
          clientOrderId: $clientOrderId,
          dateSearchObject: $dateSearchObject,
          searchText: "${body?.searchText || ""}",
          type: "${body?.type || "all"}",
          clientId: "${body?.clientId || "all"}",
          ${body?.priority ? `priority: "${body?.priority}",` : ","}
          ${body?.assignTo ? `assignedToId: ${body?.assignTo ?? 0}` : ""}
          ${body?.createdBy ? `createdBy: ${body?.createdBy ?? 0}` : ""}

        )
      }
    `,
    variables: {
      status: body?.status || "all",
      dateSearchObject: body?.dateSearchObject || null,
    },
  };

  return query2;
};

export const constructgetPackageDetailsQuery = (body: {
  service_code: any;
  city: any;
}) => {
  const queryObj = {
    query: `{
      package(service_code:"${body?.service_code}", city:"${body?.city ?? ""}"){
        service_code
        service_name
        image
        description
        preperation
        price {
          actual_cost
          discount_percentage
          service_charges
          discounted_price
        }
        sort
        tests {
          service_code
          service_name
          image
          description
          preperation
          fasting
          price {
            actual_cost
            discount_percentage
            service_charges
            discounted_price
          }
          visit_type
        }
        vendors {
          id
          name
          address
          city
          zip
          type
        }
      }
    }`,
  };
  return queryObj;
};

export const getBloodBankVendors = (city: any) => {
  const queryObj = {
    query: `{
      vendors(type : "blood_bank", city: "${city}"){
          id,
          name,
          city,
          zip,
          address
      }
    }`,
  };
  return queryObj;
};

export const fetchBloodTests = {
  query: `{
        bloodTests {
          id
          group
          component
          test {
            service_code
            service_name
            type
          }
        }
      }`,
};

export const fetchPatients = {
  query: `{
    patients {
      id
      first_name
      age
      last_name
      email
      secondary_email
      phone
      secondary_phone
      gender
      relation
      dob
      head_id
      patient_id
      designation
      active_status
      employee_id
      image
      address {
        id
        name
        address
        city
        state
        landmark
        zip
        latitude
        longitude
      }
    }
  }`,
};

export const getPatientDetails = (patientId: any) => {
  const queryObj = {
    query: `{
      patientById(id: "${patientId}") {
        id
        first_name
        last_name
        gender
        email
        phone
        age
        address {
          city
        }
        secondary_email
        secondary_phone
        dob
        designation
        image
        employee_id
      }
    }`,
  };
  return queryObj;
};

export const getDoctorByClinic = (body: {
  searchText: any;
  count: string;
  page: any;
  clinicId: any;
}) => {
  const queryObj = {
    query: `{
        doctors(
            searchText: "${body?.searchText}"
            type: "all"
            count: ${parseInt(body?.count)}
            page: ${body?.page}
            activeStatus: "all"
            vendorId: ${body?.clinicId}
        ) {
            id
            name
            languages
            specialization
            medical_registration_body
            highest_education
            zip
            city
            gst
            type
            registration_number
            registration_expiry_date
            work_experience_years
            rating
            virtual_consultation_cost
            chat_consultation_cost
            call_consultation_cost
            gender
            image
            slot_start_time
            slot_end_time
            available_in_90
            state
            medical_registration_file
            pan_file
            aadhar_file
            aadhar_number
            pan_number
            status
            user {
                id
                email
                phone
                secondary_phone
                secondary_email
            }
            bank_details {
                id
                account_number
                name
                ifsc_code
            }
        }
        doctorCount(searchText: "${
          body?.searchText
        }", type: "all", activeStatus: "all")
      }`,
  };
  return queryObj;
};

export const getClientOrders = (
  searchText: string,
  count: number,
  page: number
) => {
  const queryObj = {
    query: `
          query {  clientOrdersCount(page: ${page}, count: ${count},searchText:"${searchText}"),clientOrders(page: ${page}, count: ${count},searchText:"${searchText}") {
          collection_1_date
          collection_1_slot
          final_amount
          id
          status
          invoice_date
          bookings_count
          created_at,
          client{
            id,
            name
          }
  } 
  }`,
  };
  return queryObj;
};

export const getClientsNew = (
  searchText: any,
  count: number,
  page: number,
  type: any
) => {
  return {
    query: ` 
    query {
    clientsCount, clients(type: "${type}" count:${count},page:${page},name:"${searchText}") {
        id
        name
        logo_url
        parentClient {
          id
          name
        }
           packages{
            service_code,
            service_name,
            image,
            price{
            actual_cost
            discount_percentage
            discounted_price
            }
            tests{
              service_code,
              service_name
            }
            vendors {
            id
            name
            }
          }
      }
    }
  `,
  };
};

export const getClients = {
  query: `
    query {
      clients(type: "all") {
        id
        name
        logo_url
        parentClient {
          id
          name
        }
           packages{
            service_code,
            service_name,
            image,
            price{
              discounted_price
            }
            tests{
              service_code,
              service_name
            }
          }
      }
    }
  `,
};

export const getClientUsers = (
  clientId: any,
  searchText: any,
  count: any,
  page: any
) => {
  const queryObj = {
    query: `{ 
        clientUsers (clientId: "${clientId}", searchText : "${searchText}", count: ${count}, page: ${page}) {
        id
            phone
            first_name
            last_name
            active_status
            secondary_phone
            secondary_email
            designation
            email
            active_status
            gender
            employee_id
            dob
            age
          }
        clientUsersCount (clientId: "${clientId}", searchText : "${searchText}")
      }`,
  };
  return queryObj;
};

export const getOrderClients = {
  query: `
    query{
        clients{
          id
          name
          packages{
            service_code,
            service_name,
            image,
            price{
              discounted_price
            }
            tests{
              service_code,
              service_name
            }
            vendors {
              address
              city
              id
              name
              is_parent
            }
          }
        }
      }
  `,
};

export const getPrescriptions = (type: string) => {
  const queryObj = {
    query: `
      {
         bookingAttachments(isPrescription:${type === "reports"}) {
          id,
          ext,
          url,
          booking_id
          seen,
          created_at,
          remarks,
          is_prescription,
          uploadedBy{
          id,
          first_name,
          last_name,
          email,
          phone,
          }
        }
      }   
  `,
  };
  return queryObj;
};

export const getVendorsForCity = (city: any, packageCode: any) => {
  const queryObj = {
    query: `
        query {
          vendorsForPackageAndCity(city :"${city}", packageCode:"${packageCode}"){
              id,
              name,
              image
          }
        }
      `,
  };
  return queryObj;
};

export const getAllVendorsByApiQueryInVenders = (id: any) => {
  const queryObj = {
    query: `
      query{vendorById(id:"${id}"){
        id
        name,
        phone,
        primary_email,
        secondary_email,
        slot_start_time,
        slot_end_time,
        week_off_days,
        address,
        state,
        city,
        zip,
        image,
        parent_id,
        mapped_pin_codes,
        instant_pin_codes,
        rating,
        search_keys,
        type
        status
        vendor_client_id
        is_premium

        spoc_contact_first_name
        spoc_contact_last_name
        spoc_contact_phone_no
        spoc_contact_email
        spoc_contact_office_no
        spoc_contact_designation

        doctors{
        id,
        name,
        gender,
        specialization,
        image,
        consultation_cost  ,
        category_ids
      }
      parentVendor {
        id,
        name,
        city
      }
      spocs {
          id
          user {
            phone
            first_name
            last_name
            active_status
            secondary_phone
            designation
            email
          }
        }
    }}

    `,
  };

  return queryObj;
};

export const getAllVendorsApiQueryInVenders = (body: any) => {
  const queryObj = {
    query: `
    query{
      vendors (searchText:"${body?.searchText ?? ""}", ${
      body?.type ? `type: "${body?.type}",` : ""
    } count: ${body?.count ?? 10}, page: ${body?.page ?? 0}, ${
      body?.activeStatus ? `activeStatus: "${body?.activeStatus}"` : ""
    }, pincode: ${body?.pincode ?? 0} , city: "${body?.city ?? ""}"
      ${body?.createdBy ? `createdBy: ${body?.createdBy ?? ""}` : ""}
      ${body?.startDate ? `startDate: "${body?.startDate ?? ""}"` : ""}
      ${body?.endDate ? `endDate: "${body?.endDate ?? ""}"` : ""}
      )
      {
          id,
          name,
          address
          available_in_90,
          city,
          name,
          status,
          zip,
          state,
          phone,
          type,
          createdBy {
            first_name
            last_name
          },
          primary_email,
          secondary_email,
          week_off_days,
          slot_start_time,
          slot_end_time,
          search_keys,
          rating,
          image,
          created_at
  }
      vendorCount (searchText:"${body?.searchText ?? ""}", ${
      body?.type ? `type: "${body?.type}",` : ""
    }, ${
      body?.activeStatus ? `activeStatus: "${body?.activeStatus}"` : ""
    }, pincode: ${body?.pincode ?? 0} , city: "${body?.city ?? ""}"
      ${body?.createdBy ? `createdBy: ${body?.createdBy ?? ""}` : ""}
       ${body?.startDate ? `startDate: "${body?.startDate ?? ""}"` : ""}
      ${body?.endDate ? `endDate: "${body?.endDate ?? ""}"` : ""}
      )
    }
    `,
  };

  return queryObj;
};

export const getAllVendorsApiQuery = (body: any) => {
  const queryObj = {
    query: `
    query{
      vendors (searchText:"${body?.searchText ?? ""}", type: "${
      body?.type ?? "pharmacy"
    }" , count: 1000, page: 0, activeStatus: "active")
      {
          id,
          name,
          city,
  }
      vendorCount (searchText:"${body?.searchText ?? ""}", type: "${
      body?.type ?? "pharmacy"
    }", activeStatus: "active")
    }
    `,
  };

  return queryObj;
};

export const getAllMediciness = (body: any) => {
  const queryObj = {
    query: `
    query {
  medicines (searchText:"", category: "all", count: 50, page: 0){
      service_code,
      search_keys,
      service_name,
      image,
      category_key,
      type,
      unit,
      company,
      description,
       price {
                actual_cost,
                discount_percentage,
                discounted_price
              }
  }
      medicineCount (searchText:"", category: "all")
}
  `,
  };
  return queryObj;
};

export const getAllClients = {
  query: `
    query {
      clients {
        id
        name
        packages {
          service_code
          service_name
          image
          price {
            discounted_price
          }
          tests {
            service_code
            service_name
          }
        }
      }
    }
  `,
};

export const getAllTests = (body: any) => {
  const queryObj = {
    query: `
      query {
        tests(count: ${body?.count || 20}, page: ${
      body?.page || 0
    }, searchText: "${body?.searchText || ""}", type: "${
      body?.type || "diagnostic"
    }") {
          service_code
          service_name
          fasting
          description
          preperation
          image
          search_keys
          price {
            actual_cost
            discount_percentage
            discounted_price
          }
        }
        testCount(searchText: "${body?.searchText || ""}", type: "${
      body?.type || "diagnostic"
    }")
      }  
    `,
  };
  return queryObj;
};
