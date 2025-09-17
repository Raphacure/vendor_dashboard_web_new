import SendCommunicationForm from './SendCommunicationForm'
import PromotionalLogsComponent from '../../../pages/PromotionalData/promotionalTabs/promotionalLogs/PromotionalLogsComponent'
import CustomTab from '@/components/custom/Tab/CustomTab'

const CommunicationDetails = ({ clientId }:{clientId: any}) => {
    return (
        <div>
            <CustomTab
                tabs={[
                    {
                        label: "Email",
                        value: "1",
                        children: <SendCommunicationForm clientId={clientId} sectionName='EMAIL' />
                    },
                    {
                        label: "Whats App",
                        value: "2",
                        children: <SendCommunicationForm clientId={clientId} sectionName='WHATSAPP' />,
                    },
                    {
                        label: "SMS",
                        value: "3",
                        children: <SendCommunicationForm clientId={clientId} sectionName='SMS' />,
                    },
                    {
                        label: "Logs",
                        value: "4",
                        children: <PromotionalLogsComponent/>
                    },
                ]}
            />
        </div>
    )
}

export default CommunicationDetails