import { useEffect } from 'react'
import ManageWhatsAppTemplates from '../../components/CommunicationMap/whatsApp/ManageWhatsAppTemplates'
import ManageEmailTemplates from '../../components/CommunicationMap/email/ManageEmailTemplates'
import ManageCommunicationLink from '../../components/CommunicationMap/communicationLink/ManageCommunicationLink'
import { useDispatch } from 'react-redux'
import { getCommunicationMap } from '../../redux/slices/CommunicationMap/CommunicationService'
import ManageSmsTemplates from '../../components/CommunicationMap/sms/ManageSmsTemplates'
import CustomTab from '@/components/custom/Tab/CustomTab'

const ManageCommunicationMap = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommunicationMap())
  }, [dispatch])

  return (
    <div className='px-4 pt-3'>
      <CustomTab 
        tabs={
          [
            {
              label: "Whatsapp Templates",
              value: "1",
              children: <ManageWhatsAppTemplates />,
            },
            {
              label: "Email Templates",
              value: "2",
              children: <ManageEmailTemplates />,
            },
            {
              label: "SMS Templates",
              value: "3",
              children: <ManageSmsTemplates />,
            },
            {
              label: "Communication Links",
              value: "4",
              children: <ManageCommunicationLink />,
            },
          ]
        }
      />
    </div>
  )
}

export default ManageCommunicationMap