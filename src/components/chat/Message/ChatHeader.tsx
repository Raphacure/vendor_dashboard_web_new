import { checkIsMobile } from '@/lib/common';
import { ChatContext } from '@/pages/Chat/context/ChatConext';
import { chatTypeDto } from '@/pages/Chat/type';
import { Star, Clock, Stethoscope, Camera, FileText, User, AlertCircle, X, Database, Activity, Pill, ClipboardList, CheckCircle, Heart, Thermometer, Users, Ruler, Scale, Droplets, Calculator } from 'lucide-react';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button } from 'antd';
import { FaChevronLeft } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { patientDetailRestAPI } from '@/redux/slices/myPatients/myPatientsService';

const ChatHeader = ({ onBackBtnClick }: { onBackBtnClick: any }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [message, setMessage] = useState('');
  const [isDoctorTyping, setIsDoctorTyping] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [patientInfo, setPatientInfo] = useState<any>(null);
  const { currentChat, onlineUsers } = useContext(ChatContext);
  const [showVitals, setShowVitals] = useState(false);
  const [showReports, setShowReports] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);
  
  const dispatch = useDispatch()
  const getPatientInfo = useCallback(async () => {
    let id = currentChat?.username?.split("_")?.[1] ?? ""

    if (!id) return
    const res: any = await dispatch(patientDetailRestAPI(Number(id)) as any)
    console.log(res);
    if (res?.payload?.data) {

      setPatientInfo(res?.payload?.data)
    }
  }, [currentChat])

  useEffect(() => {
    getPatientInfo()
  }, [getPatientInfo])

  const formatTime = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <IndexStyled>
      <div className="header">
        <div className="header-main">
          <div className="doctor-info">
            {checkIsMobile() && (
              <Button
                type="text"
                icon={<FaChevronLeft size={16} />}
                onClick={onBackBtnClick}
                className="back-button"
              />
            )}
            <div className="doctor-avatar">
              {
                currentChat?.photo ? <img className="w-100 profileImg" src={currentChat?.photo || ""} alt="" /> : <>{currentChat?.name?.charAt(0)}</>
              }
            </div>
            <div className="doctor-details">
              <h3>{currentChat?.name || ""}</h3>
              <div className="doctor-status">
                {onlineUsers?.includes(currentChat?.chatId ?? "") && <>
                  <div className="status-dot"></div>
                  <span>Online</span>
                </>}
                <div className="text-xs text-gray-500">
                  {patientInfo?.age}y/o {patientInfo?.gender} • ID: {patientInfo?.id}
                </div>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="timer">
            <div className={`timer-display ${timeLeft < 300 ? 'timer-warning' : ''}`}>
              <Clock className="timer-icon" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            onClick={() => { }}
            className="action-btn symptoms opacity-50"
          >
            <Database className="action-icon" />
            History
          </button>
          <button
            onClick={() => { setShowVitals(true) }}
            className="action-btn symptoms"
          >
            <Activity className="action-icon" />
            Vitals
          </button>
          <button
            onClick={() => { }}
            className="action-btn symptoms opacity-50"
          >
            <Pill className="action-icon" />
            Rx
          </button>
          <button
            onClick={() => { }}
            className="action-btn symptoms opacity-50"
          >
            <ClipboardList className="action-icon" />
            Notes
          </button>

          {/* <button
                        onClick={() => {
                            const cameraInput = document.createElement('input');
                            cameraInput.type = 'file';
                            cameraInput.accept = 'image/*';
                            cameraInput.capture = 'environment';
                            cameraInput.onchange = (e: any) => {
                                const files = Array.from(e.target.files);
                                setAttachedFiles((prev: any) => [...prev, ...files.map(file => ({
                                    name: file.name,
                                    size: file.size,
                                    type: file.type
                                }))]);
                            };
                            cameraInput.click();
                        }}
                        className="action-btn photo"
                    >
                        <Camera className="action-icon" />
                        Photo
                    </button> */}
          <button
            onClick={() => { }}
            className="action-btn history opacity-50"
          >
            <FileText className="action-icon" />
            Report
          </button>
        </div>

        {/* <div className="vitals-container light-mode">
                    <div className="vitals-grid">
                        <div className="vital-card light-mode">
                            <div className="vital-value bp">128/82</div>
                            <div className="vital-label">BP</div>
                        </div>
                        <div className="vital-card light-mode">
                            <div className="vital-value hr">78</div>
                            <div className="vital-label">HR</div>
                        </div>
                        <div className="vital-card light-mode">
                            <div className="vital-value temp">98°</div>
                            <div className="vital-label">Temp</div>
                        </div>
                        <div className="vital-card light-mode">
                            <div className="vital-value o2">98%</div>
                            <div className="vital-label">O2</div>
                        </div>
                    </div>
                </div> */}
      </div>

      {/* Time Warning */}
      {timeLeft < 300 && (
        <div className="time-warning">
          <div className="warning-content">
            <AlertCircle className="warning-icon" />
            <span className="warning-text">Session ends in {formatTime(timeLeft)}</span>
          </div>
        </div>
      )}

      {showVitals && <VitalsModal onClose={() => {
        setShowVitals(false)
      }} patientInfo={patientInfo} />}
      {showReports && <ReportsModal onClose={() => {
        setShowReports(false)
      }} />}
    </IndexStyled>
  )
}

