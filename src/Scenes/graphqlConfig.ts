
export const getOrderClients = {
  query: `
    query{
        clients{
          id
          name
          packages{
           is_corporate,
            service_code,
            service_name,
            image,
            price{
              discounted_price
              actual_cost
              discounted_price
              discount_percentage
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



export const getAllClientsQuery = (body: any) => {
    const queryObj = {
      query: `{clients(type:"all",  activeStatus: "${body?.status || "active"
        }", page:${body?.page || 0}, searchText: "${body?.searchText || ""
        }", count:${body?.count || 10}){
        id
        name
        logo_url
        user_max
        user_count
        status
        created_at
        contract_end
        contract_start
        parentClient{
          id
          name
        }
      }
  
      clientsCount(type:"all",  activeStatus: "${body?.status || "active"
        }", searchText: "${body?.searchText || ""}")
    }
  `,
    };
    return queryObj;
  };
  
export const getClientByIdApiQuery = (clientId: any) => ({
  query: `
    query {
      clientById(id: "${clientId}") {
        id
        name
        logo_url
        address
        state
        city
        zip
        parent_id
        user_max
        dependent_per_user
        contract_end
        contract_start
        payment_terms
        config_values
        booking_key
    other_payment_terms
        spocs {
          id
          user {
            id
            phone
            first_name
            last_name
            active_status
            secondary_phone
            designation
            email
          }
        }
      }
    }
  `,
});

export const getAllDocumentsApiQuery = (id: any, type: any) => {
  const queryObj = {
    query: `{documentFiles(type: "${type ? type : "all"}", vendor_id: "${id}"){
    id
    ext
    title
    type
    start_date
    end_date
  }}`,
  };

  return queryObj;
};
export const getClientsAllDocumentsApiQuery = (id: any, type: any) => {
  const queryObj = {
    query: `{documentFiles(type: "${type ? type : "all"}", client_id: "${id}"){
    id
    ext
    title
    type
    start_date
    end_date
  }}`,
  };

  return queryObj;
};

export const getWalletDetailsApiQuery = (clientId: any) => {
  const queryObj = {
    query: `
      query {
        bookingWallets(clientId: "${clientId}") {
          id
          percentage_applied
          client_wallet_id
          amount_used
          created_at
          user {
            first_name
            last_name
            phone
            email
          }
          clientWallet {
            id
            type
            name
            discount_percentage
            limits
            amount
          }
          booking {
            id
            collection_1_date
            collection_1_slot
            final_amount
            type
            search_keys
            status
            user {
              first_name
              last_name
              phone
              email
            }
          }
        }
      }
    `,
  };

  return queryObj;
};
export const getParentClients = (type = "parent") => ({
  query: `
    query {
      clients(type: "${type}") {
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
});


export const getClientUsersApiQuery = ({
  clientId,
  count,
  page,
  searchText,
  fromAge,
  toAge,
  gender
}: any) => {
  const queryObj = {
    query: `
      query {
        clientUsers(
          clientId: "${clientId}",
          searchText: "${searchText ?? ""}",
          count: ${count},
          page: ${page},
          fromAge: ${fromAge ?? 0},
          toAge: ${toAge ?? 0},
          gender: "${gender ?? ""}"
        ) {
          id
          phone
          first_name
          last_name
          active_status
          secondary_phone
          secondary_email
          designation
          email
          gender
          employee_id
          dob
          age
        }
        clientUsersCount(
          clientId: "${clientId}",
          searchText: "${searchText ?? ""}",
          fromAge: ${fromAge ?? 0},
          toAge: ${toAge ?? 0},
          gender: "${gender ?? ""}"
        )
      }
    `,
  };

  return queryObj;
};


export const getClinicWalletsDetailApiQuery = (clientId: any) => {
  const queryObj = {
    query: `
      query {
        clientWallets(clientId: "${clientId}") {
          id
          name
          type
          limits
          discount_percentage
          amount
          specialization
          include_ctrmi
        }
      }
    `,
  };

  return queryObj;
};

export const getClientOrdersApiQuery = (clientId: any) => ({
  query: `
    query {
      clientOrders(client_id: "${clientId}") {
        collection_1_date
        collection_1_slot
        final_amount
        id
        invoice_date
        bookings_count
        created_at
        client {
          id
          name
        }
      }
    }
  `,
});


export const constructCommunicationLinksQuery = (body: any) => {
  const queryObj = {
    query: `
      query{communicationLinks(searchText:"${body?.searchText ?? ""}", count:${body?.count ?? 1
      }, page:${body?.page ?? 10},
      booking_type: "${body?.booking_type ?? ""}",
      booking_sub_type: "${body?.booking_sub_type ?? ""}",
      booking_status: "${body?.booking_status ?? ""}",
      booking_test_type: "${body?.booking_test_type ?? ""}",
      active_status: "${body?.active_status ?? ""}",
      visit_type: "${body?.visit_type ?? ""}",
      to: "${body?.to ?? ""}",
      belongs_to: ${body?.belongs_to || 0}
      ){
    id
     name
     booking_type
     booking_sub_type
     booking_status
     booking_test_type
     active_status
     visit_type
     to
     wa_template_id
     email_template_id
     sms_template_id
     belongs_to
     waTemplate {
       id
       name
       language
       header_component
       wa_components
       text
       params_count
       params
       is_ready
       wa_status
     }
     emailTemplate {
       id
       name
       header_url
       logo_url
       text
       params_count
       params
       subject
       is_ready
     }
 }
        communicationLinksCount(searchText: "${body?.searchText ?? ""}",
        booking_type: "${body?.booking_type ?? ""}",
        booking_sub_type: "${body?.booking_sub_type ?? ""}",
        booking_status: "${body?.booking_status ?? ""}",
        booking_test_type: "${body?.booking_test_type ?? ""}",
        active_status: "${body?.active_status ?? ""}",
        visit_type: "${body?.visit_type ?? ""}",
        to: "${body?.to ?? ""}",
        belongs_to: ${body?.belongs_to || 0}
        )}
`,
  };
  return queryObj;
};

export const constructgetEmailTemplatesQuery = (body : any) => {
  const queryObj = {
    query: `
      query{emailtemplates(searchText:"${body?.search_text ?? ""}", count:${body?.count ?? 10
      },page:${body?.page ?? 0}, type:"${body?.type || ""}", belongs_to: ${body?.belongs_to || 0}){
        id
        name
        header_url
        logo_url
        text
        params_count,
        params,
        subject,
        is_ready,
        type,
        belongs_to
    }
        emailtemplatesCount(searchText: "${body?.search_text ?? ""}", type:"${body?.type || ""}", belongs_to: ${body?.belongs_to || 0})}
`,
  };
  return queryObj;
};
export const constructgetWaTemplatesQuery = (body: any) => {
  const queryObj = {
    query: `query{watemplates(searchText:"${body?.search_text ?? ""}", count:${body?.count ?? 10
      },page:${body?.page ?? 0}){
              id
              name
              language
              header_component
              wa_components
              text
              params_count,
              params,
              is_ready,
              wa_status
          }
        watemplatesCount(searchText:"${body?.search_text ?? ""}")
  }`,
  };
  return queryObj;
};