import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientConfig } from '../../../redux/slices/Clients/ClientsService'
import { RootState } from '../../../redux/store'
import { ClinicWalletsStyled } from './ClinicWallets.styled'
import { FaCirclePlus } from 'react-icons/fa6'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Switch } from 'antd'
import { toast } from 'react-hot-toast'

type prop = {
  id: string,
  configValues: any
}

const Config = ({ id , configValues}: prop) => {

  const { loading } = useSelector((state: RootState) => state.clients)
  const [sendReports, setSendReports] = useState(configValues?.sendReportsToUsers || false)
  const [sendCommunication, setSendCommunication] = useState( configValues?.sendCommunicationsToUsers || false)

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    if (loading) return
    const body = {
      config_values: {
        "sendReportsToUsers": sendReports,
        // "sendCommunicationsToUsers": sendCommunication
      }
    }
    const res: any = await dispatch(clientConfig({ id, body }))

    if (res?.payload?.success) {
      toast.success('Saved successfully!')
      window.location.reload();
    } else {
      toast.error(res?.error?.message || "Failed to save")
    }
  }
  return (
    <ClinicWalletsStyled>
      <div className="clinic-wallet-section">
        <div className="heading">
          <h3>
            Config {" "}
          </h3>
        </div>

        <div className=''>
          <Row>
            <Col>
              <Form.Group controlId="to" className='mt-3'>
                <Form.Label>Send Reports To Users:</Form.Label>
                <Switch
                  onChange={setSendReports}
                  value={sendReports} className='!ml-3' />
              </Form.Group>
            </Col>
            {/* <Col>
              <Form.Group controlId="to" className='mt-3'>
                <Form.Label>Send Communications To Users:</Form.Label>
                <Switch
                  onChange={setSendCommunication}
                  value={sendCommunication} className='ml-3' />
              </Form.Group>
            </Col> */}
          </Row>

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <Button variant='primary'
              onClick={handleSubmit}
            >{loading ? 'Saving...' : 'Save'}</Button>
          </div>
        </div>
      </div>
    </ClinicWalletsStyled>
  )
}

export default Config