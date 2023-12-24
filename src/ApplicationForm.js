// ApplicationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './useAppContext';

const ApplicationForm = () => {
    const { addApplication } = useAppContext();
    const [applicantName, setApplicantName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [faculty, setFaculty] = useState('');
    const [group, setGroup] = useState('');
    const [applicationType, setApplicationType] = useState('scholarship');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newApplication = {
            applicantName,
            lastName,
            patronymic,
            faculty,
            group,
            applicationType,
        };

        addApplication(newApplication);

        setApplicantName('');
        setLastName('');
        setPatronymic('');
        setFaculty('');
        setGroup('');
        setApplicationType('scholarship');

        // Після збереження заявки перенаправляємо на сторінку "Заявок"
        navigate('/applications');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} required />
            </label>

            <label>
                Прізвище:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label>

            <label>
                По-батькові:
                <input type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} required />
            </label>

            <label>
                Факультет:
                <input type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} required />
            </label>

            <label>
                Група:
                <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} required />
            </label>

            <label>
                Ціль подання заявки:
                <select value={applicationType} onChange={(e) => setApplicationType(e.target.value)}>
                    <option value="scholarship">Студентська стипендія</option>
                    <option value="financialAid">Фінансова допомога</option>
                </select>
            </label>

            <button type="submit">Відправити</button>
        </form>
    );
};

export default ApplicationForm;