export default ChatHeader


const VitalsModal = ({ onClose, patientInfo }: { onClose: any, patientInfo: any }) => {

  // const { currentChat, sendMessage } = useContext(ChatContext);




  return <>
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Patient Vitals</h2>
          <button onClick={() => onClose()} className="modal-close">
            <X className="modal-close-icon" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`p-3 rounded-lg ${false ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Blood Pressure</p>
                <p className="text-lg font-bold">{patientInfo?.bp || ""}</p>
              </div>
              <Heart className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          <div className={`p-3 rounded-lg ${false ? 'bg-gray-700' : 'bg-red-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Height</p>
                <p className="text-lg font-bold">{patientInfo?.height ?? ""}</p>
              </div>
              <Ruler className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          <div className={`p-3 rounded-lg ${false ? 'bg-gray-700' : 'bg-green-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Weight</p>
                <p className="text-lg font-bold">{patientInfo?.weight ?? ""}</p>
              </div>
              <Scale className="w-6 h-6 text-teal-500" />
            </div>
          </div>


          <div className={`p-3 rounded-lg ${false ? 'bg-gray-700' : 'bg-purple-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">Blood Group</p>
                <p className="text-lg font-bold">{patientInfo?.blood_group || ""}</p>
              </div>
              <Droplets className="w-6 h-6 text-pink-500" />
            </div>
          </div>

          <div className={`p-3 rounded-lg ${false ? 'bg-gray-700' : 'bg-purple-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">BMI</p>
                <p className="text-lg font-bold">{patientInfo?.bmi || ""}</p>
              </div>
              <Calculator className="w-6 h-6 text-indigo-500" />
            </div>
          </div>
        </div>

        <div className={`p-3 rounded-lg mb-4 ${false ? 'bg-gray-700' : 'bg-green-50'}`}>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-700">Vitals within normal limits</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2 bg-blue-500 text-white rounded-lg text-sm"
        >
          Close
        </button>
      </div>
    </div>

    <div className="modal-actions">
      <button
        onClick={() => onClose()}
        className="modal-btn modal-btn-cancel"
      >
        Cancel
      </button>
    </div>
  </>
}

const ReportsModal = ({ onClose }: any) => {

  const dispatch = useDispatch()
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [report, setReport] = useState<any[]>([])
  const [selectedReports, setSelectedReports] = useState<any[]>([])

  //   const getAllAppointments = useCallback(async () => {
  //     const body: any = {
  //       userId: user?.id,
  //       page: 1,
  //       count: 50,
  //       relation: "",
  //       type: null,
  //       startDate: "",
  //       endDate: "",
  //     };

  //     const res: any = await dispatch(getAllPatientAppointments(body));
  //     if (res?.payload?.data) {

  //       let urls: any[] = []

  //       res.payload?.data?.prescriptions?.forEach((ele: any) => {
  //         ele?.attachments?.forEach((att: any) => {
  //           urls.push({
  //             url: att?.doctor_prescription_url,
  //             symptoms: att?.symptoms
  //           })
  //         })
  //       })
  //       setReport(urls);
  //     }
  //   }, [
  //     dispatch,
  //     user
  //   ]);

  console.log(report, "report");
  const { currentChat, sendMessage } = useContext(ChatContext);

  const handleSendReports = () => {
    sendMessage({
      chatType: currentChat?.chatType as chatTypeDto,
      msg: "",
      urls: selectedReports,
      type: "ATTACHMENT",
    });
    onClose();
  }


  //   useEffect(() => {
  //     getAllAppointments();
  //   }, [getAllAppointments]);

  return <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">Reports</h2>
        <button onClick={onClose} className="modal-close">
          <X className="modal-close-icon" />
        </button>
      </div>
      {
        report?.map((r: any, i: any) => {
          return (
            <div
              onClick={() => {
                setSelectedReports((prev) => {
                  if (prev.includes(r?.url)) {
                    return prev.filter(ele => ele != r?.url)
                  }
                  return [...prev, r?.url || ""]
                })
              }}
              className={`border p-2 rounder-sm mb-3 cursor-pointer ${selectedReports?.includes(r?.url) ? 'selected' : ''}`}>{i + 1}. <FileText className="file-icon" /> {r?.symptoms || ""}</div>
          )
        })
      }
      <button
        onClick={handleSendReports}
        className="modal-btn modal-btn-primary"
        style={{ width: '100%', marginTop: '1rem' }}
      >
        Send
      </button>
    </div>
  </div>
}

const IndexStyled = styled.div`
    width: 100%;

    .selected {
        background-color: #1f2937;
        color: white;
    }

    .header {
          width: 100%;
          background-color: ${false ? '#1f2937' : '#f9fafb'};
          padding: 0.75rem;
          
          
          @media screen and (max-width: 500px) {
              padding: 0px;
            
          }
          border-bottom: 1px solid ${false ? '#374151' : '#e5e7eb'};
        }

        .header-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .doctor-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .doctor-avatar {
          width: 2rem;
          height: 2rem;
          background-color: #3b82f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .doctor-details h3 {
          font-weight: 500;
          font-size: 0.875rem;
          margin: 0;
        }

        .doctor-status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .status-dot {
          width: 0.375rem;
          height: 0.375rem;
          background-color: #10b981;
          border-radius: 50%;
        }

        .rating-star {
          width: 0.75rem;
          height: 0.75rem;
          color: #fbbf24;
          fill: currentColor;
          margin-left: 0.25rem;
        }

        .timer {
          text-align: right;
        }

        .timer-display {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-family: monospace;
        }

        .timer-warning {
          color: #ef4444;
        }

        .timer-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .action-buttons {
          display: flex;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }

        .action-btn {
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          background-color: ${false ? '#374151' : '#dbeafe'};
          color: ${false ? '#ffffff' : '#000000'};
        }

        .action-btn:hover {
          opacity: 0.8;
        }

        .action-btn.symptoms {
          background-color: ${false ? '#374151' : '#dbeafe'};
        }

        .action-btn.photo {
          background-color: ${false ? '#374151' : '#fecaca'};
        }

        .action-btn.history {
          background-color: ${false ? '#374151' : '#bbf7d0'};
        }

        .action-btn.profile {
          background-color: ${false ? '#374151' : '#e9d5ff'};
        }

        .action-icon {
          width: 0.75rem;
          height: 0.75rem;
          display: inline;
          margin-right: 0.25rem;
        }

        .time-warning {
          background-color: #fef3c7;
          border-left: 2px solid #f59e0b;
          padding: 0.5rem;
        }


        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          background-color: ${false ? '#1f2937' : '#ffffff'} !important;
          border-radius: 0.75rem;
          max-width: 24rem;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          padding: 1rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .modal-title {
          font-weight: 600;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          color: ${false ? '#ffffff' : '#000000'};
        }

        .modal-close-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .symptoms-section {
          margin-bottom: 1rem;
        }

        .symptoms-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .symptoms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .symptom-btn {
          padding: 0.5rem;
          font-size: 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid;
          cursor: pointer;
          transition: all 0.2s;
        }

        .symptom-btn.selected {
          background-color: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .symptom-btn.unselected {
          background-color: ${false ? '#374151' : '#ffffff'} !important;
          color: ${false ? '#ffffff' : '#000000'} !important;
          border-color: ${true ? '#4b5563' : '#d1d5db'} !important;
        }

        .symptom-btn.unselected:hover {
          background-color: ${true ? '#4b5563' : '#f9fafb'} !important;
        }

        .pain-scale-section {
          margin-bottom: 1rem;
        }

        .pain-scale-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .pain-scale-slider {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pain-scale-label {
          font-size: 0.75rem;
        }

        .pain-scale-input {
          flex: 1;
        }

        .pain-level-display {
          text-align: center;
          margin-top: 0.5rem;
        }

        .pain-level-value {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .pain-low {
          color: #10b981;
        }

        .pain-medium {
          color: #f59e0b;
        }

        .pain-high {
          color: #ef4444;
        }

        .modal-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .modal-btn {
          flex: 1;
          padding: 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
        }

        .modal-btn-cancel {
          border: 1px solid ${false ? '#4b5563' : '#d1d5db'};
          background-color: transparent;
          color: ${false ? '#ffffff' : '#000000'};
        }

        .modal-btn-primary {
          background-color: #3b82f6;
          color: white;
        }

        .modal-btn-primary:hover {
          background-color: #2563eb;
        }

        .modal-btn-primary:disabled {
          background-color: #d1d5db;
          cursor: not-allowed;
        }

        .history-section {
          margin-bottom: 0.75rem;
        }

        .history-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }

        .history-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.25rem;
        }

        .history-icon.conditions {
          color: #ef4444;
        }

        .history-icon.medications {
          color: #3b82f6;
        }

        .history-icon.allergies {
          color: #f59e0b;
        }

        .history-item {
          padding: 0.5rem;
          border-radius: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .history-item.conditions {
          background-color: ${false ? '#374151' : '#fefce8'};
        }

        .history-item.medications {
          background-color: ${false ? '#374151' : '#eff6ff'};
        }

        .history-item-title {
          font-weight: 500;
          font-size: 0.875rem;
          margin: 0;
        }

        .history-item-subtitle {
          font-size: 0.75rem;
          color: #6b7280;
          margin: 0;
        }

        .allergy-tags {
          display: flex;
          gap: 0.25rem;
        }

        .allergy-tag {
          padding: 0.25rem 0.5rem;
          background-color: #fecaca;
          color: #991b1b;
          font-size: 0.75rem;
          border-radius: 0.25rem;
        }

        .profileImg {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* vitals */

        /* Main container styles */
.vitals-container {
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.vitals-container.dark-mode {
  background-color: #1f2937;
}

.vitals-container.light-mode {
  background-color: #f9fafb;
}

/* Grid layout */
.vitals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  text-align: center;
}

/* Individual vital cards */
.vital-card {
  padding: 0.375rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.vital-card.dark-mode {
  background-color: #374151;
}

.vital-card.light-mode {
  background-color: #ffffff;
}

/* Vital value styling */
.vital-value {
  font-weight: 700;
}

.vital-value.bp {
  color: #2563eb; /* blue-600 */
}

.vital-value.hr {
  color: #16a34a; /* green-600 */
}

.vital-value.temp {
  color: #dc2626; /* red-600 */
}

.vital-value.o2 {
  color: #9333ea; /* purple-600 */
}

/* Vital label styling */
.vital-label {
  color: #6b7280; /* gray-500 */
}


`