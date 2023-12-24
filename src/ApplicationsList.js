// ApplicationsList.js
import React, { useState } from 'react';
import { useAppContext } from './useAppContext';

const ApplicationsList = () => {
    const { applications, removeApplication } = useAppContext();
    const [selectedApplicationId, setSelectedApplicationId] = useState(null);

    const formatDateTime = (timestamp) => {
        if (!timestamp) {
            return '';
        }

        const date = new Date(timestamp);

        if (isNaN(date.getTime())) {
            return '';
        }
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString().slice(0, 5);
        return `${formattedDate}, ${formattedTime}`;
    }

    const handleViewDetails = (applicationId) => {
        setSelectedApplicationId(applicationId);
    };

    const handleDeleteApplication = (application) => {
        removeApplication(application.id);
        setSelectedApplicationId(null);
    };

    return (
        <div>
            <h2>Список заявок</h2>
            <ul>
                {applications.map((app) => (
                    <li key={app.id}>
                        <strong>{app.applicantName} {app.lastName} | {formatDateTime(app.timestamp)}</strong>: {app.reason}{' '}
                        <button onClick={() => handleViewDetails(app.id)}>Переглянути деталі</button> {' '}
                        <button onClick={() => handleDeleteApplication(app)} className="deleteButton">Видалити</button>
                        {selectedApplicationId === app.id && (
                            <div>
                                <h3>Деталі заявки</h3>
                                <p>
                                    <strong>Ім'я:</strong> {app.applicantName}
                                </p>
                                <p>
                                    <strong>Прізвище:</strong> {app.lastName}
                                </p>
                                <p>
                                    <strong>По-батькові:</strong> {app.lastName}
                                </p>
                                <p>
                                    <strong>Факультет:</strong> {app.lastName}
                                </p>
                                <p>
                                    <strong>Група:</strong> {app.lastName}
                                </p>
                                <p>
                                    <strong>Тип заявки:</strong> {app.lastName}
                                </p>
                                <p>
                                    <strong>Дата та час подання:</strong> {formatDateTime(app.timestamp)}
                                </p>
                                <button onClick={() => setSelectedApplicationId(null)}>Закрити</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationsList;
